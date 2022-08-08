import * as React from 'react'
import "./Header.css"
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => (
    <div class="header_container">
        <div class="logo_container">
        <StaticImage
        src="C:\Users\shant\portfolio\gatsby-starter-default\src\components\Header\ananya maddali-1.png"></StaticImage>
        </div>
        <div  class="header_sections">
        <h1 class="header_items">Projects</h1>
        <h1 class="header_items">Education</h1>
        <h1 class="header_items">Skills</h1>
        <h1 class="header_items">Contact</h1>
        </div>
    </div>
)

export default Header