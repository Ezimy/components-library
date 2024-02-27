import React from "react"

const CardContext = React.createContext()

export default function Card({children, backgroundColor, style, ...rest}) {
    const styles = {...style, backgroundColor}
    return (
            <div className="card" {...rest} style={styles}>
                {children}
            </div>
    )
    
}

export { CardContext }