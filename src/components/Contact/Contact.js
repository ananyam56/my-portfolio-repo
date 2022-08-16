import * as React from 'react'
import "./contact.css"
import {Card} from '@mui/material'
import { Icon } from '@iconify/react';
import { StaticImage } from 'gatsby-plugin-image';
import resume from './resume.pdf';

console.log(resume)
export const ContactCard = (
    <div class="contact_card">
        <div class="contact_line">
            <StaticImage 
            className = {"contact_image"}
            src="../AboutMe/Ananya Maddali-1 (1).png"></StaticImage>&nbsp;&nbsp;&nbsp;&nbsp;
        <h1 class="contact_title">Contact <span>&nbsp;Me</span></h1>
        </div>
        <div class="contact_card_container">
            <Card
            className = {"email_card"}>
                <Icon icon="ant-design:mail-filled" color="#F4A733" width="65" height="65" />
                <h2 class="contact_text">Email</h2>
                <p class="hover_text_cards">ananyasai693@gmail.com</p>
            </Card>
            <Card
            className = {"resume_card"}>
                <Icon icon="akar-icons:paper" color="#F4A733" width="65" height="65" />
                <h2 class="contact_text">Resume</h2>
                <p class="hover_text_cards"><a href={resume}
                target="_blank"
                rel="noreferrer">Ananya Maddali</a></p>
            </Card>
            <Card
            className={"git_card"}>
                <Icon icon="akar-icons:github-fill" color="#F4A733" width="65" height="65" />
                <h2 class="contact_text">GitHub</h2>
                <p class="hover_text_cards" ><a href="https://github.com/ananyam56"
                target="_blank"
                rel="noreferrer">ananyam56</a></p>
            </Card>
        </div>
    </div>
)