import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';

import LogIn from '../LogIn/index';
import Register from '../Register/index';
import BasicForm from '../CheckInManager/BasicForm/index';
//import DataTable from '../CheckInManager/DataTable/index';
import MyTable from '../CheckInManager/MyTable/index';
import BlacklistReqForm from '../CheckInManager/BlacklistForm/Blacklist';
import ManagerTable from '../Manager/DataTable/index';
import ManMaterialTable from '../Manager/MaterialTable/index';
import OwnerTable from '../Owner/DataTable/index';
import AreaTable from '../Area/DataTable/index';
import MaterialTable from '../Area/MaterialTable/index';
import CityTable from '../City/DataTable/index';
import ContryTable from '../Country/DataTable/index';
import StateTable from '../State/DataTable/index';
// import ExamplePageOne from '../Example/index';
// import ExamplePageTwo from '../ExampleTwo/index';

const CheckInMan = () => (
  <Switch>
    <Route path="/checkIn/guest/add" component={BasicForm} />
    <Route path="/checkIn/guest/list" component={MyTable} />
    <Route path="/checkIn/blacklist/request" component={BlacklistReqForm} />
  </Switch>
);

const Manager = () => (
  <Switch>
    <Route path="/manager/guest/list" component={ManagerTable} />
    <Route path="/manager/blacklist/list" component={ManMaterialTable} />
  </Switch>
);

const Owner = () => (
  <Switch>
    <Route path="/owner/guest/list" component={OwnerTable} />
  </Switch>
);

const State = () => (
  <Switch>
    <Route path="/state/guest/list" component={StateTable} />
  </Switch>
);

const City = () => (
  <Switch>
    <Route path="/city/guest/list" component={CityTable} />
  </Switch>
);

const Country = () => (
  <Switch>
    <Route path="/country/guest/list" component={ContryTable} />
  </Switch>
);

const Area = () => (
  <Switch>
    <Route path="/area/guest/all" component={MaterialTable} />
    <Route path="/area/guest/notvarified" component={AreaTable} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/checkIn" component={CheckInMan} />
      <Route path="/manager" component={Manager} />
      <Route path="/owner" component={Owner} />
      <Route path="/area" component={Area} />
      <Route path="/city" component={City} />
      <Route path="/state" component={State} />
      <Route path="/country" component={Country} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/log_in" component={LogIn} />
        <Route exact path="/sign_up" component={Register} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
