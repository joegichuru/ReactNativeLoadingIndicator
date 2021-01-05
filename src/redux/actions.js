//action creator
export const updateScore = (score) => {
  //action
  return {
    type: 'score/update',
    payload: score,
  };
};

export const resetScore = () => {
  return {
    type: 'score/reset',
  };
};

export const setMessage = (message) => {
  return {
    type: 'quote',
  };
};
