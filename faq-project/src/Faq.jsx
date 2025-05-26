import React, { useState } from 'react'
import './assets/CSS/style.css'

export default function Faq() {

    // const[FaqHeading,setFaqHeading]=useState('');

    const[FaqQuestion,setFaqQuestion]=useState('');
    const[FaqAnswer,setFaqAnswer]=useState('');

  
  return (
    <>
     <div className="outer_faqs">
            <h1> Frequently Asked Questions (FAQs)</h1>
            <div className="faq">
                <div className="faq_question">
                    What is Full Stack Web Development?
                    <span>
                       -
                    </span>
                </div>
                <div className="faq_answer">
                    Full Stack Development involves working on both the front-end (user interface) and back-end (server-side) aspects of websites or web applications, covering a broad spectrum of skills to create fully functional and dynamic websites.
                </div>   
            </div>
            <div className="faq">
                <div className="faq_question">
                    Why is Full Stack Development Important?
                    <span>+</span>
                </div>
                <div className="faq_answer fa-angle-up">
                    Full Stack Developers have a comprehensive understanding of the entire development process. This versatility allows them to contribute to various stages of a project, leading to efficient collaboration and quicker problem-solving.
                   
                </div>
            </div>
            <div className="faq">
                <div className="faq_question">
                    How Does Full Stack Development Differ from Specialized Roles?
                    <span>+</span>
                </div>
                <div className="faq_answer faq_display">
                    Unlike specialized roles that focus on either front-end or back-end, Full Stack Developers are proficient in both areas. This enables them to seamlessly integrate and optimize all components of a website.
                </div>
            </div>
            <div className="faq">
                <div className="faq_question">
                    How Does Full Stack Development Benefit Businesses?
                    <span>+</span>
                </div>
                <div className="faq_answer faq_display">
                    Full Stack Developers streamline development processes, reduce dependency on multiple specialists, and enhance the overall efficiency of a project. This results in cost-effective solutions and quicker time-to-market for businesses.
                </div>
            </div>
            <div className="faq">
                <div className="faq_question">
                    Can I Pursue Full Stack Development course in Jodhpur if I am a Beginner?
                    <span>+</span>
                </div>
                <div className="faq_answer faq_display">
                    Absolutely! Full Stack Development courses are designed for beginners and experienced developers alike. The comprehensive curriculum covers foundational concepts and progressively advances to more complex topics.
                </div>
            </div>
        </div>
      
    </>

  )
}
