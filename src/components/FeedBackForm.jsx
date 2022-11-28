import React from 'react';
import Card from '../shared/card';
import { useState, useContext, useEffect } from 'react';
import Button from '../shared/Button';
import FeedbackContext from '../context/FeedBackContext';
import RatingSelect from './RatingSelect';

const FeedBackForm = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState('');
  const [rating, setRating] = useState();
  const { addFeedback, feedbackedit, updateFeedback } =
    useContext(FeedbackContext);

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMsg(null);
    } else if (text !== '' && text.trim().length < 10) {
      setBtnDisabled(true);
      setMsg('You atleast need to type 10 characters to submit ');
    } else {
      setBtnDisabled(false);
      setMsg('NOTED!!!');
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 9) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackedit.edit === true) {
        updateFeedback(feedbackedit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText('');
    }
  };

  useEffect(() => {
    if (feedbackedit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackedit.item.text);
      setRating(feedbackedit.item.rating);
    }
  }, [feedbackedit]);

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <h2>How would you like to rate me?</h2>
          <RatingSelect select={(rating) => setRating(rating)} />
          <div className='input-group'>
            <input
              type='text'
              placeholder='Write here'
              value={text}
              onChange={handleTextChange}
            />
            <Button
              type='submit'
              version='secondary'
              value={text}
              isDisabled={btnDisabled}
            >
              Submit
            </Button>
          </div>

          {msg && <div className='message'>{msg}</div>}
        </form>
      </Card>
    </>
  );
};

export default FeedBackForm;
