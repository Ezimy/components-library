import React from "react";
import {BannerContext} from "./Banner"

export default function BannerTitle({children}){
    const {titleColor} =React.useContext(BannerContext)
    const titleStyles = {color: titleColor}

    return(
        <div className="banner-title" style={titleStyles}>
            {children}
        </div>
    )
}