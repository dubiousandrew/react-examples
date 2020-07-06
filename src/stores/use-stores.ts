import React from "react";
import { StoresContext } from "./stores-context";

export const useStores = () => React.useContext(StoresContext);
