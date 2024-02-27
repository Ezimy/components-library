import React from "react";
import { TestimonialContext } from "./Testimonial";
import dotPattern from "./Images/dot-pattern.png"
export default function TestimonialImg(){
    const {img} = React.useContext(TestimonialContext)
    return(
        img ?
        <img src={img} alt="author-picture" className="testimonial-user-img" />  : 
        <img 
            src={dotPattern} 
            className="testimonial-grid-img"
        />
    )
}