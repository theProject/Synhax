import { Dispatch, SetStateAction, createContext } from "react";

export interface LayoutContextProps {
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export const LayoutContext = createContext<LayoutContextProps | null>(null);
