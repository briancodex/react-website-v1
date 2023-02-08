import React from 'react';
import './AdminPage.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Dashboard from './Dashboard.jsx';
import Analytics from './Analytics.jsx';
import ChatApp from './ChatApp.jsx';
import Calendar from './Calendar.jsx';
import ProductCRUD from './ProductCRUD.jsx';


const AdminPage = () => {
  return (
    <Router>
      <Sidebar>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/chatapp" component={ChatApp} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/productCRUD" component={ProductCRUD} />
        </Switch>
      </Sidebar>
    </Router>
  );
};

export default AdminPage;
