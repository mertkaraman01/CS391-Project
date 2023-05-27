import { MyContext } from '../components/context';
import { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MemberCard from './MemberCard';

const MemberList = () => {
    const contextObject = useContext(MyContext);
    const {members}=contextObject;
    
    return (
        <div>
            <h1>Our Club Members</h1>

            <Container>
                <Row>
                    {members.map((item, index) => {
                        return (
                            <Col key={`member-${index}`} sm="6" md="4" lg="2" >
                                <MemberCard member={item}></MemberCard>
                            </Col>
                        );
                    })}
                </Row>
            </Container>


        </div>
    );
}
export default MemberList;