import * as React from 'react'
import "./footer.css"
import { StaticImage } from 'gatsby-plugin-image'
import { Divider } from '@mui/material'

const FooterComponent = () => (
    <div class="container_7">
    <div class="footer_container">
        <div class="footer_logo_container">
        <StaticImage
        src="../Header/Ananya Maddali-1.PNG"></StaticImage>
        </div>
        <div  class="footer_sections">
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
        </div>
    </div>
    </div>
)

export default FooterComponent