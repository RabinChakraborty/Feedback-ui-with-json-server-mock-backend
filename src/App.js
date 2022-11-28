import { FeedbackProvider } from './context/FeedBackContext';
import Header from './components/Header';
import FeedBackList from './components/FeedBackList';
import FeedBackStats from './components/FeedBackStats';
import FeedBackForm from './components/FeedBackForm';

const App = () => {
  return (
    <>
      <FeedbackProvider>
        <Header text='Feedback UI' />
        <div className='container'>
          <FeedBackForm />
          <FeedBackStats />
          <FeedBackList />
        </div>
      </FeedbackProvider>
    </>
  );
};

export default App;
