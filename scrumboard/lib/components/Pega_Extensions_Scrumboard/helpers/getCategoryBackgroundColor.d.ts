import { DefaultTheme } from "styled-components";
import ICategory from "../interfaces/ICategory";
declare const getCategoryBackgroundColor: (theme: DefaultTheme, value: ICategory) => string;
export default getCategoryBackgroundColor;
