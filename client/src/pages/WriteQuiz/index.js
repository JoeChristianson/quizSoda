import { useState } from "react"


const WriteQuiz = ()=>{
    const emptyQuestion = {question:"",correctAnswer:"",option2:"",option3:"",option4:""}
    const [formState,setFormState] = useState({quizName:"",questions:[{...emptyQuestion}]})
    const [questions,setQuestions] = useState([{...emptyQuestion}])
    const handleSubmit = (e)=>{
        e.preventDefault()

    }

    const handleChangeQuizName = (e)=>{
        setFormState({quizName:e.target.value,questions})
    }

    const handleOptionChange = (e)=>{
        const newQuestions = [...questions];
        newQuestions[e.target.dataset.index][e.target.name] = e.target.value
        setQuestions(newQuestions)
    }

    const addQuestion = (e)=>{
        const newSet = [...questions]
        newSet.push({...emptyQuestion})
        setQuestions(newSet)
        console.log(questions)
    }

    const removeQuestion = (e)=>{
        const {index} = e.target.dataset;
        console.log(index)
        const newSet = [...questions]
        newSet.splice(index,1)
        setQuestions(newSet)
        console.log(questions)
    }



    return(
        
        <form onSubmit={handleSubmit}>
            <input onChange={handleChangeQuizName} placeholder="Quiz Name" value={formState.quizName}></input>
            {questions.map((q,i)=>{
                console.log(q)
                return(<section>
                    <textarea onChange={handleOptionChange} data-index={i} name="question" placeholder="Question" value={q.question}></textarea>
                    <div className="answers-cont">
                        <input onChange={handleOptionChange} data-index={i} name="correctAnswer" className="correct" value={q.correctAnswer}></input>
                        <input onChange={handleOptionChange} data-index={i} name="option2" className="other-option" value={q.option2}></input>
                        <input onChange={handleOptionChange} data-index={i} name="option3" className="other-option" value={q.option3}></input>
                        <input onChange={handleOptionChange} data-index={i} name="option4" className="other-option" value={q.option4}></input>
                    </div>
                    <button onClick={removeQuestion} data-index={i}>Remove Question</button>
                    </section>)
            })}
            <button onClick={addQuestion}>ADD QUESTION</button>
            <input type="submit"></input>
        </form>
    )
}

export default WriteQuiz