const FeedbackCard = ({ userName, userEmail, userFeedback, dateTimePosted }) => {
  const handleDate = () => {
    const d = new Date(dateTimePosted);
    const dd = d.getDate().toString().padStart(2, "0");
    const mm = (d.getMonth() + 1).toString().padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  };

  const handleTime = () => {
    const t = new Date(dateTimePosted);
    let hr = t.getHours();
    const min = t.getMinutes().toString().padStart(2, "0");
    const ampm = hr >= 12 ? "PM" : "AM";
    hr = hr % 12 || 12;
    return `${hr}:${min} ${ampm}`;
  };

  return (
    <div className="bg-pink-100 border border-pink-200 rounded-2xl p-6 w-full max-w-2xl mx-auto shadow-md hover:shadow-lg transition duration-300 space-y-3">
      <div className="text-lg font-semibold text-pink-800">{userName}</div>
      <p className="text-pink-900 text-sm mt-1 whitespace-pre-line italic">"{userFeedback}"</p>
      <div className="flex justify-between text-xs text-pink-600 pt-4 border-t border-pink-200 mt-4">
        <span>{handleDate()}</span>
        <span>{handleTime()}</span>
      </div>
    </div>
  );
};

export default FeedbackCard;
