import React from "react";
import jsonFetch from "simple-json-fetch";
import styled from 'styled-components'
import siteConfig from '../../../data/siteConfig'
import { graphql, useStaticQuery } from 'gatsby'
import Article from './article'

const query = graphql`
    {
    allStrapiArticle(sort: {fields: read_date}) {
        nodes {
            id
            description
            link
            tag
            title
            rate
            read_date
            strapiId
        }
    }
}
`

const Articles = () => {
    const { allStrapiArticle: {nodes: articles} } = useStaticQuery(query);
    return (
        <div>
            <h2>Latest articles read</h2>
            {articles && (
                <React.Fragment>
                    <div className="articles__content">
                        {articles.map(art => (
                            <Article key={art.id} {...art}/>
                         ))}
                    </div>
                </React.Fragment>
            )}
        </div> 
    )   
}

export default styled(Articles)`
  position: relative;
  .articles__content {
    margin-bottom: 40px;
  }
`

