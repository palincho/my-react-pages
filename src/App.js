import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/Todo">
          <Todo />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
