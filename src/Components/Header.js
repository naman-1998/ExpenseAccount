import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
// import useSession from "./useSession";
const Header = ({ isLogin, userDetails }) => {
  const history = useHistory();
  // const { isLogin, userDetails } = useSession();
  // const [show, setShow] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleLink = (link) => {
    history.push(link);
    setAnchorEl(null);
  };
  console.log(isLogin);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            color="inherit"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Accounts
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleLink("/accounts/addtransaction")}>Add Transaction</MenuItem>
            <MenuItem onClick={handleClose}>Equity</MenuItem>
            <MenuItem onClick={handleClose}>Expenses</MenuItem>
            <MenuItem onClick={handleClose}>Income</MenuItem>
            <MenuItem onClick={handleClose}>Liabilities</MenuItem>
            <MenuItem onClick={() => handleLink("/accounts/list")}>Balance Sheet</MenuItem>
          </Menu>

          <Button color="inherit" onClick={() => handleLink("/about")}>
            About
          </Button>
          <Button color="inherit" onClick={() => handleLink("/contact")}>
            {" "}
            Contact Us
          </Button>
          {!isLogin ? (
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
