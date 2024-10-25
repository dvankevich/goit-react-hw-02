import c from "./Feedback.module.css"

const Feedback = ({ values }) => {
  return (
    <div className={c.feedback}>
      <ul className={c.feedbackList}>
        <li className={c.feedbackListItem}>Good: {values.good}</li>
        <li className={c.feedbackListItem}>Neutral: {values.neutral}</li>
        <li className={c.feedbackListItem}>Bad: {values.bad}</li>
        <li className={c.feedbackListItem}>Total: {values.bad + values.good + values.neutral}</li>
      </ul>
    </div>
  )
}

export default Feedback
