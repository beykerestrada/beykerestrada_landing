import * as React from "react";

type ContainerProps<T extends React.ElementType = "div"> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export default function Container<T extends React.ElementType = "div">({
  as,
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Component = (as ?? "div") as React.ElementType;
  const classes = [
    "mx-auto w-full max-w-[1200px] px-4 md:px-6",
    "lg:max-w-[1200px]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
