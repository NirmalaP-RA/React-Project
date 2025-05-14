import React from 'react'

export default function Footer({heading,content,children}) {

    // with destructure, use this approch mostly by developers
      return (
                <div>
                    <h2>{heading}</h2>
                    {/* by passing key values getting no need to write variable name many times */}

                    <p>{content}</p>

                    <p>{children}</p>
                </div>
             )
}
