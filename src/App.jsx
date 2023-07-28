import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layout/Layout';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectsSingle from './pages/ProjectsSingle';
import News from './pages/News';
import NewsSingle from './pages/NewsSingle';
import Contact from './pages/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from './store/api/apiSlice';
import $ from 'jquery';
import Loader from './loader/Loader';

function App() {

  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.users)
  useEffect(() => {
    dispatch(getUsers())
    function pageLoader(){
      setTimeout(() => {
        $('.pageloader').addClass('top-00')
      }, 2000);
    }
   pageLoader()
  }, [dispatch])

 
  return (
    <>
    <Loader />
      <Layout footer={data?.options?.footer}>
          <Routes >
              <Route path='/' exact 
                element={<Home
                banner={data?.options?.banner}
                projectName={data?.options?.projects} 
                projects={data?.projects}
                strategy={data?.options?.strategy}
                partners={data?.partners}
                team={data?.team}
                newsName={data?.options?.news}
                news={data?.news}
              />} ></Route>
              <Route path='/about' exact element={<About 
                about={data?.options?.about}  
                strategy={data?.options?.strategy} 
                partners={data?.partners} team={data?.team}
                newsName={data?.options?.news}
                news={data?.news}
                />} ></Route>
              <Route path='/projects' exact element={<Projects projects={data?.projects}  projectName={data?.options?.projects} />} ></Route>
              <Route path='/projects/:slug_az' exact element={<ProjectsSingle   projects={data?.projects} />} ></Route>
              <Route path='/news' exact element={<News news={data?.news}  newsName={data?.options?.news} />} ></Route>
              <Route path='/news/:slug_az' exact element={<NewsSingle news={data?.news}  />} ></Route>
              <Route path='/contact' exact element={<Contact  />} ></Route>
          </Routes>
      </Layout>
    </>
  )
}

export default App
