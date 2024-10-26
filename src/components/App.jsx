import { useState, useEffect } from "react";
import './App.css'
import Description from './Description/Description'
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  function updateFeedback(feedbackType) {
    const updateGood = () => {
      setValues({
      ...values,
      good: values.good + 1
      });
    };

    const updateNeutral = () => {
      setValues({
      ...values,
      neutral: values.neutral + 1
      });
    };

    const updateBad = () => {
      setValues({
      ...values,
      bad: values.bad + 1
      });
    };

    const resetAll = () => {
      setValues({
        good: 0,
        neutral: 0,
        bad: 0
      })
    };

    switch (feedbackType) {
      case "good":
        updateGood();
        break;
      case "bad":
        updateBad();
        break;
      case "neutral":
        updateNeutral();
        break;
      case "reset":
        resetAll();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log("Clicks updated: ", values);
  }, [values]);

  
  return (
    <>
      <Description />
      <Options update={updateFeedback} />
      <Feedback values={values} />
    </>
  )
}

export default App
