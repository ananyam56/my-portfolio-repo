import * as React from 'react'
import "./contact.css"
import {Card} from '@mui/material'
import { Icon } from '@iconify/react';
import { StaticImage } from 'gatsby-plugin-image';

export const ContactCard = (
    <div class="contact_card">
        <div class="contact_line">
            <StaticImage 
            className = {"contact_image"}
            src="C:\Users\shant\portfolio\gatsby-starter-default\src\components\AboutMe\Ananya Maddali-1 (1).png"></StaticImage>&nbsp;&nbsp;&nbsp;&nbsp;
        <h1 class="contact_title">Contact <span>&nbsp;Me</span></h1>
        </div>
        <div class="contact_card_container">
            <Card
            className = {"email_card"}>
                <Icon icon="ant-design:mail-filled" color="#F4A733" width="65" height="65" />
                <h2 class="contact_text">Email</h2>
            </Card>
            <Card
            className = {"resume_card"}>
                <Icon icon="akar-icons:paper" color="#F4A733" width="65" height="65" />
                <h2 class="contact_text">Resume</h2>
            </Card>
            <Card
            className={"git_card"}>
                <Icon icon="akar-icons:github-fill" color="#F4A733" width="65" height="65" />
                <h2 class="contact_text">GitHub</h2>
            </Card>
        </div>
    </div>
)