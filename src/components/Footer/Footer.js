import * as React from 'react'
import "./footer.css"
import { StaticImage } from 'gatsby-plugin-image'
import { Divider } from '@mui/material'

const FooterComponent = () => (
    <div class="footer_container">
        <div class="footer_logo_container">
        <StaticImage
        src="C:\Users\shant\portfolio\gatsby-starter-default\src\components\Header\ananya maddali-1.png"></StaticImage>
        </div>
        <div  class="header_sections">
        <h1 class="header_item"><a href="#section1">About Me</a></h1>
        <Divider
        className={"footer_divider"}></Divider>
        <h1 class="header_item"><a href="#section2">Experience</a></h1>
        <Divider
        className={"footer_divider"}></Divider>
        <h1 class="header_item"><a href="#section3">Projects</a></h1>
        <Divider
        className={"footer_divider"}></Divider>
        <h1 class="header_item"><a href="#section4">Skills</a></h1>
        <Divider
        className={"footer_divider"}></Divider>
        <h1 class="header_item"><a href="#section5">Contact</a></h1>
        </div>
    </div>
)

export default FooterComponent