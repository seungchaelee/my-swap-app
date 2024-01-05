import { useQuery } from "react-query";
import fetchCurrencyPrice from "../api/fetchCurrencyPrice";

export const useCurrencyPrice = (currency: string) => {
  return useQuery<number, Error>(["currencyPrice", currency], () => fetchCurrencyPrice(currency), {
    enabled: !!currency,
  });
};
