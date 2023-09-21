export default Avatar;
declare function Avatar(props: any): JSX.Element;
declare namespace Avatar {
    namespace propTypes {
        const metaObj: PropTypes.Requireable<{
            [x: string]: any;
        }>;
        const showStatus: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const metaObj_1: any;
        export { metaObj_1 as metaObj };
        const showStatus_1: boolean;
        export { showStatus_1 as showStatus };
    }
}
import PropTypes from "prop-types";
