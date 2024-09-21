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

import { buildTitle, TBuildTitleOptions, TFrameOptions } from "./buildTitle";

export class TDataBanner {
  displayName: string;
  version: string;
  authorName: string;
  authorEmail: string;
  maxLength?: number;
  repository?: string
  bugs?: string
  homepage?: string
}

const defaultOptions: TBuildTitleOptions = {
  font: "bar",
  italic: false,
  background: " ",
  train: false,
  separator: "",
  frame: false
}

/**
 * Builds a banner string array from the provided title and data.
 *
 * @param title - The title to be displayed in the banner.
 * @param data - The data to be displayed in the banner. Can be a `TDataBanner` object or a plain object with the required properties.
 * @param options - Optional options for building the title.
 * @returns An array of strings representing the banner.
 */
export function buildBanner(title: string, data: TDataBanner | {}, _options?: TBuildTitleOptions): string[] {
  const dataBanner: TDataBanner = normalizeData(data);
  const options: TBuildTitleOptions = normalizeOptions(_options);
  const frame: TFrameOptions = options.frame as TFrameOptions;
  const titleLines: string[] = buildTitle(title, options);
  let leftWidth: number = titleLines[0].length;
  let rightWidth: number = dataBanner.maxLength || 20;
  let lines: string[] = [];
  const middle: string = frame?._middle || "|";

  lines.push(`${titleLines[0]} ${middle} ${dataBanner.displayName.padEnd(rightWidth, " ")}`);
  lines.push(`${titleLines[1]} ${middle} ${dataBanner.version.padEnd(rightWidth, " ")}`);
  lines.push(`${titleLines[2]} ${middle} ${"".padEnd(rightWidth, " ")}`);
  lines.push(`${titleLines[3]} ${middle} ${dataBanner.authorName.padEnd(rightWidth, " ")}`);
  lines.push(`${titleLines[4]} ${middle} ${dataBanner.authorEmail.padEnd(rightWidth, " ")}`);

  titleLines.slice(5).forEach((line: string) => {
    lines.push(`${line} ${middle} ${" ".padEnd(rightWidth, " ")}`);
    //lines.push(line);
  });

  if (frame) {
    lines = lines.map((line: string) => {
      return `${frame.left}${line}${frame.right}`;
    });

    leftWidth++;
    rightWidth++;
    const top: string = `${frame._leftTop}${frame._top.repeat(leftWidth)}${frame._middleTop}${frame._top.repeat(rightWidth)}${frame._rightTop}`
    lines.unshift(top);

    const bottom: string = `${frame.leftBottom}${frame.bottom.repeat(leftWidth)}${frame.middleBottom}${frame.bottom.repeat(rightWidth)}${frame.rightBottom}`
    lines.push(bottom);
  }

  if (dataBanner.homepage) {
    lines.push(`Homepage .: ${dataBanner.homepage}`);
  }
  if (dataBanner.repository) {
    lines.push(`Repository: ${dataBanner.repository}`);
  }
  if (dataBanner.bugs) {
    lines.push(`Issues ...: ${dataBanner.bugs}`);
  }

  return lines;
}

function normalizeData(data: TDataBanner | {}): TDataBanner {
  let dataBanner: TDataBanner;

  if (data instanceof TDataBanner) {
    dataBanner = data;
  } else {
    dataBanner = {
      displayName: data["displayName"],
      version: data["version"],
      authorName: data["author"]["name"],
      authorEmail: data["author"]["email"],
      maxLength: data["maxLength"],
      repository: data["repository"]["url"] || data["repository"],
      bugs: data["bugs"]["url"] || data["bugs"],
      homepage: data["homepage"]["url"] || data["homepage"],
    };
  }

  if (!dataBanner.maxLength) {
    dataBanner.maxLength = 20;
    ["displayName", "version", "authorName", "authorEmail"].forEach((key: string) => {
      dataBanner.maxLength = Math.max(dataBanner.maxLength, dataBanner[key as keyof TDataBanner].toString().length);
    });
  }

  return dataBanner;
}

function normalizeOptions(options: TBuildTitleOptions): TBuildTitleOptions {
  if (!options) {
    options = defaultOptions;
  } else {
    options = { ...defaultOptions, ...options };
  }

  if (typeof options.frame === "boolean") {
    if (options.frame === true) {
      if (options.font !== "ansi-with-shadow") {
        options.frame = {
          _leftTop: "*",
          _top: "-",
          _rightTop: "*",
          left: "|",
          _middle: "|",
          right: "|",
          rightBottom: "*",
          bottom: "-",
          leftBottom: "*",
          //middleLeft: "*",
          //middleRight: "*",
          _middleTop: "v",
          middleBottom: "^"
        }
      } else {
        options.frame = {
          _leftTop: "╔",
          _top: "═",
          _rightTop: "╗",
          left: "║",
          _middle: "╎",
          right: "║",
          rightBottom: "╝",
          bottom: "═",
          leftBottom: "╚",
          //middleLeft: "*",
          //middleRight: "*",
          _middleTop: "╤",
          middleBottom: "╧"
        }

      }
    } else {
      options.frame = undefined
    };
  }

  return options;
}

