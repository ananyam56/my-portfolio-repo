import * as React from 'react'
import "./contact.css"
import {Card} from '@mui/material'
import {Button} from '@mui/material'

export const ContactCard = (
    <div class="contact_card">
        <h1 class="contact_title">Contact Me</h1>
        <div class="contact_card_container">
            <Card
            className = {"email_card"}>
                <h2>Email</h2>
                <p>ananyasai693@gmail.com</p>
            </Card>
            <Card
            className = {"resume_card"}>
                <h2>Resume</h2>
                <Button
                variant="outlined">Ananya Maddali</Button>
            </Card>
            <Card
            className={"git_card"}>
                <h2>GitHub</h2>
                <p>ananyamaddali</p>
            </Card>
        </div>
    </div>
)