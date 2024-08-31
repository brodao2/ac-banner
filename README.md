# AC Banner

[![Build Status](https://travis-ci.com/brodao2/ac-banner.svg?branch=master)](https://travis-ci.com/brodao2/ac-banner)

Create ASCII Art banners in CLI applications or VS-Code extensions

## Usage

```console
npm install ac-banner
```

## Class Data

```ts
    const data: TDataBanner = new TDataBanner();
    data.displayName = "AC Banner";
    data.version = "1.0.0";
    data.authorName = "Alan Cândido";
    data.authorEmail = "brodao@gmail.com";

    const banner: string[] = buildBanner("Test", data);
    console.log(banner.join('\n'));
```

Output:

```console
      '----------------------------------v---------------------',
      ' //////  ///////  //////  //////  | AC Banner',
      '   //    //       //        //    | 1.0.0',
      '   //    /////    //////    //    | ',
      '   //    //           //    //    | Alan Cândido',
      '   //    ///////  //////    //    | brodao@gmail.com',
      '----------------------------------^---------------------'
```

## VS-Code Extension or JSON data

```ts
    const ext: any = vscode.extensions.getExtension("brodao2.ac-banner");
    const banner: string[] = buildBanner("Test", ext.packageJSON);
    console.log(banner.join('\n'));
```

Output:

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

## Testing

```bash
 npm run test
```
