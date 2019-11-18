import {
    FETCH_USER,
    UPDATE_USER,
    DELETE_USER,
    GET_ALL_USERS,
    POST_FRIEND_REQUEST,
    GET_FRIEND_REQUEST,
    DELETE_FRIEND_REQUEST, 
    GET_FRIENDS, 
    ACCEPT_FRIEND_REQUEST,
    GET_FRIEND_REQUEST_SENT
  } from "../actions";
  
  const initialState = {
    loading: false,
    user: {},
    error: null,
    users: [],
    requests: [],
    friends: [], 
    requestsSent: [], 
    userDeleted: false
  };
  
  export const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER: {
        const error = action.payload.error;
        const user = action.payload.user;
        const loading = action.payload.loading;
        if (user !== null) {
          return {
            ...state,
            user: user,
            loading: loading
          };
        } else if (error !== null) {
          return {
            ...state,
            error: error,
            loading: loading
          };
        } else {
          return {
            ...state,
            loading: loading
          };
        }
      }
      case GET_ALL_USERS: {
        const error = action.payload.error;
        const users = action.payload.users;
        const loading = action.payload.loading;
        if (users !== null) {
          return {
            ...state,
            users: users,
            loading: loading
          };
        } else if (error !== null) {
          return {
            ...state,
            error: error,
            loading: loading
          };
        } else {
          return {
            ...state,
            loading: loading
          };
        }
      }
      case UPDATE_USER: {
        const error = action.payload.error;
        const user = action.payload.user;
        const loading = action.payload.loading;
        if (user !== null) {
          return {
            ...state,
            user: user,
            loading: loading
          };
        } else if (error !== null) {
          return {
            ...state,
            error: error,
            loading: loading
          };
        } else {
          return {
            ...state,
            loading: loading
          };
        }
      }
      case DELETE_USER: {
        return {
          ...state,
          userDeleted: action.payload.userDeleted,
          error: action.payload.error,
          loading: action.payload.loading
        }
        // if (action.payload.userDeleted) {
        //   return {
        //     ...state,
        //   user: {},
        //   error: action.payload.error,
        //   loading: action.payload.loading
        //   }
        // } else {
        //   return {
        //     ...state,
        //     loading: action.payload.loading
        //   }
        // }
      }
      case POST_FRIEND_REQUEST: {
      }
      case GET_FRIEND_REQUEST: {
        const error = action.payload.error;
        const requests = action.payload.requests;
        const loading = action.payload.loading;
        if (requests !== null) {
          return {
            ...state,
            requests: requests,
            loading: loading
          };
        } else if (error !== null) {
          return {
            ...state,
            error: error,
            loading: loading,
            requests: []
          };
        } else {
          return {
            ...state,
            loading: loading,
            requests: []
          };
        }
      }
      case DELETE_FRIEND_REQUEST: {
        console.log(action.payload.deleteRequestId);
        if (action.payload.deleteRequestId) {
          console.log(action.payload.deleteRequestId);
          return {
            ...state,
            requests: state.requests.filter(
              request => request.id !== action.payload.deleteRequestId
            )
          };
        } else {
          return {
            ...state
          };
        }
      }
      case GET_FRIENDS: {
        const error = action.payload.error;
        const friends = action.payload.friends;
        const loading = action.payload.loading;
        if (friends !== null) {
          return {
            ...state,
            friends: friends,
            loading: loading
          };
        } else if (error !== null) {
          return {
            ...state,
            error: error,
            loading: loading
          };
        } else {
          return {
            ...state,
            loading: loading
          };
        }
      }
      case ACCEPT_FRIEND_REQUEST: {
        if (action.payload.acceptFriendRequestId) {
          console.log(state);
          console.log(action.payload.acceptFriendRequestId);
          return {
            ...state,
            requests: state.requests.filter(
              request => request.id !== action.payload.acceptFriendRequestId
            )
          };
        }
        return {
          ...state
        };
      }
      case GET_FRIEND_REQUEST_SENT: {
        const error = action.payload.error;
        const requestsSent = action.payload.requestsSent;
        const loading = action.payload.loading;
        if (requestsSent !== null) {
          return {
            ...state,
            requestsSent: requestsSent,
            loading: loading
          };
        } else if (error !== null) {
          return {
            ...state,
            error: error,
            loading: loading
          };
        } else {
          return {
            ...state,
            loading: loading
          };
        }
      }
      default:
        return state;
    }
  };
  