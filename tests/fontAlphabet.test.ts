import { buildBanner, TDataBanner } from "../src";
import { describe, expect, test } from '@jest/globals';
import { TBuildTitleOptions } from "../src/buildTitle";
import { defaultData, defaultWithUrlData } from "./data";

const DEFAULT_DATA: TDataBanner = new TDataBanner();
DEFAULT_DATA.displayName = "AC Banner";
DEFAULT_DATA.version = "1.0.0";
DEFAULT_DATA.authorName = "Alan Cândido";
DEFAULT_DATA.authorEmail = "brodao@gmail.com";
// data.maxLength = 20;
// data.repository = "https://github.com/brodao2/ac-banner";
// data.bugs = "https://github.com/brodao2/ac-banner/issues";
// data.homepage = "https://github.com/brodao2/ac-banner#readme";

const OPTIONS: TBuildTitleOptions = {
  font: "alphabet"
}

describe("AC Banner: Alphabet Font", () => {
  it("should build the banner with default options and values", async () => {
    const data: TDataBanner = defaultData;
    const expected: string[] = [
      '------------------------------v---------------------',
      " TTTTTT  EEEE   SSS   TTTTTT  | AC Banner",
      "   TT    E     S        TT    | 1.0.0",
      "   TT    EEE    SSS     TT    | ",
      "   TT    E         S    TT    | Alan Cândido",
      "   TT    EEEE  SSSS     TT    | brodao@gmail.com",
      '------------------------------^---------------------'
    ]

    const banner: string[] = buildBanner("Test", data, OPTIONS);

    expect(banner.length).toBe(expected.length);
    expect(banner).toEqual(expected);
  });

  it("should build the banner with default options and URL´s", async () => {
    const data: TDataBanner = defaultWithUrlData;

    const expected: string[] = [
      '------------------------------v---------------------',
      " TTTTTT  EEEE   SSS   TTTTTT  | AC Banner",
      "   TT    E     S        TT    | 1.0.0",
      "   TT    EEE    SSS     TT    | ",
      "   TT    E         S    TT    | Alan Cândido",
      "   TT    EEEE  SSSS     TT    | brodao@gmail.com",
      '------------------------------^---------------------',
      'Homepage .: https://github.com/brodao2/ac-banner',
      'Repository: https://github.com/brodao2/ac-banner',
      'Issues ...: https://github.com/brodao2/ac-banner/issues',
    ]

    const banner: string[] = buildBanner("Test", data, OPTIONS);

    expect(banner.length).toBe(expected.length);
    expect(banner).toEqual(expected);
  });

});

