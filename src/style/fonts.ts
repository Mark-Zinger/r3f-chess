const fontFormats = [ "woff", "woff2", "ttf" ] as const;
type fontFormatType = typeof fontFormats[number];


export type fontType = {
    family: string;
    weights: number[];
    format: fontFormatType;
};

export type fontNameType = keyof typeof fonts 




const fonts = {
    Lovelace: {
        family: 'Lovelace',
        weights: [ 500, 700 ],
        format: 'ttf'
    }
};

export default fonts;
