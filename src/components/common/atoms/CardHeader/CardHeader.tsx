import { FC } from "react";
import Link from "next/link";
import { CardHeaderProps } from "./CardHeader.types";
export const CardHeader: FC<CardHeaderProps> = ({ title, link, type }) => {
  const titleStytle =
    type === "card"
      ? "text-lg font-bold text-gray-900"
      : "text-3xl font-bold text-gray-900";

  return (
    <header className="flex justify-between px-5">
      <p className={titleStytle}>{title}</p>
      {link && (
        <Link href={link} className="text-blue-500 hover:text-blue-600">
          View All
        </Link>
      )}
    </header>
  );
};
