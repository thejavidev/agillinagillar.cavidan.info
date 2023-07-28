import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Card, CardHeader, CardBody, Box, Text } from '@chakra-ui/react'
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const HomeProjects = ({ projectName, projects }) => {


    return (
        <div className='sticky top-0'>
            <div className='shadow-none bg-[#f6f6f6] sticky top-[0] w-full pt-[30px] pb-[30px] pl-[100px] pr-[100px]'>
                <div className='p-0 m-0 '>
                    <Container fluid >
                        <Row>
                            <Col lg={2}>
                                <div className='flex flex-col' >
                                    <Text className='font-[500] text-[26px] text-[#626262] capitalize'>yeni</Text>
                                    <Text className='font-[500] text-[26px] text-[#626262] capitalize'>{projectName?.p_alt_az}</Text>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <Row className='p-0 m-0'>
                                    {
                                        projects?.[1]?.products && projects?.[1]?.products?.slice(0, 1)?.map((item, index) => (
                                            <Col key={index} lg={6} className='relative before m-0 p-0'>
                                                <LazyLoadImage className='w-full' src={item?.cover} />
                                            </Col>
                                        ))
                                    }
                                    {
                                        projects?.[2]?.products && projects?.[2]?.products?.slice(0, 1)?.map((item, index) => (
                                            <Col key={index} lg={6} className='relative before m-0 p-0'>
                                                <LazyLoadImage className='w-full' src={item?.cover} />
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Col>
                            <Col lg={2}>
                                <Link to={``}>
                                    <div className="flex justify-center h-full items-end ">
                                        <div className="flex flex-col">
                                            <Text className=' font-[500] text-[20px] uppercase text-[#626262]'>Digər</Text>
                                            <Text className='font-[500] text-[20px] uppercase text-[#626262]'>Layihələr</Text>
                                        </div>
                                        <Text></Text>
                                        <BsArrowRight className='ml-[20px] text-[30px] text-[#626262]' />
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        </div>
    )
}

export default HomeProjects
