interface Volume {
    value: number;
    unit: string;
}

interface Temp {
    value: number;
    unit: string;
}

interface Malt {
    name: string;
    amount: Volume;
}

interface Hop {
    name: string;
    amount: Volume;
    add: string;
    attribute: string;
}

interface Method {
    mash_temp: {
        temp: Temp;
        duration: number;
    }[];
    fermentation: {
        temp: Temp;
    };
    twist: null | string;
}

interface Ingredients {
    malt: Malt[];
    hops: Hop[];
    yeast: string;
}

export interface Product {
    id: number;
    name: string;
    tagline: string;
    first_brewed: string;
    description: string;
    image_url: string;
    abv: number;
    ibu: number;
    target_fg: number;
    target_og: number;
    ebc: number;
    srm: number;
    ph: number;
    attenuation_level: number;
    volume: Volume;
    boil_volume: Volume;
    method: Method;
    ingredients: Ingredients;
    food_pairing: string[];
    brewers_tips: string;
    contributed_by: string;
}