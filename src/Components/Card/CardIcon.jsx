import React from "react"
import { FaLaugh } from "react-icons/fa"

export default function CardIcon({children = <FaLaugh />, backgroundColor}) {
    const iconStyles = backgroundColor ? {backgroundColor} : null
    return (
        <div className="card-icon-container" style={iconStyles}>
            {children}
        </div>
    )
}