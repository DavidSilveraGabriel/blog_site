import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Lottie from './animation/animation';
import Typical from 'react-typical';

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
        <div className="headline">
           {data.site.siteMetadata.home.title}
        </div>
        <div className="flex-cont">
          <div className="primary-content">
          <Typical 
            steps={[data.site.siteMetadata.home.description]}
            loop={1}
            wrapper="div"
          />
          </div>
          <Lottie />
        </div>
      </div>
    )}
  />
)

// buttom to contact me
//<Link to='/contact' className="button -primary">Get in touch &rarr;</Link>  { data.site.siteMetadata.home.title }