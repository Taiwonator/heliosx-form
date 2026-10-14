import { useState } from "react"
import { questionService } from "@/util/questions"

const Form = () => {
  const questionsPayload = questionService.getQuestions()
  const sortedQuestions = questionsPayload
                      .sort((a, b) => a.order - b.order)
  const questionLabels = sortedQuestions.map((q) => q.label)
  const initialAnswers: (boolean | null)[] = Array(sortedQuestions.length).fill(null)
  const [answers, setAnswers] = useState(initialAnswers)
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [finished, setFinished] = useState<boolean>(false)

  const answerQuestion = (answer: boolean) => {
    const nextAnswers = answers.map((previousAnswer, index) =>
      index === currentQuestion ? answer : previousAnswer
    )

    setAnswers(nextAnswers)

    const isLastQuestion = currentQuestion === answers.length - 1
    if(isLastQuestion) {
      questionService.submit(
        sortedQuestions.map((question, index) => ({
          ...question,
          answer: nextAnswers[index]!
        }))
      )
      setFinished(true)
      return
    }

    setCurrentQuestion(currentQuestion + 1)
  }

  const restartQuestions = () => {
    setAnswers(initialAnswers)
    setCurrentQuestion(0)
    setFinished(false)
  }

  const back = () => {
    setCurrentQuestion(Math.max(0, currentQuestion - 1))
  }

  const forward = () => {
    const answeredQuestions = answers.filter((a) => a !== null).length
    setCurrentQuestion(Math.min(currentQuestion + 1, answeredQuestions))
  }

  return (
    <div className="form-inner-container">
      {!finished ? (
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-header">
          <button onClick={() => back()}>Back</button>
          <div className="step-label">Step {currentQuestion + 1}</div> 
          <button onClick={() => forward()}>Forward</button>
        </div>
        <p className="question-label">
          {questionLabels[currentQuestion]}
        </p>
        <div className="button-container">
          <button onClick={() => answerQuestion(true)}>Yes</button>
          <button onClick={() => answerQuestion(false)}>No</button>
        </div>
      </form>
      ) : (
        <div className="thank-you-container">
          <p className="thank-you-label">Thank You</p>
          <button onClick={() => restartQuestions()}>Restart</button>
        </div>
      )}
    </div>
  )
}

export default Form

/**
 * So what do we need to do. First:
 * 
 *  What do we wanna account for now:
 * 
 * 
 */
