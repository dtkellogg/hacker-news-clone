import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme";
import Nav from "./components/Nav";
import Loading from "./components/Loading";

const Posts = React.lazy(() => import("./components/Posts"));
const Post = React.lazy(() => import("./components/Post"));
const User = React.lazy(() => import("./components/User"));

function App() {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  return (
    <div className="App">
      <ThemeProvider value={theme}>
        <div className={theme}>
          <div className="container">
            <Nav toggleTheme={toggleTheme} />
            <React.Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/" render={() => <Posts type="top" />} />
                <Route path="/new" render={() => <Posts type="new" />} />
                <Route path="/post" component={Post} />
                <Route path="/user" component={User} />
                <Route render={() => <h1>404</h1>} />
              </Switch>
            </React.Suspense>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;