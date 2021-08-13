export type TabState = {
  tabSelected: string;
};

export type TabActions = { type: 'tabSelected', payload: string };

export const tabReducer = (state: TabState, action: TabActions): TabState => {
  switch (action.type) {
    case 'tabSelected':
      return {
        ...state,
        tabSelected: action.payload
      }
    default:
      return state;
  }
};
