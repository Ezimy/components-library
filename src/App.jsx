import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import Badge from "/src/Components/Badge/Badge.jsx"
import Banner from '/src/Components/Banner/index'
import Card from './Components/Card/index'
import Testimonial from './Components/Testimonial/index'
import { FaGrinStars } from "react-icons/fa";
import { BsCloudUploadFill } from "react-icons/bs";
import potrait from "/src/Components/Testimonial/Images/potrait.png"
export default function App(){
    return(
        <>
            <Header>Components Library++</Header>
            <div className='components'>
                <div className='badges'>
                    <Badge theme="gray" shape="pill">Badge</Badge>
                    <Badge theme="red" shape="pill">Badge</Badge>
                    <Badge theme="yellow" shape="pill">Badge</Badge>
                    <Badge theme="green" shape="pill">Badge</Badge>
                    <Badge theme="blue" shape="pill">Badge</Badge>
                    <Badge theme="indigo" shape="pill">Badge</Badge>
                    <Badge theme="purple" shape="pill">Badge</Badge>
                    <Badge theme="pink" shape="pill">Badge</Badge>
                </div>
                <div className='badges'>
                    <Badge theme="gray" shape="square">Badge</Badge>
                    <Badge theme="red" shape="square">Badge</Badge>
                    <Badge theme="yellow" shape="square">Badge</Badge>
                    <Badge theme="green" shape="square">Badge</Badge>
                    <Badge theme="blue" shape="square">Badge</Badge>
                    <Badge theme="indigo" shape="square">Badge</Badge>
                    <Badge theme="purple" shape="square">Badge</Badge>
                    <Badge theme="pink" shape="square">Badge</Badge>
                </div>
                <Banner theme="success">
                    <Banner.Title>Congratulations!</Banner.Title>
                    <Banner.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                    pariatur, ipsum similique veniam.
                    </Banner.Text>
                </Banner>
                <Banner theme="warning">
                    <Banner.Title>Attention</Banner.Title>
                    <Banner.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
                    </Banner.Text>
                </Banner>
                <Banner theme="error">
                    <Banner.Title>There is a problem with your application</Banner.Title>
                    <Banner.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
                    </Banner.Text>
                </Banner>
                <Banner theme="neutral">
                    <Banner.Title>Update availiable</Banner.Title>
                    <Banner.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                    </Banner.Text>
                </Banner>
                <Banner theme="success">
                    <Banner.Title>Congratulations!</Banner.Title>
                </Banner>
                <Banner theme="warning">
                    <Banner.Title>Attention</Banner.Title>
                </Banner>
                <Banner theme="error">
                    <Banner.Title>There is a problem with your application</Banner.Title>
                </Banner>
                <Banner theme="neutral">
                    <Banner.Title>Update availiable</Banner.Title>
                </Banner>
                <Card>
                    <Card.Icon>
                        <BsCloudUploadFill className='card-icon'/>
                    </Card.Icon>
                    <Card.Title>Easy Deployment</Card.Title>
                    <Card.Content>
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
                    magna sit morbi lobortis.
                    </Card.Content>
                </Card>
                <Testimonial>
                    <Testimonial.Logo>
                    <FaGrinStars
                        style={{ color: "#2E59F3", marginRight: "10px" }}
                    />
                    Work<span style={{ color: "#2E59F3" }}>cation</span>
                    </Testimonial.Logo>
                    <Testimonial.Quote>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
                    nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
                    adipiscing nunc urna, sit.
                    </Testimonial.Quote>
                    <Testimonial.Author>May Andersons</Testimonial.Author>
                    <Testimonial.Position>Workcation, CTO</Testimonial.Position>
                </Testimonial>
                <Testimonial img={potrait}>
                    <Testimonial.Quote>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
                    nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
                    adipiscing nunc urna, sit.
                    </Testimonial.Quote>
                    <Testimonial.Author>May Andersons</Testimonial.Author>
                    <Testimonial.Position>Workcation, CTO</Testimonial.Position>
                </Testimonial>
            </div>
        </>
    )
}