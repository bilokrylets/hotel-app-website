"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ReservationContextType = {
  range: {};
  setRange: any;
  resetRange: () => void;
};

const initialState = { from: undefined, to: undefined };

const ReservationContext = createContext<ReservationContextType | null>(null);

function ReservationProvider({ children }: { children: ReactNode }) {
  const [range, setRange] = useState(initialState);

  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservationContext() {
  const context = useContext(ReservationContext);

  if (context === undefined)
    throw new Error("Context was used outside provider");

  return context;
}

export { ReservationProvider, useReservationContext };
