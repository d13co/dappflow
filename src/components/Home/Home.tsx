import './Home.scss';
import React from "react";
import {Grid} from "@mui/material";
import LatestTransactions from "../LatestTransactions/LatestTransactions";

function Home(): JSX.Element {
    return (<div className={"home-wrapper"}>
        <div className={"home-container"}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <LatestTransactions></LatestTransactions>
                </Grid>
            </Grid>

        </div>
    </div>);
}

export default Home;