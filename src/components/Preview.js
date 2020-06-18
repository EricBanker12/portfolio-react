import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'

function Preview ({project}) {
    
    // const data = useStaticQuery(graphql`
    //     file(relativePath: { eq: })
    // `)

    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            {/* <GatsbyImage /> */}
            <h4>{project.title}</h4>
            <p>{`${project.paragraphs[0].slice(0,80)}...`}</p>
        </div>
    )
}

export default Preview