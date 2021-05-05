import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Lottie from './animation/animation';

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div className="flex-cont">
          <div className="primary-content" dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}} />
          <Lottie />
        </div>
      </div>
    )}
  />
)

// buttom to contact me
//<Link to='/contact' className="button -primary">Get in touch &rarr;</Link>