import * as React from 'react';
import Button from '@mui/material/Button';
import Jumbotron from '../components/Jumbotron/JumbotronComponent';

function App() {
  return <Button variant="contained">Hello World</Button>;
}

export default function HomePage() {
    return (
        <div>
            <Jumbotron></Jumbotron>
            {App()}
        </div>
    )
}