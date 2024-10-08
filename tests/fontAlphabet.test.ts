/*
Copyright [2024] [Alan Cândido (brodao@gmail.com)]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import { buildBanner, TDataBanner } from "../src";
import { describe, expect } from '@jest/globals';
import { defaultData, defaultWithUrlData } from "./data";

describe("Alphabet Font", () => {
  it("should build the banner with default options and values", async () => {
    const data: TDataBanner = defaultData;
    const expected: string[] = [
      " TTTTTT  EEEE   SSS   TTTTTT  | AC Banner           ",
      "   TT    E     S        TT    | 1.0.0               ",
      "   TT    EEE    SSS     TT    |                     ",
      "   TT    E         S    TT    | Alan Cândido        ",
      "   TT    EEEE  SSSS     TT    | brodao@gmail.com    ",
    ]

    const banner: string[] = buildBanner("Test", data, { font: "alphabet" });

    expect(banner.length).toBe(expected.length);
    expect(banner).toEqual(expected);
  });

  it("should build the banner with default options and URL´s", async () => {
    const data: TDataBanner = defaultWithUrlData;

    const expected: string[] = [
      " TTTTTT  EEEE   SSS   TTTTTT  | AC Banner           ",
      "   TT    E     S        TT    | 1.0.0               ",
      "   TT    EEE    SSS     TT    |                     ",
      "   TT    E         S    TT    | Alan Cândido        ",
      "   TT    EEEE  SSSS     TT    | brodao@gmail.com    ",
      'Homepage .: https://github.com/brodao2/ac-banner',
      'Repository: https://github.com/brodao2/ac-banner',
      'Issues ...: https://github.com/brodao2/ac-banner/issues',
    ]

    const banner: string[] = buildBanner("Test", data, { font: "alphabet" });

    expect(banner.length).toBe(expected.length);
    expect(banner).toEqual(expected);
  });

});

