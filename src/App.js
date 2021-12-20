import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import routes from "./routes";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router >
        <div>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={(props => {
                  return (
                    (route.layout) ?
                      <route.layout {...props}>
                        <route.component {...props} />
                      </route.layout>
                      : <div><route.component {...props} /></div>
                  );
                })}
              />
            );
          })}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
