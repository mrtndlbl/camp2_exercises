import { sendMessageToWS } from '../webSockets.js'

const initialState = {
  messageList: [],
  temporaryMessage: ""
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCOMING_MESSAGE":
      return {
        ...state,
        temporaryMessage: action.temporaryMessage
      };
    case "SEND_MESSAGE":
      return {
        ...state,
        temporaryMessage: "",
        messageList: [...state.messageList, {author: action.author, message: state.temporaryMessage}]
      }
      case "GET_MESSAGES":
        return {
          ...state,
          messageList: action.messages
        }
    default:
      return state
  }
}
