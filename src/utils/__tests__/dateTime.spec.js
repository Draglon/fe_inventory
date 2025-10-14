import * as dateTime from "../dateTime";

describe("dateTime", () => {
  const mockCurrentTime = "2025-10-21T00:00:00Z";

  describe("timeDateFromISO()", () => {
    it("transforms time in (hh:mm a) format", () => {
      expect(dateTime.timeDateFromISO(mockCurrentTime)).toEqual("03:00 AM");
    });
  });

  describe("shortDateFromISO()", () => {
    it("transforms time in (dd / mm) format", () => {
      expect(dateTime.shortDateFromISO(mockCurrentTime)).toEqual("21 / 00");
    });
  });

  describe("fullDateFromISO()", () => {
    it("transforms time in (dd / mm / yyyy) format", () => {
      expect(dateTime.fullDateFromISO(mockCurrentTime)).toEqual("21 / 00 / 2025");
    });
  });

  describe("fullDateWithLocaleFromISO()", () => {
    it("transforms time in (dd / MMMM / yyyy) format", () => {
      expect(dateTime.fullDateWithLocaleFromISO(mockCurrentTime)).toEqual("21 / October / 2025");
    });
  });

  describe("fullDateWithLocaleOtherTypeFromISO()", () => {
    it("transforms time in (dd / MMMM / yyyy) format", () => {
      expect(dateTime.fullDateWithLocaleOtherTypeFromISO(mockCurrentTime)).toEqual("21 Oct, 2025");
    });
  });

  describe("fullWeekdayName()", () => {
    it("transforms time in (EEEE) format", () => {
      expect(dateTime.fullWeekdayName(mockCurrentTime)).toEqual("Tuesday");
    });
  });
});
