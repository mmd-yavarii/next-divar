import { createContext, useContext, useEffect, useReducer } from 'react';

const BookmarkContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter((i) => i.id !== action.payload.id);
    default:
      throw new Error('Action is not defined');
  }
}

export default function BookmarkProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(state));
  }, [state]);

  return <BookmarkContext.Provider value={[state, dispatch]}>{children}</BookmarkContext.Provider>;
}

export function useBookmark() {
  const [state, dispatch] = useContext(BookmarkContext);
  const checkIsBookmark = (id) => state.some((i) => i.id == id);
  return [state, dispatch, checkIsBookmark];
}
