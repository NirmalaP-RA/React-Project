import React, { useState } from 'react'

export default function FaqQuestion({faqs,index, currentIndex ,setCurrentIndex}) {
    // now i have to add class faq_display to display and hide answer so

        const faqValue =(i) => {
           setCurrentIndex(i)
        }
        return (
                    <>
                        <div className="faq">
                                    <div className="faq_question" onClick={() => faqValue(index)}>
                                       {faqs.question}
                                                       {/* here we featching question using faqs props */}
                                        <span>
                                        {
                                            (currentIndex == index) ? '-': '+'
                                        }
                                        </span>
                                    </div>

                                    <div className={ `${ (currentIndex==index) ? 'faq_answer' :  ' faq_answer faq_display' }`}>

                                        {faqs.answer}
                                    </div>   
                        </div>
                    </>
            )
}
