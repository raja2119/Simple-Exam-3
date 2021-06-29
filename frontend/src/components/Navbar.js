import React, { useState } from "react";
import { Button, Menu } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { useThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("admin-panel");
  const { showAlert } = useThemeContext();
  let currentUser =null
  try {
      currentUser = localStorage.getItem("user")
      
  } catch (err) {
      console.log(err);
  }

  const history = useHistory();

  const handleItemClick = (name) => setActiveItem(name);
  const handleLogout = async () => {
    try {
      localStorage.removeItem("user")
      history.push("/login");
    } catch (err) {
      showAlert(err.message, "error");
    }
  };
  return (
    <>
      <Menu >
        {/* <Link to="/admin-panel"> */}
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={() => {
            handleItemClick("home");
            history.push("/");
          }}
        />

        <Menu.Menu position="right">
          {/* <Dropdown item text="Language">
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
          {currentUser && (
            <Menu.Item
              header
              name="name"
            >{`Hi, ${currentUser}`}</Menu.Item>
          )}

          <Menu.Item>
            {currentUser ? (
              <Button color="blue" onClick={handleLogout} primary>
                Sign Out
              </Button>
            ) : (
              <Link to="login">
                <Button color="blue" primary>
                  Sign In
                </Button>
              </Link>
            )}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default Navbar;
