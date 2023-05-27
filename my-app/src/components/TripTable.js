import { MyContext } from './context';
import { useContext } from 'react';
import TripCard from './TripCard';
import { Container, Row, Col } from 'reactstrap';


const TripTable = () => {
    const contextObject = useContext(MyContext);
    const {tripList, header}=contextObject;
    
    return (
        <>
            <h2 style={{color: 'color value',
      textAlign: 'center',
      alignSelf: 'center'}}>{header}</h2>
   
            
            <Container>
                <Row>
                    {tripList.map((item, index) => {
                        return (
                            <Col key={`trip-${index}`} sm="6" md="4" lg="2" >
                                <TripCard trip={item}></TripCard>
                            </Col>
                        );
                    })}
                </Row>
                

            </Container>

        

        </>
    );
}

export default TripTable;