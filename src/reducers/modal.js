import {
    SHOW_MODAL,
    HIDE_MODAL
  } from '../constants/ActionTypes'
  
  const initialState = {
    open: false
  }

  const modal = (state = initialState, action) => {
      switch (action.type) {
        case SHOW_MODAL:
          return { open: true }
        case HIDE_MODAL:
            return initialState;
        default:
            return state;
      }
    }
  
export default modal;