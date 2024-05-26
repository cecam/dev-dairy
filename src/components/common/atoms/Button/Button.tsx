import { FC } from "react";
import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({ StyleType }) => {
  const renderStyle = () => {
    switch (StyleType) {
      case "primary":
        return "bg-blue-500 text-white";
      case "link":
        return "text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500";
      default:
        return "";
    }
  };
  return <button className={renderStyle()}>Click me</button>;
};
