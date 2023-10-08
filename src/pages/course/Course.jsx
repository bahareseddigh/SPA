import MyNavbar from '../../components/navbar/Navbar'
import './Course.css'
import { courseData } from '../../data'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
function Course(){

    const courseId = useParams().courseId
    const courseInfo = courseData.find( course => course.id == courseId )
    console.log(courseInfo);

    return(
        <>
        <MyNavbar />
        <Container>
            <Row>
                <Col>
                    <img src={courseInfo.img} />
                </Col>
                <Col>
                    <h2 style={{fontFamily : 'Lalezar'}}>{courseInfo.title}</h2>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Course