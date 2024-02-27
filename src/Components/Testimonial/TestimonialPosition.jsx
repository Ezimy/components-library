import React from "react"
import { TestimonialContext } from "./Testimonial"

export default function TestimonialPosition({children}) {
    const {img} = React.useContext(TestimonialContext)
    return (
        <div className={img ? "testimonial-role" : "img-testimonial-role"}>
            {children}
        </div>
    )
}