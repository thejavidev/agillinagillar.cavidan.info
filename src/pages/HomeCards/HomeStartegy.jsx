import { Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import lax from 'lax.js'


const HomeStartegy = ({ strategy }) => {

 

    window.onload = function () {
        lax.init()
    
        // Add a driver that we use to control our animations
        lax.addDriver('scrollY', function () {
          return window.scrollY
        })
    
        
        
      }


    return (
        <>
            <div className="bg-[#f6f6f6] stategy sticky top-0" >
                <Container fluid className=''>
                    <Row>
                        <Col lg={12}>
                            <Row className='items-center '>
                                <Col lg={8} className="flex bg-[#f6f6f6] ">
                                    <Text data-lax-preset='leftToRight-.1' className='text-[#3EDDAC] text-[11vw] tracking-[1.2vw]  font-[600] lowercase '>
                                        {strategy?.st_text_1_az}
                                    </Text>
                                </Col>
                                <Col lg={4} className="flex bg-[#f6f6f6]">
                                    <Text className='w-[50%]'>
                                        {strategy?.st_text_1l_az}
                                    </Text>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={12}>
                            <Row className='items-center justify-end selector'>
                                
                                <Col lg={4} className="flex bg-[#f6f6f6]  justify-end">
                                    <Text className='w-[50%]'>
                                        {strategy?.st_text_2l_az}
                                    </Text>
                                </Col>
                                <Col lg={6} className="flex bg-[#f6f6f6]  justify-end">
                                    <Text  className='text-[#F29942] text-[11vw] tracking-[1.2vw]  lowercase font-[600]'>
                                        {strategy?.st_text_2_az}
                                    </Text>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={12}>
                        <Row className='items-center'>
                                <Col lg={5} className="flex bg-[#f6f6f6]">
                                    <Text className='text-[#DC248E] text-[11vw] tracking-[1.2vw]  font-[600] lowercase '>
                                        {strategy?.st_text_3_az}
                                    </Text>
                                </Col>
                                <Col lg={4} className="flex bg-[#f6f6f6]">
                                    <Text className='w-[50%]'>
                                        {strategy?.st_text_3l_az}
                                    </Text>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default HomeStartegy
