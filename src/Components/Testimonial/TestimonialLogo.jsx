import React from "react"
import { TestimonialContext } from "./Testimonial"

export default function TestimonialLogo({children}) {
    const {img} = React.useContext(TestimonialContext)
    return (
        <div className={img ? "testimonial-logo" : "img-testimonial-logo"}>
            {children}
        </div>
    )
}