import React from "react";

import { RootStore } from "./root-store";
import { autorun } from "mobx";

const rs = new RootStore();
export const StoresContext = React.createContext(rs);
autorun(() => console.log(JSON.stringify(rs.todoListStore.todos)));
