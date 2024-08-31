# AC Banner
<!-- 
![Version](https://img.shields.io/visual-studio-marketplace/v/brodao.ac-banner)
![Installs](https://img.shields.io/visual-studio-marketplace/i/brodao.ac-banner)
![Downloads](https://img.shields.io/visual-studio-marketplace/d/brodao.ac-banner)
![Rating](https://img.shields.io/visual-studio-marketplace/stars/brodao.ac-banner) 
![Visual Studio Marketplace Last Updated](https://img.shields.io/visual-studio-marketplace/last-updated/brodao.ac-banner)
-->

<!-- prettier-ignore-start -->
[![GitHub Stars](https://img.shields.io/github/stars/brodao2/ac-banner?style=plastic)](https://github.com/brodao2/ac-banner/stargazers)
![GitHub Top Language](https://img.shields.io/github/languages/top/brodao2/ac-banner)
![GitHub Workflow Status](https://github.com/github/docs/actions/workflows/ci.yml/badge.svg)
![GitHub Last Commit](https://img.shields.io/github/last-commit/brodao2/ac-banner)
[![GitHub License](https://img.shields.io/github/license/brodao2/ac-banner?style=plastic)](https://github.com/brodao2/ac-banner/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/brodao2/ac-banner?style=plastic)](https://github.com/brodao2/ac-banner/issues)
[![GitHub forks](https://img.shields.io/github/forks/brodao2/ac-banner?style=plastic)](https://github.com/brodao2/ac-banner/network)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- prettier-ignore-end -->

[English](./README-us.md)

Crie faixas de arte ASCII para uso em aplicativos CLI ou extensões VS-Code.

## Instalação

```console
npm install ac-banner
```

## Uso com classe de dados

```ts
    const data: TDataBanner = new TDataBanner();
    data.displayName = "AC Banner";
    data.version = "1.0.0";
    data.authorName = "Alan Cândido";
    data.authorEmail = "brodao@gmail.com";

    const banner: string[] = buildBanner("Test", data);
    console.log(banner.join('\n'));
```

Saída:

```console
      '----------------------------------v---------------------',
      ' //////  ///////  //////  //////  | AC Banner',
      '   //    //       //        //    | 1.0.0',
      '   //    /////    //////    //    | ',
      '   //    //           //    //    | Alan Cândido',
      '   //    ///////  //////    //    | brodao@gmail.com',
      '----------------------------------^---------------------'
```

## Uso com extensão **VS-Code** or dado em formato JSON

```ts
    const ext: any = vscode.extensions.getExtension("brodao2.ac-banner");
    const banner: string[] = buildBanner("Test", ext.packageJSON);
    console.log(banner.join('\n'));
```

Saída:

```console
      '----------------------------------v---------------------',
      ' //////  ///////  //////  //////  | AC Banner',
      '   //    //       //        //    | 1.0.0',
      '   //    /////    //////    //    | ',
      '   //    //           //    //    | Alan Cândido',
      '   //    ///////  //////    //    | brodao@gmail.com',
      '----------------------------------^---------------------'
```

## API

```ts
/**
* Builds a banner string array from the provided title and data.
*
* @param title - The title to be displayed in the banner.
* @param data - The data to be displayed in the banner. Can be a `TDataBanner` object or a plain object with the required properties.
* @param options - Optional options for building the title.
* @returns An array of strings representing the banner.
 */
export function buildBanner(title: string, data: TDataBanner | {}, options?: TBuildTitleOptions): string[] {
```

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/brodao2"><img src="https://avatars.githubusercontent.com/u/114854608?v=4?s=50" width="50px;" alt="Alan Cândido"/><br /><sub><b>Alan Cândido</b></sub></a><br /><a href="https://github.com/brodao2/ac-banner/commits?author=brodao2" title="Code">💻</a> <a href="https://github.com/brodao2/ac-banner/commits?author=brodao2" title="Documentation">📖</a> <a href="#ideas-brodao2" title="Ideas, Planning, & Feedback">🤔</a> <a href="#projectManagement-brodao2" title="Project Management">📆</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->