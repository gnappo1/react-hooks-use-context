import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import ThemedButton from "./ThemedButton";
import DarkModeToggle from "./DarkModeToggle";
import Interests from "./Interests";
import defaultUser from "../data";

function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);

  function handleLogin() {
    if (user) {
      setUser(null);
    } else {
      setUser(defaultUser);
    }
  }
  return (
    <main className={theme}>
      <Header user={user}>
        <ThemedButton onClick={handleLogin}>
          {user ? "Logout" : "Login"}
        </ThemedButton>
        <DarkModeToggle theme={theme} setTheme={setTheme} />
      </Header>
      <Profile user={user}>
        <Interests interests={user ? user.interests : ["You must Log In First"]} theme={theme} />
      </Profile>
    </main>
  );
}

export default App;
