import cn from "classnames";

export const Notification = ({ active }) => {
  const content = active
    ? "Ваш коментар збережено та буде розміщений після модерації."
    : "";

  return <span className={cn("notification", { active })}> {content} </span>;
};
