import React from "react"
import TestimonialImg from "./TestimonialImg"

const TestimonialContext = React.createContext()


export default function Testimonial({img, children}) {
    return (
        <TestimonialContext.Provider value={{img}}>
            <div className={`testimonial ${img ? "img-testimonial" : "no-img-testimonial"}`}>
                <TestimonialImg />
                <div className={img ? "img-testimonial-text" : "no-img-testimonial-text"}>
                {children}
                </div>
            </div>
        </TestimonialContext.Provider>
    )
}
    export { TestimonialContext }