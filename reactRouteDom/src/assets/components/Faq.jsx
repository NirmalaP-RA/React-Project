import React, { useState } from 'react'
import '../CSS/faqstyle.css';
import FaqQuestion from './FaqQuestion.jsx'
import data from '../data/FaqData.js';
import Header from './commonComponent/Header.jsx';
import Footer from './commonComponent/Footer.jsx';

export default function Faq1() {
        const [FaqData,setFaqData]=useState(data);
        // data saved in this state whatever data having in FaqData.jsx file
        const [currentIndex ,setCurrentIndex]=useState(0);
  return (
    <>
    {/* <Header/> */}
    <div className="outer_faqs">
            <h1> Frequently Asked Questions (FAQs)</h1>

            {
                FaqData.map((v,i)=>{
                    return(
                      <FaqQuestion key={i} faqs={v} index={i} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} /> 
                    //    here key is playing role of props to ake dynamic and in this passing value of index to fetch loop data called multiple times but we alo need to dynamic it value also so we also add custom attribute of any namelikes faqs,index for passing separate value of index and lets destructure in faqquestion.jsx file by passing props
                    )
                })
            }
    </div>
      {/* <Footer/> */}
    </>
  )
}
