import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
// import CurrencySelector from "./CurrencySelector";
import fetchCurrencyPrice from "../api/fetchCurrencyPrice";
import TokenModal from "./TokenModal";

const CURRENCY_TYPES = {
  FROM: "from",
  TO: "to",
};

const SwapInterface: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState<string>("dai");
  const [toCurrency, setToCurrency] = useState<string>("usd-coin");
  const [fromAmount, setFromAmount] = useState<any>("");
  const [toAmount, setToAmount] = useState<string>("");
  const [fromValueInUSD, setFromValueInUSD] = useState<string>("");
  const [toValueInUSD, setToValueInUSD] = useState<string>("");
  const [total, setTotal] = useState<string>("");
  const [activeCurrencyType, setActiveCurrencyType] = useState<string>(
    CURRENCY_TYPES.FROM
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // const currencies: string[] = [
  //   "ethereum",
  //   "tether",
  //   "usd-coin",
  //   "dai",
  //   "aave",
  //   "bitcoin",
  //   "axie-infinity",
  //   "compound-coin",
  //   "curve-dao-token",
  //   "ethereum-name-service",
  // ];

  const openTokenModal = (type: string) => {
    setActiveCurrencyType(type);
    setIsModalOpen(!isModalOpen);
  };

  const fetchPrice = async (currency: string) => {
    try {
      return await fetchCurrencyPrice(currency);
    } catch (error) {
      console.error("Error fetching currency price:", error);
    }
  };

  const fromCurrencyPriceQuery = useQuery(
    ["currencyPrice", fromCurrency],
    () => fetchPrice(fromCurrency),
    { enabled: !!fromCurrency }
  );

  const toCurrencyPriceQuery = useQuery(
    ["currencyPrice", toCurrency],
    () => fetchPrice(toCurrency),
    { enabled: !!toCurrency }
  );

  const calculateExchangeRate = (fromPrice: number, toPrice: number) =>
    fromPrice / toPrice;

  useEffect(() => {
    const updateAmounts = () => {
      if (
        fromAmount &&
        fromCurrencyPriceQuery.data &&
        toCurrencyPriceQuery.data
      ) {
        const exchangeRate = calculateExchangeRate(
          fromCurrencyPriceQuery.data,
          toCurrencyPriceQuery.data
        );
        const calculatedToAmount = (
          parseFloat(fromAmount) * exchangeRate
        ).toFixed(10);
        const calculatedToAmount2 = (
          parseFloat(fromAmount) /
          exchangeRate /
          fromAmount
        ).toFixed(10);
        setToAmount(calculatedToAmount);
        setTotal(calculatedToAmount2);
        setFromValueInUSD(
          (parseFloat(fromAmount) * fromCurrencyPriceQuery.data).toFixed(4)
        );
        setToValueInUSD(
          (parseFloat(calculatedToAmount) * toCurrencyPriceQuery.data).toFixed(
            4
          )
        );
      }
    };

    const timer = setTimeout(updateAmounts, 1500);
    return () => clearTimeout(timer);
  }, [fromAmount, fromCurrencyPriceQuery.data, toCurrencyPriceQuery.data]);

  const handleToAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newToAmount = event.target.value;
    setToAmount(newToAmount);

    if (
      !newToAmount ||
      !fromCurrencyPriceQuery.data ||
      !toCurrencyPriceQuery.data
    ) {
      setFromAmount("");
      setFromValueInUSD("");
      setToValueInUSD("");
      return;
    }

    const exchangeRate = calculateExchangeRate(
      toCurrencyPriceQuery.data,
      fromCurrencyPriceQuery.data
    );
    const calculatedFromAmount = (
      parseFloat(newToAmount) * exchangeRate
    ).toFixed(10);
    setFromAmount(calculatedFromAmount);
    setFromValueInUSD(
      (parseFloat(calculatedFromAmount) * fromCurrencyPriceQuery.data).toFixed(
        4
      )
    );
    setToValueInUSD(
      (parseFloat(newToAmount) * toCurrencyPriceQuery.data).toFixed(4)
    );
  };

  const handleFromAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFromAmount(event.target.value);
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setFromValueInUSD(toValueInUSD);
    setToValueInUSD(fromValueInUSD);
  };

  const handleTokenSelect = (selectedToken: string) => {
    if (activeCurrencyType === CURRENCY_TYPES.FROM) {
      setFromCurrency(selectedToken);
    } else {
      setToCurrency(selectedToken);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="swap-interface">
      <h3>Swap</h3>
      <div className="settings-button" onClick={() => alert("준비 중입니다.")}>
        ⚙️
      </div>
      <div className="input-container">
        <button onClick={() => openTokenModal(CURRENCY_TYPES.FROM)}>
          {fromCurrency.toUpperCase()}
        </button>
        {isModalOpen && (
          <TokenModal
            onTokenSelect={handleTokenSelect}
            onClose={() => setIsModalOpen(false)}
          />
        )}
        {/* <CurrencySelector
          currencies={currencies.map((currency) => currency.toUpperCase())}
          selectedCurrency={fromCurrency.toUpperCase()}
          onSelectCurrency={(currency: string) =>
            setFromCurrency(currency.toLowerCase())
          }
        /> */}
        <input
          className="amount-input"
          type="number"
          value={fromAmount}
          onChange={handleFromAmountChange}
          placeholder="0.0"
        />
        {fromValueInUSD && (
          <div className="currency-value">${fromValueInUSD} USD</div>
        )}
      </div>
      <button className="swap-button" onClick={handleSwapCurrencies}>
        Swap
      </button>
      <div className="input-container">
        <button onClick={() => openTokenModal(CURRENCY_TYPES.TO)}>
          {toCurrency.toUpperCase()}
        </button>
        {/* <CurrencySelector
          currencies={currencies.map((currency) => currency.toUpperCase())}
          selectedCurrency={toCurrency.toUpperCase()}
          onSelectCurrency={(currency: string) =>
            setToCurrency(currency.toLowerCase())
          }
        /> */}
        <input
          className="amount-input"
          type="number"
          value={toAmount}
          onChange={handleToAmountChange}
          placeholder="0.0"
        />
        {toValueInUSD && (
          <div className="currency-value">${toValueInUSD} USD</div>
        )}
      </div>
      <div className="Amount-value">
        1{toCurrency} = {total}
        {fromCurrency}
      </div>
    </div>
  );
};

export default SwapInterface;
