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

export type TBuildTitleOptions = {
    font?: "alphabet" | "ansi-with-shadow" | "bar";
    negative?: boolean;
    italic?: boolean;
    background?: string;
    train?: boolean;
    separator?: string;
}

export function buildTitle(title: string, options: TBuildTitleOptions = {}): string[] {
    const font: Record<string, string[]> = getFont(options.font || "bar");
    const lines: string[] = new Array(font["A"].length).fill("");
    title = title.toUpperCase();

    for (let index = 0; index < title.length; index++) {
        const char: string[] = font[title.at(index)] || font[" "];

        char.forEach((part: string, index: number) => {
            lines[index] += part + (options.separator || "");
        });
    }

    return lines;
}

function getFont(fontName: string): Record<string, string[]> {
    let data: {};

    if (fontName == "alphabet") {
        data = buildFont(alphabet());
    } else if (fontName == "ansi-with-shadow") {
        data = buildFont(ansiWithShadow());
    } else if (fontName == "bar") {
        data = buildFont(bar());
    } else {
        throw new Error(`Font ${fontName} not found. Use one of: alphabet, ansi-with-shadow, bar`);
    }

    return data;
}

function buildFont(data: string): Record<string, string[]> {
    let lines: string[] = data.split("\n").slice(1, 7);
    let symbols: string[] = [];
    let result: Record<string, string[]> = {};
    let spaceWidth: number = 0;

    lines[0].split("|").forEach((part: string, index: number) => {
        part = part.trim();
        if (part.length !== 0) {
            symbols.push(part);
            result[part] = new Array(lines.length).fill("");
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

function alphabet(): string {
    return `
| A    | B     | c    | D    | E    | F    | G     | H    | I   | J     | K    | L    | M     | N     | O     | P     | Q     | R     | S     | T      | U     | V       | W       |X     | Y      | Z     | 0     | 1    | 2     | 3    | 4     | 5    | 6     | 7     | 8     | 9     | -    | *     |
|  AA  | BBBB  |  CCC | DDD  | EEEE | FFFF |  GGG  | H  H | III |     J | K  K | L    | M   M | N   N |  OOO  | PPPP  |  QQQ  | RRRR  |  SSS  | TTTTTT | U   U | V     V | W     W |X   X | Y   Y  | ZZZZZ |  000  |  11  |   22  | 333  |  4  4 | 555  |   6   | 77777 |  888  |  9999 |      | * * * |
| A  A | B   B | C    | D  D | E    | F    | G     | H  H |  I  |     J | K K  | L    | MM MM | NN  N | O   O | P   P | Q   Q | R   R | S     |   TT   | U   U | V     V | W     W | X X  |  Y Y   |    Z  | 0   0 | 111  |  2  2 |    3 |  4  4 | 5    |  6    |    7  | 8   8 | 9   9 |      |  ***  |
| AAAA | BBBB  | C    | D  D | EEE  | FFF  | G  GG | HHHH |  I  |     J | KK   | L    | M M M | N N N | O   O | PPPP  | Q   Q | RRRR  |  SSS  |   TT   | U   U |  V   V  | W  W  W |  X   |   Y    |   Z   | 0   0 |  11  |    2  |  33  |  4444 | 555  | 6666  |   7   |  888  |  9999 | ---- | ***** |
| A  A | B   B | C    | D  D | E    | F    | G   G | H  H |  I  | J   J | K K  | L    | M   M | N  NN | O   O | P     | QQ  Q | R R   |     S |   TT   | U   U |   V V   |  W W W  | X X  |   Y    |  Z    | 0   0 |  11  |   2   |    3 |     4 |    5 | 6   6 |   7   | 8   8 |    9  |      |  ***  |
| A  A | BBBB  |  CCC | DDD  | EEEE | F    |  GGG  | H  H | III |  JJJ  | K  K | LLLL | M   M | N   N |  OOO  | P     |  QQQQ | R  RR | SSSS  |   TT   |  UUU  |    V    |   W W   |X   X |   Y    | ZZZZZ |  000  | 11l1 |  2222 | 333  |     4 | 555  |  666  |   7   |  888  |   9   |      | * * * |
`
}

function ansiWithShadow(): string {
    return `
| A        | B        | c        | D        | E        | F        | G         | H        | I   | J        | K        | L        | M           | N          | O         | P        | Q         | R        | S        | T         | U         | V         | W          | X          | Y         | Z        | 0         | 1     | 2         | 3         | 4         | 5         | 6         | 7        | 8        | 9        | -      | *      |
|  █████╗  | ██████╗  |  ██████╗ | ██████╗  | ███████╗ | ███████╗ |  ██████╗  | ██╗  ██╗ | ██╗ |      ██╗ | ██╗  ██╗ | ██╗      | ███╗   ███╗ | ███╗   ██╗ |  ██████╗  | ██████╗  |  ██████╗  | ██████╗  | ███████╗ | ████████╗ | ██╗   ██╗ | ██╗   ██╗ | ██╗    ██╗ |  ██╗  ██╗  | ██╗   ██╗ | ███████╗ |  ██████╗  |   ██╗ |  ██████╗  |  ██████╗  |  ██╗  ██╗ |  ███████╗ |  ██████╗  | ███████╗ |  █████╗  |  █████╗  |        |        |
| ██╔══██╗ | ██╔══██╗ | ██╔════╝ | ██╔══██╗ | ██╔════╝ | ██╔════╝ | ██╔════╝  | ██║  ██║ | ██║ |      ██║ | ██║ ██╔╝ | ██║      | ████╗ ████║ | ████╗  ██║ | ██╔═══██╗ | ██╔══██╗ | ██╔═══██╗ | ██╔══██╗ | ██╔════╝ | ╚══██╔══╝ | ██║   ██║ | ██║   ██║ | ██║    ██║ |  ╚██╗██╔╝  | ╚██╗ ██╔╝ | ╚══███╔╝ | ██╔═████╗ |  ███║ |  ╚════██╗ |  ╚════██╗ |  ██║  ██║ |  ██╔════╝ | ██╔════╝  | ╚════██║ | ██╔══██╗ | ██╔══██╗ |        | ▄ ██╗▄ |
| ███████║ | ██████╔╝ | ██║      | ██║  ██║ | █████╗   | █████╗   | ██║  ███╗ | ███████║ | ██║ |      ██║ | █████╔╝  | ██║      | ██╔████╔██║ | ██╔██╗ ██║ | ██║   ██║ | ██████╔╝ | ██║   ██║ | ██████╔╝ | ███████╗ |    ██║    | ██║   ██║ | ██║   ██║ | ██║ █╗ ██║ |   ╚███╔╝   |  ╚████╔╝  |   ███╔╝  | ██║██╔██║ |  ╚██║ |   █████╔╝ |   █████╔╝ |  ███████║ |  ███████╗ | ███████╗  |     ██╔╝ | ╚█████╔╝ | ╚██████║ | █████╗ |  ████╗ |
| ██╔══██║ | ██╔══██╗ | ██║      | ██║  ██║ | ██╔══╝   | ██╔══╝   | ██║   ██║ | ██╔══██║ | ██║ | ██   ██║ | ██╔═██╗  | ██║      | ██║╚██╔╝██║ | ██║╚██╗██║ | ██║   ██║ | ██╔═══╝  | ██║▄▄ ██║ | ██╔══██╗ | ╚════██║ |    ██║    | ██║   ██║ | ╚██╗ ██╔╝ | ██║███╗██║ |   ██╔██╗   |   ╚██╔╝   |  ███╔╝   | ████╔╝██║ |   ██║ |  ██╔═══╝  |   ╚═══██╗ |  ╚════██║ |  ╚════██║ | ██╔═══██╗ |    ██╔╝  | ██╔══██╗ |  ╚═══██║ | ╚════╝ | ▀╚██╔▀ |
| ██║  ██║ | ██████╔╝ | ╚██████╗ | ██████╔╝ | ███████╗ | ██║      | ╚██████╔╝ | ██║  ██║ | ██║ | ╚█████╔╝ | ██║  ██╗ | ███████╗ | ██║ ╚═╝ ██║ | ██║ ╚████║ | ╚██████╔╝ | ██║      | ╚██████╔╝ | ██║  ██║ | ███████║ |    ██║    | ╚██████╔╝ |  ╚████╔╝  | ╚███╔███╔╝ |  ██╔╝ ██╗  |    ██║    | ███████╗ | ╚██████╔╝ |   ██║ |  ███████╗ |  ██████╔╝ |       ██║ |  ███████║ | ╚██████╔╝ |    ██║   | ╚█████╔╝ |  █████╔╝ |        |   ╚═╝  |
| ╚═╝  ╚═╝ | ╚═════╝  |  ╚═════╝ | ╚═════╝  | ╚══════╝ | ╚═╝      |  ╚═════╝  | ╚═╝  ╚═╝ | ╚═╝ |  ╚════╝  | ╚═╝  ╚═╝ | ╚══════╝ | ╚═╝     ╚═╝ | ╚═╝  ╚═══╝ |  ╚═════╝  | ╚═╝      |  ╚══▀▀═╝  | ╚═╝  ╚═╝ | ╚══════╝ |    ╚═╝    |  ╚═════╝  |   ╚═══╝   |  ╚══╝╚══╝  |  ╚═╝  ╚═╝  |    ╚═╝    | ╚══════╝ |  ╚═════╝  |   ╚═╝ |  ╚══════╝ |  ╚═════╝  |      ╚═╝  | ╚══════╝  | ╚═════╝   |   ╚═╝    | ╚════╝   | ╚════╝   |        |        |
`;
}

function bar(): string {
    return `
| A       | B       | c      | D        | E       | F       | G         | H       | I  | J       | K        | L       | M           | N         | O        | P       | Q         | R       | S      | T      | U        | V         | W           | X          | Y        | Z      | 0         | 1      | 2       | 3        | 4       | 5        | 6        | 7      | 8       | 9         | -     | *          |
| /////// | //////  | ////// | //////   | /////// | /////// |  //////   | //   // | // |      // | //    // | //      | ///     /// | ///    // |  //////  | //////  |  //////   | //////  | ////// | ////// | //    // | //     // | //       // | //      // | //    // | ////// |  ///////  |  ///   | /////// | //////   | //   // | //////// |  /////   | ////// | /////// |  //////// |       | //  //  // |     |
| //   // | //   // | //     | //    // | //      | //      | //        | //   // | // |      // | //   //  | //      | ////   //// | ////   // | //    // | //   // | //     // | //   // | //     |   //   | //    // | //     // | //       // |   //  //   |  //   // |    //  | //   //// | / //   |      // |       // | //   // | //       | //       |     // | //   // |  //    // |       |   //  //   |              
| /////// | //////  | //     | //    // | /////   | /////   | //    /// | /////// | // |      // | /////    | //      | //  //// // | // //  // | //    // | //////  | //  /  // | //////  | ////// |   //   | //    // | //     // | //   /   // |    ///     |   ////   |   //   | // //  // |   //   | /////// |  /////   | /////// | //////// | ///////  |    //  | /////// |  //////// | ///// | ////////// |
| //   // | //   // | //     | //    // | //      | //      | //     // | //   // | // | //   // | //   //  | //      | //    // // | //  // // | //    // | //      | // //  // | //   // |     // |   //   | //    // |   //   // | //  ///  // |  //  //    |    //    |  //    | ///    // |   //   | //      |       // |      // |       // | //    // |   //   | //   // |        // |       |   //  //   |
| //   // | //////  | ////// | //////   | /////// | //      |  ///////  | //   // | // |   ///// | //    // | /////// | //       // | //   //// |  //////  | //      |   //////  | //   // | ////// |   //   |  //////  |    ////   |   ///  ///  | //     //  |   //     | ////// |  //////   | ////// | /////// | //////   |      // | //////// |  //////  |  //    | /////// |  //////// |       | //  //  // |
`
}

