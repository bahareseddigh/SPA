import {Container, Row, Col} from 'react-bootstrap'
import MyNavbar from '../../components/navbar/Navbar'
import './Home.css'
function Home(){
    return(
        <>
        <MyNavbar />
        <Container>
            <Row>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container>
        </>
    )
}
export default Home