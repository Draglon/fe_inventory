import { map, pipe, filter, prop, sum, flatten } from "ramda";

type PriceProps = {
  value: number;
  symbol: string;
  isDefault: number;
}

type ItemsProps = PriceProps[];

// eslint-disable-next-line import/no-anonymous-default-export
export default (items: ItemsProps, symbol: string) => pipe(
  map((item: any) => filter((item: any) => item.symbol === symbol, item.price)),
  flatten,
  map(prop("value")),
  sum,
)(items);
