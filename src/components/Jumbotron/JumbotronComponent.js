import * as React from 'react'
import Header from '../Header/HeaderComponent'
import "./Jumbotron.css"
import { Button } from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description'

const Jumbotron = () => (
    <div class="jumbotron_div">
        <Header
        style={{
            gridArea: "3/1",
            display: "grid",
            position: "relative",
        }}></Header>
        <div class="jumbotron"
        style={{
          gridArea: "2/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
        }}>
        <h1 class="jumbotron_title">Hi, I'm Ananya</h1>
        <h2 class="jumbotron_subtitle">I'm a sophomore at Texas A&M University majoring in Computer Science!</h2>
        <Button variant="contained"
        size="medium"
        className={"resume_button"}
        style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: -180,
        }}
        startIcon={<DescriptionIcon 
        style={{
            fontSize: 15,
        }}/>}>Resume</Button>
        </div>
    </div>
)

export default Jumbotron