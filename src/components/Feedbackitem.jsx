import Card from '../shared/card';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedBackContext';

const Feedbackitem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <>
      <Card>
        <div className='num-display'>{item.rating}</div>
        <button className='close' onClick={() => deleteFeedback(item.id)}>
          <FaTimes color='purple' />
        </button>
        <button className='edit'>
          <FaEdit onClick={() => editFeedback(item)} color='purple' />
        </button>
        <div className='text-display'>{item.text}</div>
      </Card>
    </>
  );
};

export default Feedbackitem;
