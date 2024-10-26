import { useState, useEffect } from 'react';
import './App.css';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = values.good + values.neutral + values.bad;

  function updateFeedback(feedbackType) {
    const updateGood = () => {
      setValues({
        ...values,
        good: values.good + 1,
      });
    };

    const updateNeutral = () => {
      setValues({
        ...values,
        neutral: values.neutral + 1,
      });
    };

    const updateBad = () => {
      setValues({
        ...values,
        bad: values.bad + 1,
      });
    };

    const resetAll = () => {
      setValues({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    };

    switch (feedbackType) {
      case 'good':
        updateGood();
        break;
      case 'bad':
        updateBad();
        break;
      case 'neutral':
        updateNeutral();
        break;
      case 'reset':
        resetAll();
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    // console.log("Clicks updated: ", values);
  }, [values]);

  return (
    <>
      <Description />
      <Options update={updateFeedback} total={totalFeedback} />
      {totalFeedback > 0 ? <Feedback values={values} /> : <Notification />}
    </>
  );
}

export default App;
