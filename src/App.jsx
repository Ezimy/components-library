import React, { useState, useEffect } from 'react'
import Badge from "/src/Components/Badge/Badge.jsx"
import Banner from '/src/Components/Banner/Banner.jsx'
import Card from './Components/Card/Card'
import Testimonial from './Components/Testimonial/Testimonial'
export default function App(){
    return(
        <>
            <Badge>Badge</Badge>
            <Banner />
            <Card />
            <Testimonial />
        </>
    )
}