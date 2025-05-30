import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
export default function FaqQuestion({index,data}) {
    
  return (
    <>
       <Accordion.Item eventKey={index}>
                            <Accordion.Header>{data.question}</Accordion.Header>
                            {/* by using key name from FaqData.js file dynamically featching value of question simillar do in answer */}
                                <Accordion.Body>
                                {data.answer}
                                </Accordion.Body>
        </Accordion.Item>
        {/* called it into loop into Home.jsx component */}
    </>
  )
}
