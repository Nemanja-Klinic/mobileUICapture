const initialState = {
    clicks: []
  };
  
  const clickReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CLICK':
        return { ...state, clicks: [...state.clicks, action.payload] };
      default:
        return state;
    }
  };
  
  export default clickReducer;
  