"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";
import FlashcardIcon from "~/components/UI/Icon/FlashcardIcon";
import QuizIcon from "~/components/UI/Icon/QuizIcon";
import SteakIcon from "~/components/UI/Icon/SteakIcon";
import PlusIcon from "~/components/UI/Icon/PlusIcon";

export type SiderBarItem = {
  label: string;
  path: string;
  icon: ReactElement;
};

type Props = {
  data: SiderBarItem[];
};

const SideBar = ({ data }: Props) => {
  const pathname = usePathname();
  return (
    <aside
      className="bg-secondary px-10 py-8 min-h-800 rounded"
      style={{ minHeight: "600px" }}
    >
      <ul>
        {data.map((item, index) => (
          <li
            key={index}
            className={`py-4 px-10 rounded  transition duration-300 ${
              pathname == item.path ? "active " : "hover:bg-accent"
            }`}
          >
            <Link
              href={item.path}
              prefetch={false}
              className="flex items-center"
            >
              {item.icon}
              <h1 className="font-medium ml-2">{item.label}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
