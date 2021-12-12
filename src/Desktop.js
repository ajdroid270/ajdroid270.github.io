import "./Desktop.css";
import DesktopItemContainer from "./components/DesktopItemContainer";
import MenuBar from "./components/MenuBar";

function Desktop() {
  return (
    <div className="App">
      <MenuBar />
      <DesktopItemContainer />
    </div>
  );
}

export default Desktop;
