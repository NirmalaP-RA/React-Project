import React, { useState } from 'react'
import FaqQuestion from './FaqQuestion'
import data from '../data/FaqData.js';

export default function Faq1() {
        const [FaqData,setFaqData]=useState(data);
        // data saved in this state whatever data having in FaqData.jsx file
        const [currentIndex ,setCurrentIndex]=useState(0);
  return (
    <>
    <div className="outer_faqs">
            <h1> Frequently Asked Questions (FAQs)</h1>

            {/* here i want to featch data dynamically by running loop from FaqQuestion.jsx */}
            {/* syntax: */}
            {/* {
               variablename.map((value,index)=>{}) and use callback function inside it map return value
            } */}

            {/* {
                FaqData.map((v,i)=>{
                //  return(
                //     // here put value for which you want to apply loop to repeate as many question you have in FaqData.jsx file
                //     <div className="faq">
                //             <div className="faq_question">
                //                 What is Full Stack Web Development?
                //                 <span>
                //                 -
                //                 </span>
                //             </div>
                //             <div className="faq_answer">
                //                 Full Stack Development involves working on both the front-end (user interface) and back-end (server-side) aspects of websites or web applications, covering a broad spectrum of skills to create fully functional and dynamic websites.
                //             </div>   
                //     </div>
                //  )
                //  now i have to make changes dynamically so do as below
                // watch out your key name mention in Faqdata file to target value 
                return(
                    <div className="faq">
                             <div className="faq_question">
                               {v.question}
                               {/* dynamic featch done through targeting value by key */}
                                 {/* <span>
                                -
                                </span>
                             </div>
                            <div className="faq_answer">
                               {v.answer}
                            </div>   
                    </div>
                )
                })
            }  */}
            {/* now i want to put logic to open and close question and answer 2nd way is call component into loop*/}
    {/* <FaqQuestion>

    </FaqQuestion>
    <FaqQuestion>

    </FaqQuestion>
    <FaqQuestion>

    </FaqQuestion>
    <FaqQuestion>

    </FaqQuestion>
    <FaqQuestion>

    </FaqQuestion>  */}
    {/* if you want static value than called this component as many time as you want to show your value  */}
    {/* suppose i want 5question and answer than i called </FaqQuestion> component five times make works easy*/}
    {/* if i want to change value of each question i have to make it dynamic */}
    {
        FaqData.map((v,i)=>{
            return(
               <FaqQuestion key={i} faqs={v} index={i} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} /> 
            //    here key is playing role of props to ake dynamic and in this passing value of index to fetch loop data called multiple times but we alo need to dynamic it value also so we also add custom attribute of any namelikes faqs,index for passing separate value of index and lets destructure in faqquestion.jsx file by passing props
            )
        })
    }
    </div>
      
    </>
  )
}
