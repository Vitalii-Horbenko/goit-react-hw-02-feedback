import React from 'react';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map(name => (
        <button type="button" key={name} name={name} onClick={onLeaveFeedback}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
