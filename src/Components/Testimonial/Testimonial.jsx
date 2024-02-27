import React from "react"
import TestimonialImg from "./TestimonialImg"

const TestimonialContext = React.createContext()


export default function Testimonial({img, children, backgroundColor, style}) {
    const styles = {...style, backgroundColor}
    return (
        <TestimonialContext.Provider value={{img}}>
            <div className={img ? "testimonial" : "img-testimonial"} style={styles}>
                <TestimonialImg />
                {children}
            </div>
        </TestimonialContext.Provider>
    )
}
    export { TestimonialContext }