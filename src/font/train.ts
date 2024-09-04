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

export function getComposition(type: number, width: number): string[] {
    let composition: string[] = [];
    width = width - 2;

    if (type === 0) {
        composition = [
            `.[${"=".repeat(width)}]`,
            `__o${"_".repeat(width)}o_`
        ];
    } else if (type === 1) {
        composition = [
            `.(${"-".repeat(width)})`,
            `__o${"_".repeat(width)}o_`
        ]
    } else if (type === 2) {
        composition = [
            `.\\${"_".repeat(width)}/`,
            `__o${"_".repeat(width)}o_`
        ]
    } else if (type === 3) {
        composition = [
            `.[${"_".repeat(width)}]`,
            `__o${"_".repeat(width)}o_`
        ]
    } else if (type === -1) {
        composition = [
            `.]@|--Y\_`,
            "_O___oo_\_"
        ]
    }

    return composition;
}
/*
` .[=====].[======].(-----).(------).\\_____/.[_____].]@|--Y\\_    | ${ext?.packageJSON["author"]["email"]}`,
`___o___o_'__o____o___o___o___o____o___o___o___o___o___O___oo_\\__^______________________________________`,
*/
