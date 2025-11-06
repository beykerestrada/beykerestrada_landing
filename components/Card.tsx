import React from "react";

type CardProps = {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children: React.ReactNode;
};

export default function Card({
    as: Component = "div",
    className,
    children,
}: CardProps) {
    return (
        <Component className={`card ${className ?? ""}`}>
            {children}
        </Component>
    );
}
