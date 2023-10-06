import {Container, Row, Col} from 'react-bootstrap'
import MyNavbar from '../../components/navbar/Navbar'
import './Home.css'
import progImg from '../../assets/images/programming.svg'
import CourseItem from '../../components/course/CourseItem'
import { useState } from 'react'
function Home(){

    const [courses, setCourses] = useState([
        {
            id : 1,
            img : 'https://next1code.ir/wp-content/uploads/2022/12/react-cover-500x286.jpg',
            title : 'دوره ریکت',
            text : 'آموزش پروژه محور ریکت و ریداکس از مقدماتی تا پیشرفته'
        },
        {
            id : 2,
            img : 'https://next1code.ir/wp-content/uploads/2022/10/bootstrap-500x286.png',
            title : 'دوره بوتسترپ',
            text : 'آموزش بوتسترپ 5.2 پروژه محور با تمرین های زیاد'
        },
        {
            id : 3,
            img : 'https://next1code.ir/wp-content/uploads/2021/08/couse-cover-500x286.jpg',
            title : 'دوره جاوا اسکریپت',
            text : 'آموزش صفر تا صد جاوا اسکریپت به صورت پروژه محور'
        },
        {
            id : 4,
            img : 'https://next1code.ir/wp-content/uploads/2021/06/rwd-couse-cover-500x286.jpg',
            title : 'دوره طراحی ریسپانسیو',
            text : 'آموزش طراحی وب ریسپانسیو با مدیا کویری ها و فلکس باکس'
        },
    ])

    return(
        <>
        <MyNavbar />
        <Container>
            <Row className='my-5 align-items-center'>
                <Col lg={6}>
                    <h1>برنامه نویسی با نکست وان کد</h1>
                    <p style={{textAlign : 'justify'}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </Col>
                <Col lg={6} className='py-4'>
                    <img className='img-fluid' src={progImg} />
                </Col>
            </Row>
            <Row className='my-5'>
                <h2 className='py-4'>دوره های آموزشی</h2>
                {courses.map( course => (
                    <Col key={course.id} className='py-3' md={6} lg={4} xl={3}>
                        <CourseItem {...course} />
                    </Col>
                ) )}
            </Row>
        </Container>
        </>
    )
}
export default Home