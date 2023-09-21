interface LabelContainerProps {
    color: any;
}
interface ErrorProps {
    containsError?: boolean;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ModalContent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Input: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, ErrorProps, never>;
export declare const MultilineInput: import("styled-components").StyledComponent<"textarea", import("styled-components").DefaultTheme, ErrorProps, never>;
export declare const CategoriesContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Button: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export declare const LabelContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, LabelContainerProps, never>;
export declare const ErrorMessage: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, {}, never>;
export {};
