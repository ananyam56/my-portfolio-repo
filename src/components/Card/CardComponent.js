import * as React from 'react'
import "./Card.css"
import {Card, CardActionArea} from '@mui/material'
import cardcontent from './CardContent'
import {Divider} from '@mui/material'


export const CardComponent = cardcontent.map((card) => 
    <Card 
    variant="outlined"
    className={"card_style"}
    id={card.id}
    >
        <CardActionArea href={card.link}
        target="_blank">
        {card.image}
        </CardActionArea>
        <Divider></Divider>
        <h1 class="card_title">{card.title}</h1>
        <span class="card_date"><i>{card.date}</i></span>
        <p class="card_content">{card.content}</p>
        <a href={card.icon1link} target="_blank" rel="noreferrer">{card.icon1}</a>
        <a href={card.icon2link} target="_blank" rel="noreferrer">{card.icon2}</a>
    </Card>
)
