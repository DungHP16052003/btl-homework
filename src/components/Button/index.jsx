import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import styles from "./Button.module.scss"
import clsx from "clsx";
import { href, Link } from "react-router-dom";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
function Button({

    children,
    icon,
    className = "",
    to = "",
    a = "",
    primary = false,
    secondary = false,
    large = false,
    rounded = false,
    disabled = false,
    loading = false,
    onClick,

}) {
    let Component = "button";
    const passProps = {};
    if(to){
    Component = Link
    passProps.to = to
    }
 if(a){
    Component = href
    passProps.href= href
 }
 const handleClick = () => {
    if (disabled || loading) return;
    // Logic...
    onClick();
};
return (
    <Component
        {...passProps}
        className={clsx(styles.wrapper, className, {
            [styles.primary]: primary,
            [styles.secondary]: secondary,
            [styles.large]: large,
            [styles.rounded]: rounded,
            [styles.disabled]: disabled || loading,
        })}
        onClick={handleClick}
    >
        {loading ? (
            <FontAwesomeIcon icon={faSpinner} spin />
        ) : (
            <div>
                {icon && <FontAwesomeIcon icon={icon} />}
                <span>{children}</span>
            </div>
        )}
    </Component>
);
}


Button.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.object,
    className: PropTypes.string,
    to: PropTypes.string,
    a: PropTypes.string,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    large: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;