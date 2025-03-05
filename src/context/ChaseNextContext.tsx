import React, { useState, useCallback, useMemo } from "react";
import type { ReactNode } from "react";
import { produce } from "immer";

export interface ChaseNextState {
  /**
   * Route IDs to Chase
   */
  chaseNexts: string[];
  /**
   * boolean hide
   */
  isHidden: boolean;
}

interface ChaseNextsContextValue extends ChaseNextState {
  toggleChase: (routeId: string) => void;
  toogleChaseNextsDialog: () => void;
  closeChaseNexts: () => void;
}

interface ChaseNextsContextProviderProps {
  children: ReactNode;
}

const ChaseNextContext = React.createContext<ChaseNextsContextValue>(
  {} as ChaseNextsContextValue
);

export const ChaseNextContextProvider = ({
  children,
}: ChaseNextsContextProviderProps) => {
  const getInitialState = (): ChaseNextState => {
    return {
      chaseNexts: [],
      isHidden: false,
    };
  };

  type State = ChaseNextState;
  const [state, setStateRaw] = useState(getInitialState);

  const toggleChase = useCallback((routeId: string) => {
    setStateRaw(
      // FIXME: Review logic
      produce((state: State) => {
        if (state.chaseNexts.includes(routeId)) {
          state.chaseNexts = state.chaseNexts.filter(
            (chaseNext) => routeId !== chaseNext
          );
        } else {
          state.isHidden = false;
          state.chaseNexts = [...state.chaseNexts, routeId];
        }
      })
    );
  }, []);

  const toogleChaseNextsDialog = useCallback(() => {
    setStateRaw(
      // FIXME: Review logic
      produce((state: State) => {
        state.isHidden = !state.isHidden;
      })
    );
  }, []);

  const closeChaseNexts = useCallback(() => {
    setStateRaw(
      // FIXME: Review logic
      produce((state: State) => {
        state.chaseNexts = [];
      })
    );
  }, []);

  const contextValue: ChaseNextsContextValue = useMemo(
    () => ({
      ...state,
      toggleChase,
      toogleChaseNextsDialog,
      closeChaseNexts,
    }),
    [closeChaseNexts, state, toggleChase, toogleChaseNextsDialog]
  );

  return (
    <ChaseNextContext.Provider value={contextValue}>
      {children}
    </ChaseNextContext.Provider>
  );
};
export default ChaseNextContext;
export type { ChaseNextsContextValue };
