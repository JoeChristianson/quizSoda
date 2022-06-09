import { GET_STUDENT_QUIZ } from "../../utils/queries"
import { useQuery,useMutation } from "@apollo/client"
import { useState } from "react"
import Question from "../../components/Question"
import { TAKE_QUIZ } from "../../utils/mutations"
import auth from "../../utils/auth"

const StudentQuiz = ()=>{
    
    const user = auth.getProfile().data._id
    console.log(user)
    const quizId = window.location.search.slice(1)
    const {loading,data} = useQuery(GET_STUDENT_QUIZ,{variables:{getStudentQuizId:quizId}})
    const [started,setStarted] = useState(false)
    const [questionIndex,setQuestionIndex] = useState(0);
    const [answers,setAnswers] = useState([])
    const [done,setDone] = useState(false)
    const [takeQuiz,{data:doneData,loading:doneLoading,error}] = useMutation(TAKE_QUIZ)

    if(loading){
        return (<h1>Loading</h1>)
    }

    const {dueDate,name,questions,quiz,seconds} = data.getStudentQuiz

    const handleStart = ()=>{
        setStarted(true)
    }

    const handleAnswer = async (e)=>{
        const {option} = e.target.dataset
        takeQuiz({variables:{userId:user,quizId:quiz,date:"6/20/2022",answers:[...answers,option]}})
        await setAnswers([...answers,option])
        if((questionIndex+1)===questions.length){
            setDone(true)
        console.log("out of questions")
    }
        setQuestionIndex(questionIndex+1)

    }

    if(!started){
        return(
            <>
        <h1>{name}</h1>
        <button onClick={handleStart}>Start</button>
            </>)
    }

    if(done){
        console.log(answers)
        return(<h1>Done</h1>)
    }
    

    return(
        <>
        <h1>{name}</h1>
        <Question handleAnswer={handleAnswer} question={questions[questionIndex]}></Question>
        </>

    )

}

export default StudentQuiz