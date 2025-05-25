import { createContext, useContext, useState } from 'react';

const LocationContext = createContext();

const initialState = 'کرمانشاه';

export default function LocationProvider({ children }) {
  const [state, setState] = useState(initialState);
  const [isModalOpen, setSsModalOpen] = useState(true);

  return <LocationContext.Provider value={[state, setState, isModalOpen, setSsModalOpen]}>{children}</LocationContext.Provider>;
}

export function useCityLocation() {
  const result = useContext(LocationContext);
  return result;
}
