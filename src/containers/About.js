import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


const About = () =>{

        return (

            <div>
                <Header/>
                <div className="container col-md-5">
                <h3>สวัสดีครับ</h3>
                <p className="title text-justify mt-4 mb-4">
                    เน้นฮาไม่เน้นขาย
                </p>
                <h4 className="title text-justify text-success">จาก เฮลตี้ คาเฟ่</h4>
                </div>  
                
                <Footer company="HP" email="night@hp.com" />
            </div>

        )


}
export default About
