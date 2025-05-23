import { createContext, useContext, useState } from 'react';

const LocationContext = createContext();

const initialState = 'کل ایران';

export default function LocationProvider({ children }) {
  const [state, setState] = useState(initialState);

  return <LocationContext.Provider value={[state, setState]}>{children}</LocationContext.Provider>;
}

export function useCityLocation() {
  const result = useContext(LocationContext);
  return result;
}
