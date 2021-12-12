import DocumentItem from "../DocumentItem";
import classes from "./DesktopItemContainer.module.css";

const DesktopItemContainer = ({ items = ["Macintosh", "Aj"] }) => {
  return (
    <div className={classes.container}>
      {items.map((item) => (
        <DocumentItem name={item} />
      ))}
    </div>
  );
};
export default DesktopItemContainer;
