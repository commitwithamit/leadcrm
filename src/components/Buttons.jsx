import { Link } from "react-router-dom";
import { getNameFromUrl } from "../utility/helperFunctions";

/*
    children = "content"
    icon = path of icon (if any)
    position = before | after
    variant = primary(blue) | secondary(green) | outline | accent(black)
    type = button | submit | link
*/

export function Buttons({
    children,
    icon = "",
    position = "before",
    variant,
    type = "button",
    path = "/",
    className = ""
}) {

    const iconName = getNameFromUrl(icon); // converts a path to name for alt tags "./xyz.jpg" => "xyz"

    const content = (
        <>
            {position === "before" && icon && (
                <img src={icon} alt={`${iconName} icon`} />
            )}
            {children}
            {position === "after" && <img src={icon} alt={`${iconName} icon`} />}
        </>
    )
    console.log(type, path);
    return (
        <>
            {
                type === "link" ? (
                    <Link to={path} className={`btn ${variant} ${className}`}>{children}</Link>
                ) : (

                    <button
                        className={`btn ${variant} ${className}`}
                        type={type}
                    >
                        {content}
                    </button>
                )
            }
        </>
    )
}
