import React from "react"
import { TestimonialContext } from "./Testimonial"

export default function TestimonialAuthor({children}) {
    const {img} = React.useContext(TestimonialContext)
    
    return (
        <div className={img ? "testimonial-author" : "img-testimonial-author"}>
            {children}
        </div>
    )
}