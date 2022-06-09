import { Link } from "react-router-dom"


const Home = ()=>{
    return(<div>
        <Link className="dashboard-button" to="/writeQuiz">
        <h3>Write Quiz</h3>
        </Link>
        <Link className="dashboard-button" to="/pastWritten">
        <h3>Past Written Quizzes</h3>
        </Link>
        <Link className="dashboard-button" to="/pastTaken">
        <h3>Past Taken Quizzes</h3>
        </Link>
        <Link className="dashboard-button" to="/pending">
        <h3>Pending Quizzes</h3>
        </Link>
    </div>)
}

export default Home