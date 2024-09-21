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
import { describe, expect, test } from '@jest/globals';
import { defaultData } from "./data";

describe("test build all supported numbers", () => {
  it("should build the banner with all numbers in all fonts", async () => {
    const data: TDataBanner = defaultData;
    const numbers: string = "1234567890-*";
    const fonts: string[] = ["alphabet", "ansi-with-shadow", "bar"];

    fonts.forEach((font: string) => {
      numbers.split("").forEach((letter: string) => {
        const banner: string[] = buildBanner(letter, data, { font: font as any });

        expect(banner).toMatchSnapshot();
      });
    });

  });
})