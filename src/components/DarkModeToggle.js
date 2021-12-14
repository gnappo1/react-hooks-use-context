import {useContext} from "react";
import {ThemeContext} from '../context/theme'


function DarkModeToggle() {
  const theme = useContext(ThemeContext)
  function handleToggleTheme(e) {
    if (theme) theme.setTheme(e.target.checked ? "dark" : "light");
  }
  return (
    <label>
      Dark Mode
      <input
        type="checkbox"
        checked={theme && theme.theme === "dark"}
        onChange={handleToggleTheme}
      />
    </label>
  );
}

export default DarkModeToggle;
