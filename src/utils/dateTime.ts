import { DateTime } from "luxon";

export const shortDateFromISO = (ISOString: string) => DateTime.fromISO(ISOString).toFormat("dd / mm");

export const fullDateFromISO = (ISOString: string) => DateTime.fromISO(ISOString).toFormat("dd / mm / yyyy");

export const fullDateWithLocaleFromISO = (ISOString: string, locale: string) => DateTime.fromISO(ISOString).setLocale(locale).toFormat("dd / MMMM / yyyy");
