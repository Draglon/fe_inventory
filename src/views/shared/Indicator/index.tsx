"use client";
import clsx from "clsx";

type IndicatorProps = {
  active: boolean | number;
};

const Indicator = ({ active }: IndicatorProps) => {
  return <div className={clsx("indicator", { "indicator--active": active })} />;
};

export default Indicator;
