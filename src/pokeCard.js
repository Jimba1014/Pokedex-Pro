import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useEffect, useState} from "react";

function PokeCard(singlePoke){

    const [poke, setPoke] = useState([])

    useEffect(() => {
        fetch(singlePoke.singlePoke.url)
        .then((res) => res.json())
        .then((data) => setPoke(data))
      }, [])

    console.log(singlePoke)
    console.log(poke)
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={poke.sprites.front_default} />
            <Card.Body>
                <Card.Title>{singlePoke.singlePoke.name}</Card.Title>
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