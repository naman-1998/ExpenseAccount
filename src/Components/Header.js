import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import useSession from "./useSession";
const Header = () => {
  const history = useHistory();
  const { isLogin, userDetails } = useSession();
  const [show, setShow] = useState(false);
  const handleLink = (link) => {
    history.push(link);
  };
  useEffect(() => {
    if (isLogin === true) setShow(true);
  }, [isLogin]);
  console.log(show,isLogin);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "#212121" }}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            style={{ cursor: "pointer" }}
            sx={{ flexGrow: 1 }}
            onClick={() => handleLink("/")}
          >
            Simplified Expense
          </Typography>
          <Button color="inherit" onClick={() => handleLink("/about")}>
            About
          </Button>
          <Button color="inherit" onClick={() => handleLink("/contact")}>
            {" "}
            Contact Us
          </Button>
          {!show ? (
            <>
              <Button color="inherit" onClick={() => handleLink("/login")}>
                Login
              </Button>
              <Button
                variant="contained"
                onClick={() => handleLink("/signup")}
                style={{ backgroundColor: "#00ADB5" }}
              >
                Get Started
              </Button>
              
            </>
          ) : (
            userDetails.firstName
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
