export const increase = (amount = 1) => {
  return {
    type: 'INCREASE',
    amount
  };
};

export const decrease = (amount = 1) => {
  return {
    type: 'DECREASE',
    amount
  };
};

export const reset = (amount = 0) => {
  return {
    type: 'RESET'
  };
};

export const set = amount => {
  return {
    type: 'SET',
    amount
  };
};
