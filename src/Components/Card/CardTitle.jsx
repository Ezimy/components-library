import React from "react"

export default function CardTitle({children, color, style, ...rest}) {
    const titleStyles = {...style, color}
    return (
        <div className="card-title" {...rest} style={titleStyles}>
            {children}
        </div>
    )
}