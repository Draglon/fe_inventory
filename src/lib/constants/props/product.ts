export type ProductProps = {
  _id: string;
  title: string;
  type: string;
  serialNumber: string;
  isNew: boolean;
  photo: string;
  specification: string;
  date: string;
  guarantee?: {
    start: string;
    end: string;
  }
  price: { value: number, symbol: string, isDefault: boolean}[];
}
