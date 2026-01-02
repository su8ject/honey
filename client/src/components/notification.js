import cn from "classnames";

export const Notification = ({ successfully, error }) => {
  const contentNotification = () => {
    if (successfully) {
      return "Ваш коментар збережено та буде розміщений після модерації."
    } else if (error) {
      return "Заповніть усі поля."
    } else {
      return ""
    }
  };
  const content = contentNotification();

  return <span className={cn("notification", {active: successfully || error}, {error})}> {content} </span>;
};
