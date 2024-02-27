import React, { useState, useEffect } from 'react'
import Badge from "/src/Components/Badge/Badge.jsx"
import Banner from '/src/Components/Banner/index'
import Card from './Components/Card/index'
import Testimonial from './Components/Testimonial/Testimonial'
export default function App(){
    return(
        <>
            <Badge>Badge</Badge>
            <Banner>
                <Banner.Title>Congratulations!</Banner.Title>
                <Banner.Content>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                pariatur, ipsum similique veniam.
                </Banner.Content>
            </Banner>
            <Card>
                <Card.Icon backgroundColor=""></Card.Icon>
                <Card.Title>Easy Deployment</Card.Title>
                <Card.Content>
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
                magna sit morbi lobortis.
                </Card.Content>
            </Card>
            <Testimonial />
        </>
    )
}