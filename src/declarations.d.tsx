declare module "react-grid-layout" {
    import * as React from "react";

    export interface ResponsiveProps {
        className?: string;
        layouts?: Record<string, unknown>; // Explicit type for layouts
        breakpoints?: Record<string, number>;
        cols?: Record<string, number>;
        rowHeight?: number;
        isDraggable?: boolean;
        isResizable?: boolean;
        compactType?: "horizontal" | "vertical" | null;
        preventCollision?: boolean;
        children?: React.ReactNode;
    }

    export class Responsive extends React.Component<ResponsiveProps, object> {} // Changed from `{}` to `object`

    export function WidthProvider<P>(
        component: React.ComponentType<P>
    ): React.ComponentType<P>; // Keeps generic for better type inference
}
