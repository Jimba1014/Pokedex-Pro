import Nav from 'react-bootstrap/Nav';

function PokeNav(){
    return(
        <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default PokeNav