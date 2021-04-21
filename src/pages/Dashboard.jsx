import React, { useContext } from 'react';
import styled from 'styled-components'
import { Link, Redirect, useRouteMatch, Route, Switch } from 'react-router-dom';

import ViewAll from "./dashboard/panels/ViewAll";
import CreatePanel from "./dashboard/panels/CreatePanel";
import DeletePanel from "./dashboard/panels/DeletePanel";
import EditPanel from "./dashboard/panels/EditPanel";
import AuthContext from "../auth/AuthContext"

const DashBoard = (props) => {

    const auth = useContext(AuthContext);
    const { path, url } = useRouteMatch();



    if (!auth.isUser) {
        return (<Redirect to="/login" />)
    }

    return (
        <DashBoardStyles>
            <SideBar>
                <header>
                    <h1>Firebase</h1>
                    <p>whats all the fuss about</p>
                </header>

                <ul>
                    <li><Link to={`${url}`}>View All Content</Link></li>
                    <li><Link to={`${url}/create`}>Create Content</Link></li>
                    <li><Link to={`${url}/edit`}>Edit Content</Link></li>
                    <li><Link to={`${url}/delete`}>Delete Content</Link></li>
                </ul>
            </SideBar>
            <Panels>
                <Switch>
                    <Route exact Bpath={`${path}`} component={ViewAll} />
                    <Route path={`${path}/create`} component={CreatePanel} />
                    <Route path={`${path}/edit`} component={EditPanel} />
                    <Route path={`${path}/delete`} component={DeletePanel} />
                </Switch>
            </Panels>

        </DashBoardStyles>
    )
}

export default DashBoard;

const DashBoardStyles = styled.header` 
      display:flex;
`

const SideBar = styled.aside`
position:relative;
z-index:1;  
width: 256px;
box-shadow: 0 0 5px 0 grey;
height: calc(100vh - 64px);
padding: 2rem;
header{
    margin-bottom:1rem;
    font-size: 13px;
}
h1{
    font-size: 1.25rem;
    font-weight:bold;

}
li{
    opacity:0.7;
    font-size: 12px;
    margin-bottom: 0.35rem;
}
`

const Panels = styled.aside`  
flex:1;
background:#f3f3f3;
height: calc(100vh - 64px);
`