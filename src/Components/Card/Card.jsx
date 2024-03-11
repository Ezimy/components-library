import React from "react"

const CardContext = React.createContext()

export default function Card({children}) {
    return (
            <div className="card">
                {children}
            </div>
    )
    
}

export { CardContext }