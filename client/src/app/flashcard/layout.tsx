import SideBar from "~/components/Layout/SideBar";
import FlashcardIcon from "~/components/UI/Icon/FlashcardIcon";
import QuizIcon from "~/components/UI/Icon/QuizIcon";
import SteakIcon from "~/components/UI/Icon/SteakIcon";
import PlusIcon from "~/components/UI/Icon/PlusIcon";
import { SiderBarItem } from "~/components/Layout/SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {

  const sidebarItems: SiderBarItem[] = [
    {
      label: "Flashcards",
      path: "/flashcard",
      icon: <FlashcardIcon />,
    },
    {
      label: "Quiz",
      path: "/quiz",
      icon: <QuizIcon />,
    },
    {
      label: "Steak",
      path: "/steak",
      icon: <SteakIcon />,
    },
    {
      label: "Plus",
      path: "/flashcard/create",
      icon: <PlusIcon />,
    },
  ];

  return (
    <div className="flex px-8 my-10">
      <SideBar data={sidebarItems} />
      <section className="w-full">{children}</section>
    </div>
  );
}
