import { PropsWithChildren, useState } from "react";
import { LayoutContext } from "./LayoutContext";

export default function LayoutContextProvider({ children }: PropsWithChildren) {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    return (
        <LayoutContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
            {children}
        </LayoutContext.Provider>
    );
}
