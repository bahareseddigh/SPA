import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CourseItem({title, text, img}){
    return(
        <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">خرید دوره</Button>
      </Card.Body>
    </Card>

    )
}
export default CourseItem