import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useEffect, useState} from "react";

function PokeCard({singlePoke, pokemon}){

    const [poke, setPoke] = useState([])

    useEffect(() => {
        fetch(singlePoke.url)
        .then((res) => res.json())
        .then((data) => setPoke(data))
      }, [singlePoke, pokemon])

    return(
        <Card style={{ width: '18rem' }}>
            {/* When this line below is taken out and then reputback in, the sprites show up, but when the page gets reloaded it breaks everything */}
            {/* <Card.Img variant="top" src={poke.sprites.front_default} /> */}
            <Card.Body>
                <Card.Title>{singlePoke.name}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default PokeCard