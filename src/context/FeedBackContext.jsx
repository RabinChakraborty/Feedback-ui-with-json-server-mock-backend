import { createContext, useState, useEffect } from 'react';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [feedbackedit, setEditFeedback] = useState({
    item: {},
    edit: false,
  });
  // const fetchFeedback = async () => {
  //   const response = await fetch(`/feedback?_sort=id&order=desc`);
  //   const data = await response.json();
  //   setFeedback(data);
  //   setIsLoading(false);
  // };
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  //add
  // const addFeedback = async (newFeedback) => {
  //   const response = await fetch('/feedback', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(newFeedback),
  //   });
  //   const data = await response.json();
  //   setFeedback([data, ...feedback]);
  // };
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  //delete
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete this?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //edit

  const editFeedback = (item) => {
    setEditFeedback({ item, edit: true });
  };

  //update
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...id, ...data } : item))
    );
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
        editFeedback,
        feedbackedit,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
