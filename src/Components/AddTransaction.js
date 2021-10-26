import React from "react";
import {
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  TextareaAutosize,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import "../App.css";
import { padding } from "@mui/system";

const AddTransaction = () => {
  return (
    <div style={{ padding: "20px", margin: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={8} sm={4}>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid className="transaction-grid" item xs={8} sm={4}>
              <Typography variant="inherit">Balance Sheet</Typography>
            </Grid>
            <Grid className="transaction-grid" item xs={8} sm={4}>
              <Typography variant="inherit">Show Assets</Typography>
            </Grid>
           
            <Grid className="transaction-grid" item xs={8} sm={4}>
              <Typography variant="inherit">Show Liabilities </Typography>
            </Grid>
            <Grid className="transaction-grid" item xs={8} sm={4}>
              <Typography variant="inherit">Show Equity</Typography>
            </Grid>
            <Grid className="transaction-grid" item xs={8} sm={4}>
              <Typography variant="inherit">Show Expenses</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} sm={6} md={6} >
          <Card style={{ width:"80%", margin: "20px auto", padding:"20px", minWidth:"20px" }}>
            <CardContent style={{textAlign:"center"}}><Typography variant="inherit"> Add Account</Typography></CardContent>
            <TextField required label="Account Name" />

            <Select label="Account Type">
              <MenuItem>Asset</MenuItem>
              <MenuItem>Liability</MenuItem>
              <MenuItem>Expense</MenuItem>
              <MenuItem>Equity</MenuItem>
            </Select>
            <TextareaAutosize
              minRows={3}
              cols={6}
              placeholder="Description"
              style={{ width: 200 }}
            />
            <TextField type="number" label="Enter Amount" />
            <TextField type="date" />
            <Select>
              Transaction Type
              <MenuItem> Cash</MenuItem>
              <MenuItem>Credit</MenuItem>
            </Select>
            <Button variant="contained" style={{ backgroundColor: "#00ADB5" }}>
              {" "}
              Add Account
            </Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddTransaction;
