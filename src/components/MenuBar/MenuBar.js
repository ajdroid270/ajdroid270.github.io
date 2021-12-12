import MenuItem from "../MenuItem";
import TimeDisplay from "../TimeDisplay/TimeDisplay";
import classes from "./MenuBar.module.css";

const menuList = ["Finder", "File", "Edit", "View", "Go", "Window", "Help"];
const menuList2 = ["System Preferences", "Edit", "View", "Window", "Help"];

const StatusBar = () => {
  return (
    <header className={classes.statusBar}>
      <span className={`${classes.item} ${classes.appleLogo}`}></span>
      {menuList.map((itemName) => (
        <MenuItem
          key={itemName}
          className={classes.item}
          displayText={itemName}
        />
      ))}

      <div className={classes.appContextMenu}>
        <TimeDisplay className={classes.item} />
      </div>
    </header>
  );
};

export default StatusBar;
