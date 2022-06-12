import {useQuery} from "@apollo/client"
import { GET_PENDING } from "../../utils/queries"
import auth from "../../utils/auth"
import { Link } from "react-router-dom"

const Pending = ()=>{
    const userId = auth.getProfile().data._id
    // const userId = "62a24c7d67e08d3a08548235"
    const {loading,data} = useQuery(GET_PENDING,{variables:{userId:userId}})
    if(loading){
        return(<h1>Loading</h1>)
    }
    console.log(data)
    const quizzes = data.getQuizInvites
    console.log(quizzes)

    return(
        <>
        <h1>Pending</h1>
        {quizzes.map((q,i)=>{
            return  (<Link className="dashboard-button" to={"/studentQuiz/?"+q._id}>
                {q.name}
        </Link>)
        })}
        </>
    )
}

export default Pending