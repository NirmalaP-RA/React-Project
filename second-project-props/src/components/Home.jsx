import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Home() {

 const[headerHeading,setHeaderHeading]=useState('This is Header Heading');
 const[headerContent,setHeaderContent]=useState('This is Header content');

 const[footerHeading,setFooterHeading]=useState('This is Footer Heading');
 const[footerContent,setFooterContent]=useState('This is Footer content');


  return (

    <>
        {/* in home component we called header and footer */}

        <Header heading={headerHeading} content={headerContent}>

        {/* profit of using closed tag is you can also pass some dummy content inside it */}
        {/* to send value  through props write this code */}
        {/* here heading,content is custom attribute these are called as props which work to send value of props */}

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti iusto quam expedita, doloremque molestiae inventore
        suscipit libero id atque sit incidunt quod consequatur ea totam illo numquam aut soluta reiciendis.

        </Header>
       
        <div>
            <h1> Home Page</h1> 
        </div>

        <footer heading={footerHeading} content={footerContent}>

             Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facere, dolore repudiandae tempora soluta 
             voluptatem dolorem esse repellendus explicabo cum, facilis sunt exercitationem beatae, iusto ducimus fugiat consectetur animi maiores.
              {/* profit of using closed tag is you can also pass some dummy content inside it  like above*/}
        </footer>
        
        
    </>
    
  )
}
