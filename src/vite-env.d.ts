/// <reference types="vite/client" />

interface Recipe {
  abv: number;
  attenuation_level: number;
  boil_volume: {
    value: number;
    unit: string;
  };
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number;
  first_brewed: string;
  food_pairing: string[];
  ibu: number;
  id: number;
  image_url: string;
  ingredients: {
    malt: { name: string; amount: { value: number; unit: string } }[];
    hops: {
      name: string;
      amount: { value: number; unit: string };
      add: string;
      attribute: string;
    }[];
    yeast: string;
  };
  method: {
    mash_temp: { temp: { value: number; unit: string }; duration: number }[];
    fermentation: { temp: { value: number; unit: string } };
    twist: string | null;
  };
  name: string;
  ph: number;
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
  volume: {
    value: number;
    unit: string;
  };
}
