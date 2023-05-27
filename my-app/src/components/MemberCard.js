import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardImg } from 'reactstrap';
const MemberCard = (props) => {
    const { member } = props;

    return (
        <div>
            <Card>
            <CardImg
                alt="Card image cap"
                src={member.image}
                top
                width="100"
            />
                <CardBody>
                    <CardTitle tag="h2">{member.name}</CardTitle>
                    <CardText>{member.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};
export default MemberCard;