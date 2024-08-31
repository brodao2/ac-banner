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

import { buildTitle, TBuildTitleOptions } from "./buildTitle";

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

/**
 * Shows a welcome banner.
 * The banner contains the extension name, version, info, and link to the repo.
 */
export function buildBanner(title: string, data: TDataBanner | {}, options?: TBuildTitleOptions): string[] {
  const dataBanner: TDataBanner = normalizeData(data);
  const lines: string[] = [];
  const titleLines: string[] = buildTitle(title, options);
  const leftWidth: number = titleLines[0].length;
  const rightWidth: number = dataBanner.maxLength || 20;
  const top: string = `${"-".repeat(leftWidth)}-v-${"-".repeat(rightWidth)}`
  const bottom: string = `${"-".repeat(leftWidth)}-^-${"-".repeat(rightWidth)}`

  lines.push(top);
  lines.push(`${titleLines[0]} | ${dataBanner.displayName}`);
  lines.push(`${titleLines[1]} | ${dataBanner.version}`);
  lines.push(`${titleLines[2]} | `);
  lines.push(`${titleLines[3]} | ${dataBanner.authorName}`);
  lines.push(`${titleLines[4]} | ${dataBanner.authorEmail}`);
  lines.push(bottom);

  if (dataBanner.homepage) {
    lines.push(`Homepage .: ${dataBanner.homepage}`);
  }
  if (dataBanner.repository) {
    lines.push(`Repository: ${dataBanner.repository}`);
  }
  if (dataBanner.bugs) {
    lines.push(`Issues ...: ${dataBanner.bugs}`);
  }

  /*
      
      `----------------------------------------------------------------v--------------------------------------`,
      `    ___      ___            ___       ___    ____               | ${ext?.packageJSON["displayName"]}`,
      `   /   \\    / __|    ___    | |      /   \\   | _ )              | Version ${ext?.packageJSON["version"]}`,
      `   | - |   | (__    |___|   | |__    | - |   | _ <              |                    `,
      `   |_|_|    \\___|           |____|   |_|_|   |___/  ___         | ${ext?.packageJSON["author"]["name"]}`,
      ` .[=====].[======].(-----).(------).\\_____/.[_____].]@|--Y\\_    | ${ext?.packageJSON["author"]["email"]}`,
      `___o___o_'__o____o___o___o___o____o___o___o___o___o___O___oo_\\__^______________________________________`,
      `${ext?.packageJSON["repository"]["type"]}: ${ext?.packageJSON["repository"]["url"]}`,
      `issues: ${ext?.packageJSON["bugs"]["url"]}`,
      ext?.packageJSON["homepage"] !== ext?.packageJSON["repository"]["url"] ? `homepage: ${ext?.packageJSON["homepage"]}` : "",
      "-------------------------------------------------------------------------------------------------------"
    ];
  */

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

