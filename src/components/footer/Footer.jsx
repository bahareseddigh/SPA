import { Col, Container, Row } from "react-bootstrap"
import './Footer.css'
function Footer(){
    return(
        <footer>
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h2>رسالت نکست وان کد</h2>
                        <p>نکست وان کد با هدف تولید آموزش هایی ایجاد شده ، که حس شیرینِ یادگیری لذت بخش برنامه نویسی و طراحی وب رو تجربه کنید.</p>
                    </Col>
                    <Col style={{textAlign : 'left'}}>
                        <img src="https://cdn.zarinpal.com/badges/trustLogo/1.svg" />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer