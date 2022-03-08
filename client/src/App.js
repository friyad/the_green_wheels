import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  Redirect
} from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import LogIn from './Pages/Authentication/LogIn/LogIn';
import Registration from './Pages/Authentication/Registration/Registration';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import useAuth from './Hooks/useAuth';
import Bicycles from './Pages/Bicycles/Bicycles';
import BicycleDetails from './Pages/BicycleDetails/BicycleDetails';
import PrivetRoute from './PrivetRoute/PrivetRoute';
AOS.init();

function App() {
  const location = useLocation()
  const { isLoading, user } = useAuth()



  return (
    <>
      {isLoading
        ? <div className="flex justify-center items-center mt-48">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-700 mr-2">
          </div>
        </div>

        : <div className="App">
          <Header />
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="fade"
              timeout={300}
            >
              <Switch location={location}>
                <Route path="/home">
                  <Home />
                </Route>

                <PrivetRoute path="/dashboard">
                  <Dashboard />
                </PrivetRoute>

                <Route path="/bicycles">
                  <Bicycles />
                </Route>

                <PrivetRoute path="/bicycleDetails/:detialsID">
                  <BicycleDetails />
                </PrivetRoute>




                <Route path="/login">
                  {user
                    ? < Redirect to="/" />
                    : <LogIn />}
                </Route>

                <Route path="/registration">
                  {user
                    ? < Redirect to="/" />
                    : <Registration />
                  }
                </Route>

                <Route exact path="/">
                  <Home />
                </Route>

                <Route exact path="*">
                  <NotFound />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>

          <Footer />
        </div>
      }
    </>);
}

export default App;