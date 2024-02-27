import React, { useState, useEffect } from 'react'
import Badge from "/src/Components/Badge/Badge.jsx"
import Banner from '/src/Components/Banner/index'
import Card from './Components/Card/index'
import Testimonial from './Components/Testimonial/index'
import { FaGrinStars } from "react-icons/fa";
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
            <h2>Testimonial component</h2>
            <Testimonial>
                <Testimonial.Logo>
                <FaGrinStars
                    style={{ color: "rgb(46, 89, 243)", marginRight: "10px" }}
                />
                Work<span style={{ color: "rgb(46, 89, 243)" }}>cation</span>
                </Testimonial.Logo>
                <Testimonial.Quote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
                nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
                adipiscing nunc urna, sit.
                </Testimonial.Quote>
                <Testimonial.Author>May Andersons</Testimonial.Author>
                <Testimonial.Position>Workcation, CTO</Testimonial.Position>
            </Testimonial>
        </>
    )
}