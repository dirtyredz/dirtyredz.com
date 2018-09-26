// menu
// Action-Creator
export function MenuStateChanged(MenuState) {
  return {
    type: 'MENU_STATE_CHANGED',
    MenuState,
  }
}

export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'MENU_STATE_CHANGED':
      return { ...state, isOpen: action.MenuState }
    default:
      return state
  }
}

// Usage inside component
// import { MenuStateChanged } from "../redux/menu";

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ MenuStateChanged }, dispatch);
// }

// Usage in rootReducer
// import menu from './menu'
// const rootReducer =  combineReducers({menu})
