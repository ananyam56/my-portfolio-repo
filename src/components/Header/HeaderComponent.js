import * as React from 'react'
import "./Header.css"
import { StaticImage } from 'gatsby-plugin-image'
import { Icon } from '@iconify/react';

const Header = () => (
    <div class="header_container">
        <div class="logo_container">
        <StaticImage
        src="C:\Users\shant\portfolio\gatsby-starter-default\src\components\Header\ananya maddali-1.png"></StaticImage>
        </div>
        <div  class="header_sections">
        <Icon className = "header_icon" icon="ant-design:project-filled" color="white" width="20" height="20" /><h1 class="header_items">Projects</h1>
        <Icon className = "header_icon" icon="carbon:education" color="white" width="20" height="20" /><h1 class="header_items">Education</h1>
        <Icon className = "header_icon" icon="bi:tools" color="white" width="20" height="20" /><h1 class="header_items">Skills</h1>
        <Icon className = "header_icon" icon="ant-design:mail-filled" color="white" width="20" height="20" /><h1 class="header_items">Contact</h1>
        </div>
    </div>
)

export default Header