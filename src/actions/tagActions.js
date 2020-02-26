export const addTag = tag => {
  return {
    type: 'ADD_TAG',
    tag
  };
};

export const removeTag = tag => {
  return {
    type: 'REMOVE_TAG',
    tag
  };
};

export const removeAllTags = () => {
  return {
    type: 'REMOVE_ALL_TAGS'
  };
};
