import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CourseItem(){
    return(
        <Card>
      <Card.Img variant="top" src="https://next1code.ir/wp-content/uploads/2022/12/react-cover-500x286.jpg" />
      <Card.Body>
        <Card.Title>دوره ریکت</Card.Title>
        <Card.Text>
          آموزش پروژه محور ریکت (react js) از مقدماتی تا پیشرفته
        </Card.Text>
        <Button variant="primary">خرید دوره</Button>
      </Card.Body>
    </Card>

    )
}
export default CourseItem