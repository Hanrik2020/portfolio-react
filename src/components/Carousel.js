import React from 'react';

import tntx from '../assets/images/tntlogo.png';
import engram from '../assets/images/enlogo2.png';
import Card from '../components/Card';
import { Container, Row, Col } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'TNT-X',
                    subTitle: 'AR/VR Training & Education',
                    imgSrc: tntx,
                    link: 'https://www.tnt-x.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Engram',
                    subTitle: 'Private Social Media Platform',
                    imgSrc: engram,
                    link: 'https://engram.alexsundstrom.com',
                    selected: false
                }
            ]


        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Col className="d-flex justify-content-center" xs={12} sm={12} md={6}><Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} /></Col>
        });
    }

    render() {

        return (
            <Container className="d-flex justify-content-center" fluid={true}>
                <Row className="d-flex justify-content-center">

                    {this.makeItems(this.state.items)}

                </Row>
            </Container>
        );
    }

}

export default Carousel;