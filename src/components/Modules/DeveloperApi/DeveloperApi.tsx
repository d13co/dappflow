import './DeveloperApi.scss';
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadIndexerSpec} from "../../../redux/developerApi/actions/developerApi";
import {Grid, Tab, Tabs} from "@mui/material";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

function DeveloperApi(): JSX.Element {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();


    let route: string = location.pathname;
    route = route.substring(1);
    route = route.split('/')[1];

    useEffect(() => {
        dispatch(loadIndexerSpec());
    }, [dispatch]);

    return (<div className={"developer-api-wrapper"}>
        <div className={"developer-api-container"}>

            <Grid container>
                <Tabs value={route} style={{marginLeft: -20}}>
                    <Tab label="Indexer" value="indexer" onClick={() => {
                        navigate('/developer-api/indexer');
                    }}/>
                    <Tab label="Algod" value="algod" onClick={() => {
                        navigate('/developer-api/algod');
                    }}/>
                </Tabs>
            </Grid>


            <Outlet/>
        </div>
    </div>);
}

export default DeveloperApi;
