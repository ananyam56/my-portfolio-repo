import * as React from 'react'
import "./Card.css"
import {Card} from '@mui/material'
import cardcontent from './CardContent'


export const CardComponent = cardcontent.map((card) => 
    <Card 
    variant="outlined"
    className={"card_style"}
    id={card.id}
    >
        {card.image}
        <h1 class="card_title">{card.title}</h1>
        <p class="card_content">{card.content}</p>
    </Card>
)
