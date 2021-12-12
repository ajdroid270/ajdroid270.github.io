import folderIcon from "../../assets/icons/ICO/Folder.ico";
import classes from "./DocumentItem.module.css";

const Document = ({ name }) => {
  return (
    <div className={classes.container} draggable>
      <img className={classes.icon} src={folderIcon} alt="Folder" />
      <span>{name}</span>
    </div>
  );
};
export default Document;
