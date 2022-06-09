

const Question = ({handleAnswer,question})=>{

    console.log(question)

    return(
        <>
        <h2>{question.question}</h2>
        {question.options.map((option,i)=>{
            return (<button key={i} onClick={handleAnswer} data-option={option}>{option}</button>)
        })}
        </>
    )

}

export default Question