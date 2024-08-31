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

import { TDataBanner } from "../src";

export const defaultData: TDataBanner = new TDataBanner();
defaultData.displayName = "AC Banner";
defaultData.version = "1.0.0";
defaultData.authorName = "Alan Cândido";
defaultData.authorEmail = "brodao@gmail.com";

// data.maxLength = 20;
export const defaultWithUrlData: TDataBanner = new TDataBanner();
defaultWithUrlData.displayName = "AC Banner";
defaultWithUrlData.version = "1.0.0";
defaultWithUrlData.authorName = "Alan Cândido";
defaultWithUrlData.authorEmail = "brodao@gmail.com";
defaultWithUrlData.repository = "https://github.com/brodao2/ac-banner";
defaultWithUrlData.bugs = "https://github.com/brodao2/ac-banner/issues";
defaultWithUrlData.homepage = "https://github.com/brodao2/ac-banner";

