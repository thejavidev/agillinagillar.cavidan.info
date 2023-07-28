import React from 'react';
import { Card, CardHeader, CardBody, Box, Text } from '@chakra-ui/react'
import { Container, Row, Col } from 'react-bootstrap';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsFillPlayFill } from 'react-icons/bs';

const   Banner = ({homebanner}) => {
    const banner1 =homebanner?.banner;
  return (
    <>
      <Card className='mt-[100px] shadow-none border-none outline-none sticky top-0'>
        <CardBody className='p-0 m-0 shadow-none border-none outline-none'>
          <Row>
            <Col lg={5}>
              <Box className='flex justify-center mt-[100px] pl-[150px] flex-col'>
                <Text className='font-[700] text-[27px] w-[80%] text-[#DC248E] mb-[50px]'
                  dangerouslySetInnerHTML={{ __html: banner1 && banner1?.b_b_az }}></Text>
                <div className='flex items-center'>
                  <BsFillPlayFill className='text-[#DC248E] mr-[10px] text-[25px]' /> 
                  <Text className='font-[600] text-[18px] underline text-[#001A54] cursor-pointer'>{banner1?.b_btn_az}</Text>
                </div>
              </Box>
            </Col>
            <Col lg={7} className='shadow-none border-none outline-none'>
              <LazyLoadImage src={banner1?.b_src} className='w-full h-[600px]' />
            </Col>
          </Row>
        </CardBody>

      </Card>
    </>
  )
}

export default Banner
