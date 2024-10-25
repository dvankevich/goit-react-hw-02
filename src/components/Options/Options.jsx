import c from "./Options.module.css"

const Options = ({update}) => {
  return (
    <div className={c.options}>
      <button onClick={() => update('good')}>Good</button>
      <button onClick={() => update('neutral')}>Neutral</button>
      <button onClick={() => update('bad')}>Bad</button>
      <button onClick={() => update('reset')}>Reset</button>
    </div>
  )
}

export default Options
