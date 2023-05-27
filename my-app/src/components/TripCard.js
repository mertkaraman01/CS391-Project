import React from 'react';
import { Card, CardBody, CardTitle, CardImg,} from 'reactstrap';
const TripCard = (props) => {
    const { trip } = props;
    return (
        <div> 
            <Card>
            <CardImg
                alt="Card image cap"
                src={trip.image}
                top
                width="100"
            />
                <CardBody>
                    <CardTitle tag="h2">{trip.name}</CardTitle>
                </CardBody>
            </Card>
        </div>
    );

};
export default TripCard;



