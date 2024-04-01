import { warning } from "../../theme/palette";

type ColorMap = {
  [key: string]: string;
};

const colorMap : ColorMap = {
    'Red': '#FFA6A6',
    'Pink': '#FFA6D1',
    'White': '#FFE6A6',
    'dry': '#A6EFFF',
    'semi-dry': '#A6CAFF',
    'sweet': '#BDA6FF',
    'semi-sweet': '#FFA6E6',
    'champagne': '#FDFFA6',
    'gift-box': '#A6FFF4',
  
};

export default function handleChooseColor(color: string) : string {
  return colorMap[color] || warning.lighter;
}