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

import { alphabet } from "./font/alphabet";
import { ansiWithShadow } from "./font/ansiWithShadow";
import { bar } from "./font/bar";

export type TFrameOptions = {
    _leftTop: string;
    _top: string;
    _middleTop: string;
    _rightTop: string;
    left: string;
    _middle: string;
    right: string;
    rightBottom: string;
    bottom: string;
    leftBottom: string;
    middleBottom: string;
    //middleLeft: string;
    //middleRight: string;
}

export type TBuildTitleOptions = {
    font?: "alphabet" | "ansi-with-shadow" | "bar";
    italic?: boolean;
    background?: string;
    train?: boolean;
    separator?: string;
    frame?: boolean | TFrameOptions;
}

export function buildTitle(title: string, options: TBuildTitleOptions = {}): string[] {
    const font: Record<string, string[]> = getFont(options.font);
    let lines: string[] = new Array(font["A"].length).fill("");
    title = title.toUpperCase();

    for (let index = 0; index < title.length; index++) {
        const char: string[] = font[title.at(index)] || font[" "];

        char.forEach((part: string, index: number) => {
            lines[index] += part + (options.separator);
        });
    }

    if (options.italic) {
        let spc: string[] = new Array(lines.length).fill("");
        spc.forEach((part: string, index: number) => {
            spc[index] = " ".repeat(lines.length - index - 1);
        });

        lines = lines.map((line: string, index: number) => {
            return `${spc[index]}${line}${spc[lines.length - index - 1]}`;
        });

    }

    if (options.background && (options.background !== " ")) {
        lines = lines.map((line: string) => {
            return line.replace(/[0-9A-Z /]/g, (match: string) => {
                return match == " " ? options.background : match;
            });
        });
    }

    return lines;
}

function getFont(fontName: string): Record<string, string[]> {
    let data: {};

    if (fontName == "alphabet") {
        data = buildFont(alphabet(), 6);
    } else if (fontName == "ansi-with-shadow") {
        data = buildFont(ansiWithShadow(), 7);
    } else if (fontName == "bar") {
        data = buildFont(bar(), 6);
    } else {
        throw new Error(`Font ${fontName} not found. Use one of: alphabet, ansi-with-shadow, bar`);
    }
    
    return data;
}

function buildFont(data: string, heightFont: number): Record<string, string[]> {
    let lines: string[] = data.split("\n").slice(1, heightFont + 1);
    let symbols: string[] = [];
    let result: Record<string, string[]> = {};
    let spaceWidth: number = 0;

    lines[0].split("|").forEach((part: string, index: number) => {
        part = part.trim();
        if (part.length !== 0) {
            symbols.push(part.trim());
            result[part] = new Array(lines.length - 1).fill("");
        }
    });
    lines = lines.slice(1, lines.length);

    lines.forEach((line, index) => {
        let parts: string[] = line.split("|");
        parts = line.split("|").slice(1, parts.length - 1);
        symbols.forEach((symbol: string, index2: number) => {
            result[symbol][index] = parts[index2];
            spaceWidth = Math.max(spaceWidth, parts[index2].length / 2);
        });
    });

    result[" "] = new Array(lines.length).fill(" ".repeat(spaceWidth));
    return result;
}
