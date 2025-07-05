import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CreateForm from './containers/applicationForm/form';
import UserList from './containers/userList/list';
import Home from './containers/home/HomeComponent';
import Header from './components/header/HeaderComponent';
import Layout from './components/layout/Layout';
import NotFoundComponent from './containers/notFound/NotFound';
import Dashboard from './containers/dashboard/Dashboard';
import Settings from './containers/dashboard/settings';
import Profile from './containers/dashboard/profile';

function App() {
  return (
    <div>

      


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route path="list" element={<UserList />}/>
          <Route path="create" element = {<CreateForm />} />
          <Route path="dashboard" element ={<Dashboard />} >
            <Route path="settings"  element = {<Settings />}/>
            <Route path= "profile" element = {<Profile />}/>
          </Route>
          </Route>
          

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
