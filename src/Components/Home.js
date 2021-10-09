import React from "react";
import { Typography, Button, Box ,Grid} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  const handleLink = (link) => {
    history.push(link);
  };
  return (
    <div className="container">
      <div className="top">
        <Typography variant="h2" className="tagline">
          One Partner to Manage All Your Accounts
        </Typography>
        <Button
          style={{ backgroundColor: "#00ADB5", margin: "50px" }}
          variant="contained"
          onClick={() => handleLink("/signup")}
        >
          Get Started
        </Button>
      </div>

      <Box className="services-title">
        <Typography variant="overline"  fontWeight="220" fontSize="40px" >
          Personal Finance Tools
        </Typography>
      </Box>
      <div className="services">
        <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Expenses
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Manage your expenses
            </Typography>
            <Typography variant="body2">
              Cupidatat aliqua incididunt nostrud do dolore est officia irure
              Lorem esse nisi incididunt excepteur.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
</Grid>
<Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            ></Typography>
            <Typography variant="h5" component="div">
              Equity
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Manage your expenses
            </Typography>
            <Typography variant="body2">
              Cupidatat aliqua incididunt nostrud do dolore est officia irure
              Lorem esse nisi incididunt excepteur.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            ></Typography>
            <Typography variant="h5" component="div">
              Liabilities
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Calculate your total liabilities
            </Typography>
            <Typography variant="body2">
              Cupidatat aliqua incididunt nostrud do dolore est officia irure
              Lorem esse nisi incididunt excepteur.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
