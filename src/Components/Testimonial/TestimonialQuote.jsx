import React from "react"
import { ImQuotesLeft } from "react-icons/im";
import { TestimonialContext } from "./Testimonial"

export default function TestimonialQuote({children}) {
    const {img} = React.useContext(TestimonialContext)
    
    return (
        <div className="testimonial-quote">
            <ImQuotesLeft 
                className={img? "img-testimonial-quote-svg":"testimonial-quote-svg"}
            />
            {children}
        </div>
    )
}