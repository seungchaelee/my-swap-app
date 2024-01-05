const fetchCurrencyPrice = async (currencyId: string): Promise<number> => {
  try {
    const url = `https://api.coingecko.com/api/v3/simple/price?vs_currencies=USD&ids=${currencyId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data[currencyId].usd;
  } catch (error) {
    console.error("Error fetching currency price: ", error);
    return 0;
  }
};

export default fetchCurrencyPrice;
