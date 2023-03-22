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
            <Card.Img variant="top" src={poke?.sprites?.front_default} />
            <Card.Body>
                <Card.Title>{singlePoke.name}</Card.Title>

                <Button variant="primary">Go to Dex Entry</Button>
            </Card.Body>
        </Card>
    )
}

export default PokeCard