import React from "react";
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

const JokesList = props => {
    return(
        <Row>
            <Col style={{margin: '1% 26%'}}>
                <Card body style={{background: 'cornflowerblue', padding: '10% 0%'}}>
                    <CardTitle style={{fontSize: '3rem', fontWeight: 'bold'}}>Dad Jokes!</CardTitle>
                    <CardText style={{fontSize: '1.5rem', margin: '0% 15%', fontStyle: 'italic'}}>{props.haha.joke}</CardText>
                </Card>
            </Col>
        </Row>
    )
}

export default JokesList