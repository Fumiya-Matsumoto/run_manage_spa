import { REQUEST_STATE } from "../constants";

export const initialState = {
    fetchState: REQUEST_STATE.INITIAL,
    practice_postsList: [],
};

export const practice_postsActionTyps = {
    FETCHING: 'FETCHING',
    FETCH_SUCCESS: 'FETCH_SUCCESS'
}

export const practice_postsReducer = (state, action) => {
    switch (action.type) {
      case practice_postsActionTyps.FETCHING:
        return {
          ...state,
          fetchState: REQUEST_STATE.LOADING,
        };
      case practice_postsActionTyps.FETCH_SUCCESS:
        return {
          fetchState: REQUEST_STATE.OK,
          practice_postsList: action.payload.practice_posts,
        };
      default:
        throw new Error();
    }
}
