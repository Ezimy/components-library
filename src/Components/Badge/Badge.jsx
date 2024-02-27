import React from "react";
import classNames from "classnames";
export default function Badge({children, theme="gray", shape= "pill", className, ...rest}){
    const classes = classNames("badge", `badge-${shape}`, `badge-${theme}`, className)
    return(
        <div className={classes} {...rest}>
            {children}
        </div>
    )
}