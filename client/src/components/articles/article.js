import React from "react"
import './article.css'

const Article = ({id, link, title, description, read_date, rate}) => {
    return(
        <React.Fragment key={id}>
            <div className="articles__repo">
                <a className='articles__repo-link' href={link} target="blank">
                    <strong>{title}</strong>
                </a>
                <div>{description}</div>
                <div className="articles__repo-date">
                    Updated: {new Date(read_date).toUTCString()}
                </div>
                <div className="repositories__repo-star">
                    ★ {rate || ''}
                </div>                
            </div>
            <hr />
        </React.Fragment>        
    )
}

export default Article