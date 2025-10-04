import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateForm from './containers/applicationForm/form';
import UserList from './containers/userList/list';
// import UserList from './containers/userList/observableList';
// import UserList from './containers/userList/observableList';
import Home from './containers/home/HomeComponent';
import Header from './components/header/HeaderComponent';
import Layout from './components/layout/Layout';
import NotFoundComponent from './containers/notFound/NotFound';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CounterApp from './containers/counter/counterApp';
const Dashboard = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./containers/dashboard/Dashboard'));
    }, 3000)
  })

});

const Settings = React.lazy(() => import('./containers/dashboard/settings'));
const Profile = React.lazy(() => import('./containers/dashboard/profile'))



function App() {
  return (
      <div>
        <Suspense fallback={<FallBackComponent />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />} >
                <Route path="list" element={<UserList />} />
                <Route path="create" element={<CreateForm />} />
                <Route path="counter" element={<CounterApp />} />
                <Route path="dashboard" element={<Dashboard />} >
                  <Route path="settings" element={<Settings />} />
                  <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="*" element={<NotFoundComponent />} />
              </Route>


            </Routes>
          </BrowserRouter>

        </Suspense>

      </div>

  );
}

export default App;

const FallBackComponent = () => {
  return (
    <div>
      Waiting ...
    </div>
  )
}
