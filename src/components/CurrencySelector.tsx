import React from "react";

interface CurrencySelectorProps {
  currencies: string[];
  selectedCurrency: string;
  onSelectCurrency: (currency: string) => void;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  currencies,
  selectedCurrency,
  onSelectCurrency,
}) => {
  return (
    <select
      className="currency-select"
      value={selectedCurrency}
      onChange={(e) => onSelectCurrency(e.target.value)}
    >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelector;
