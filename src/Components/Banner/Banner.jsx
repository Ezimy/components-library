import React from "react"
import data from "./data"
import classNames from "classnames"

const BannerContext = React.createContext()

export default function Banner({children, theme = "neutral", className, customStyle, ...rest}) {
    const {icon, iconColor, backgroundColor} = data[theme]
    const styles = customStyle ? {...customStyle, backgroundColor} : {backgroundColor}
    const classes = classNames("banner", className)
    const iconStyles = {color: iconColor}
    
    return (
        <BannerContext.Provider value={ {...data[theme]} }>
            <div className={classes} style={styles} {...rest}>
                <div style={iconStyles}>
                    {icon}
                </div>
                <div className="banner-content">
                    {children}
                </div>
            </div>
        </BannerContext.Provider>
    )
    
}

export { BannerContext }