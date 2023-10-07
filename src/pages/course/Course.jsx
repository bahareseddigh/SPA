import MyNavbar from '../../components/navbar/Navbar'
import './Course.css'
import { courseData } from '../../data'
import { useParams } from 'react-router-dom'
function Course(){

    const courseId = useParams().courseId

    return(
        <>
        <MyNavbar />
        <h1>Course Page</h1>
        </>
    )
}
export default Course