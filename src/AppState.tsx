import React, { useState } from "react";

// 定义应用的状态类型
interface AppStateValue {
  username: string;
  shoppingCart: { items: { id: number; name: string }[] };
}

// 默认上下文值
const defaultContextValue: AppStateValue = {
  username: "阿莱克斯",
  shoppingCart: {
    items: [],
  },
};

export const appContext = React.createContext(defaultContextValue);
// export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>>>;
// 为组件定义 props 类型，明确包含 children
interface AppStateProviderProps {
  children: any;
}

export const AppStateProvider: React.FC<AppStateProviderProps> = (props) => {
  const [state] = useState(defaultContextValue);

  return (
    <appContext.Provider value={state}>
      {/* <appSetStateContext.Provider value={setState}> */}
        {props.children}
      {/* </appSetStateContext.Provider> */}
    </appContext.Provider>
  );
};
