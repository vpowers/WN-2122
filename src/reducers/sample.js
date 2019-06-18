export default function (state = {}, action) {
  switch (action.type) {
    case 'SAMPLE_ACTION':
      return {
        ...state
      }
    default:
      return state;
  }
};
