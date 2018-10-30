import { ENTER_EMAIL,
  APARTMENT_SELECTED,
  ENTER_PASSWORD
} from '../constants/actionTypes';

const defaultState = {
  email: '',
  password: '',
  isClick: false
}

export default function welcomeReducer(state = defaultState, action) {
  switch (action.type) {
    case ENTER_MAIL:
      return {
        ...state,
        isClick: true
      }
    case APARTMENT_SELECTED:
      return {
        ...state,
        
      }
  }

}