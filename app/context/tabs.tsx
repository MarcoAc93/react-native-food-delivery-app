import React, { createContext, useReducer, useContext } from 'react';
import { tabReducer, TabState } from '../reducers/TabReducer';

export type tabContextProps = {
  tabSelected: string;
  setTabSelected: (tab: string) => void;
};

const tabInitialState: TabState = {
  tabSelected: ''
};

export const TabContext = createContext({} as tabContextProps);

export const TabProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(tabReducer, tabInitialState);

  const setTabSelected = (tab: string) => {
    dispatch({ type: 'tabSelected', payload: tab });
  };

  return (
    <TabContext.Provider value={{ ...state, setTabSelected }}>
      {children}
    </TabContext.Provider>
  )
};

export const useTabs = (): tabContextProps => {
  const state = useContext(TabContext);
  return state;
};
