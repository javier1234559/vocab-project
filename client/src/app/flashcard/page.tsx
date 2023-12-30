import LessonCard from "~/components/UI/Card/LessonCard";

export default function Page() {
  const listLesson = [
    {
      title: "Business English Writing Skills",
      description:
        "A unique opportunity to gain guidance and feedback from our expert.",
      path: "/flashcard?lessonid=leson1",
    },
    {
      title: "Leson1",
      description:
        "A unique opportunity to gain guidance and feedback from our expert.",
      path: "/flashcard?lessonid=leson1",
    },
  ];

  return (
    <section className="ml-10">
      <h1 className="pb-4 text-3xl font-medium">Recents</h1>
      <div className="flex gap-4 mb-4">
        {listLesson.map((item, index) => (
          <LessonCard
            id={`id-${index}`}
            title={item.title}
            description={item.description}
            path={item.path}
          />
        ))}
      </div>
      <h1 className="pb-4 text-3xl font-medium">My Flashcard</h1>
      <div className="flex gap-4 mb-4">
        {listLesson.map((item, index) => (
          <LessonCard
            id={`id-${index}`}
            title={item.title}
            description={item.description}
            path={item.path}
          />
        ))}
      </div>
      <h1 className="pb-4 text-3xl font-medium">Explore</h1>
      <div className="flex gap-4 mb-4">
        {listLesson.map((item, index) => (
          <LessonCard
            id={`id-${index}`}
            title={item.title}
            description={item.description}
            path={item.path}
          />
        ))}
      </div>
    </section>
  );
}
