import React from "react"

export default function CardContent({children, color, style, ...rest}) {
    const contentStyles = {...style, color}
    return (
        <div className="card-content" {...rest} style={contentStyles}>
            {children}
        </div>
    )
}