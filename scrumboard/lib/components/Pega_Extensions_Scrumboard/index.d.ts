declare function PegaExtensionsScrumboard(props: any): JSX.Element;
declare namespace PegaExtensionsScrumboard {
    namespace defaultProps {
        const label: string;
        const title: string;
        const createLabel: any;
        const updateLabel: any;
        const createOperator: any;
        const updateOperator: any;
        const createDateTime: any;
        const updateDateTime: any;
        const resolveLabel: any;
        const resolveOperator: any;
        const resolveDateTime: any;
        const hideLabel: boolean;
    }
    namespace propTypes {
        export const getPConnect: PropTypes.Validator<(...args: any[]) => any>;
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        const title_1: PropTypes.Requireable<string>;
        export { title_1 as title };
        const createLabel_1: PropTypes.Requireable<string>;
        export { createLabel_1 as createLabel };
        const updateLabel_1: PropTypes.Requireable<string>;
        export { updateLabel_1 as updateLabel };
        const resolveLabel_1: PropTypes.Requireable<string>;
        export { resolveLabel_1 as resolveLabel };
        const createOperator_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { createOperator_1 as createOperator };
        const updateOperator_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { updateOperator_1 as updateOperator };
        const resolveOperator_1: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        export { resolveOperator_1 as resolveOperator };
        const createDateTime_1: PropTypes.Requireable<string>;
        export { createDateTime_1 as createDateTime };
        const updateDateTime_1: PropTypes.Requireable<string>;
        export { updateDateTime_1 as updateDateTime };
        const resolveDateTime_1: PropTypes.Requireable<string>;
        export { resolveDateTime_1 as resolveDateTime };
        const hideLabel_1: PropTypes.Requireable<boolean>;
        export { hideLabel_1 as hideLabel };
    }
}
export default PegaExtensionsScrumboard;
import PropTypes from "prop-types";
