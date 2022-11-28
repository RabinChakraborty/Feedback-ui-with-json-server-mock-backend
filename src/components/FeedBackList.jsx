import FeedBackItem from './Feedbackitem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedBackContext';

const FeedBackList = () => {
  const { feedback } = useContext(FeedbackContext);

  return (
    <>
      <div className='feedback-list'>
        {feedback.map((item) => (
          <FeedBackItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default FeedBackList;
