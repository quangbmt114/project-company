import { Route, Routes } from 'react-router-dom';
import './App.css';
import {publicRouters} from "./routers/index"
import DefaultLayout from './Component/Layout/DefaultLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRouters.map((item,index)=>{
          const Page = item.component
          const Layout = DefaultLayout
          return(<Route key={index} path={item.path} 
            element={
            <Layout>
                <Page/>
            </Layout>}/>)
        })}
      </Routes>
    </div>
  );
}

export default App;
