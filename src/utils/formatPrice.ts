type PriceProps = {
  value: number;
  symbol: string;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (price: PriceProps) => {
  const isFraction = /,/.test(String(price.value)) || /\./.test(String(price.value));
  const fractionDigits = isFraction ? 2 : 0;
  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits
  }).format(price.value).replaceAll(' ', ' ').replace(',', '. ');
  const symbol = price.symbol === "USD" ? "$" : price.symbol;

  return `${formattedPrice} ${symbol}`;
};