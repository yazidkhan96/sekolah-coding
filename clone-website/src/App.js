import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Routes from './config/Route';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {
            Routes.map((route,id) => {
              return  <Route key={id} path={route.path} exact component={route.component}/>
            })
          } 
          <Route path="*" component={() => <div>404</div>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
