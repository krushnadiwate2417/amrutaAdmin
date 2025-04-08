import { GET_URL } from "../constants/constant";
import { useState } from "react";
import Loader from "./Loader";
import FeedbackCard from "./FeedBackCards";
import Footer from "./Footer";

const Admin = () => {
  const [loaderState, setLoaderState] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [text, setText] = useState("Loading");
  const [fetchedFeedbacks, setFetchedFeedBacks] = useState([]);

  const handleShowFeedback = async () => {
    setLoaderState(true);
    if (fetchedFeedbacks.length > 0) {
      setFetchedFeedBacks([]);
      setLoaderState(false);
      return;
    }
    try {
      const response = await fetch(GET_URL);
      const result = await response.json();
      if (!response.ok) {
        setSubmitted(true);
        setText(result.message);
        return;
      }
      setLoaderState(false);
      setFetchedFeedBacks(result.data);
    } catch (error) {
      setLoaderState(false);
      setText("Something went wrong!");
      setSubmitted(true);
    }
  };

  return (
    <>
      {loaderState && (
        <div>
          <Loader
            text={text}
            submitted={submitted}
            setloaderState={setLoaderState}
          />
        </div>
      )}
      <div className="min-h-screen bg-pink-50 dark:bg-neutral-900 px-4 py-10 font-serif">
        <div className="flex justify-center mb-10">
          <button
            onClick={handleShowFeedback}
            className="bg-pink-600 cursor-pointer hover:bg-pink-500 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            {fetchedFeedbacks.length > 0 ? "Back" : "Show Feedbacks"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-4">
          {fetchedFeedbacks.length > 0 &&
            fetchedFeedbacks.map((user) => (
              <FeedbackCard
                key={user._id}
                userName={user.fullName}
                userFeedback={user.feedBackMsg}
                dateTimePosted={user.dateTime}
              />
            ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Admin;
