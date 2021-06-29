import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { AuthContextProvider } from "./contexts/AuthConext";
import PrivateRoutes from "./routes/PrivateRoutes";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Exam from "./components/Exam";

const App = () => {
  return (
    <div>
      <Router>
        {/* contexts */}
        <ThemeContextProvider>
          <AuthContextProvider>
            {/* core styles */}
              {/* paths */}
              <Switch>
                {/* admin routes */}
                <Route path="/login" component={LoginPage} />
                <PrivateRoutes exact path="/" component={HomePage} />
                <PrivateRoutes  path="/exam" component={Exam} />
                
                
              </Switch>
          </AuthContextProvider>
        </ThemeContextProvider>
      </Router>
    </div>
  );
};

export default App;
