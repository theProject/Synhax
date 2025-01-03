import { useContext } from "react";
import { LayoutContext } from "./LayoutContext"
export function useLayoutContext() {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error("useLayoutContext must be used within a LayoutContextProvider");
    }
    return context;
}
