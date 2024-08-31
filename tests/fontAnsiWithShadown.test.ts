import { buildBanner, TDataBanner } from "../src";
import { describe, expect, test } from '@jest/globals';
import { TBuildTitleOptions } from "../src/buildTitle";
import { defaultData, defaultWithUrlData } from "./data";

const OPTIONS: TBuildTitleOptions = {
  font: "ansi-with-shadow"
}

describe("AC Banner: Ansi With Shadow Font", () => {
  it("should build the banner with default options and values", async () => {
    const data: TDataBanner = defaultData;
    const expected: string[] = [
      '-------------------------------------------v---------------------',
      " ████████╗  ███████╗  ███████╗  ████████╗  | AC Banner",
      " ╚══██╔══╝  ██╔════╝  ██╔════╝  ╚══██╔══╝  | 1.0.0",
      "    ██║     █████╗    ███████╗     ██║     | ",
      "    ██║     ██╔══╝    ╚════██║     ██║     | Alan Cândido",
      "    ██║     ███████╗  ███████║     ██║     | brodao@gmail.com",
      '-------------------------------------------^---------------------'
    ]

    const banner: string[] = buildBanner("Test", data, OPTIONS);

    expect(banner.length).toBe(expected.length);
    expect(banner).toEqual(expected);
  });

  it("should build the banner with default options and URL´s", async () => {
    const data: TDataBanner = defaultWithUrlData;
    const expected: string[] = [
      '-------------------------------------------v---------------------',
      " ████████╗  ███████╗  ███████╗  ████████╗  | AC Banner",
      " ╚══██╔══╝  ██╔════╝  ██╔════╝  ╚══██╔══╝  | 1.0.0",
      "    ██║     █████╗    ███████╗     ██║     | ",
      "    ██║     ██╔══╝    ╚════██║     ██║     | Alan Cândido",
      "    ██║     ███████╗  ███████║     ██║     | brodao@gmail.com",
      '-------------------------------------------^---------------------',
      'Homepage .: https://github.com/brodao2/ac-banner',
      'Repository: https://github.com/brodao2/ac-banner',
      'Issues ...: https://github.com/brodao2/ac-banner/issues',
    ]

    const banner: string[] = buildBanner("Test", data, OPTIONS);

    expect(banner.length).toBe(expected.length);
    expect(banner).toEqual(expected);
  });

});

