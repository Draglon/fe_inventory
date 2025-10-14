import { DateTime } from "luxon";

export const timeDateFromISO = (ISOString: string) => DateTime.fromISO(ISOString).toFormat("hh:mm a");

export const shortDateFromISO = (ISOString: string) => DateTime.fromISO(ISOString).toFormat("dd / mm");

export const fullDateFromISO = (ISOString: string) => DateTime.fromISO(ISOString).toFormat("dd / mm / yyyy");

export const fullDateWithLocaleFromISO = (ISOString: string, locale: string) => DateTime.fromISO(ISOString).setLocale(locale).toFormat("dd / MMMM / yyyy");

export const fullDateWithLocaleOtherTypeFromISO = (ISOString: string, locale: string) => {
  const day = DateTime.fromISO(ISOString).toFormat("dd");
  const monthShort = DateTime.fromISO(ISOString).setLocale(locale).monthShort?.replace(".", "");
  const year = DateTime.fromISO(ISOString).year;

  return `${day} ${monthShort}, ${year}`;
};

export const fullWeekdayName = (ISOString: string, locale: string) => DateTime.fromISO(ISOString).setLocale(locale).toFormat("EEEE");