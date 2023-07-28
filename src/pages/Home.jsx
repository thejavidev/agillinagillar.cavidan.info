import React from 'react'
import { Card, CardHeader, CardBody, Box, Text } from '@chakra-ui/react'
import { Container, Row, Col } from 'react-bootstrap';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsFillPlayFill } from 'react-icons/bs';
import Banner from './HomeCards/Banner';
import HomeProjects from './HomeCards/HomeProjects';
import HomeStartegy from './HomeCards/HomeStartegy';


const Home = ({ banner, projectName, projects, strategy, partners, team, newsName, news }) => {


  return (
    <>
      <p id='consigliere'></p>
      <Banner homebanner={{banner}} />
      <HomeProjects projectName={projectName} projects={projects} />
      <HomeStartegy strategy={strategy} />
     
    </>
  )
}

export default Home
