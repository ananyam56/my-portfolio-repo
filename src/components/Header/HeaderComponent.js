import * as React from 'react'
import "./Header.css"
import { StaticImage } from 'gatsby-plugin-image'
import { Icon } from '@iconify/react';

const Header = () => (
    <div class="container">
    <div class="header_container">
        <div class="logo_container">
        <StaticImage
        src="../Header/Ananya Maddali-1.png"></StaticImage>
        </div>
        <div  class="header_sections">
        <Icon className = "header_icon" icon="carbon:education" color="white" width="20" height="20" /><h1 class="header_items"><a href="#section2">Experience</a></h1>
        <Icon className = "header_icon" icon="ant-design:project-filled" color="white" width="20" height="20" /><h1 class="header_items"><a href="#section3">Projects</a></h1>
        <Icon className = "header_icon" icon="bi:tools" color="white" width="20" height="20" /><h1 class="header_items"><a href="#section4">Skills</a></h1>
        <Icon className = "header_icon" icon="ant-design:mail-filled" color="white" width="20" height="20" /><h1 class="header_items"><a href="#section5">Contact</a></h1>
        </div>
    </div>
    </div>
)

export default Header