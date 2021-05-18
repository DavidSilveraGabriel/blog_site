import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <a aria-current="page" href="https://devidblog.netlify.app/"><img src="../icons/icon-48x48.png" alt="logo"/></a>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} DevId blog &bull; Created thanks to <a href="https://w3layouts.com">W3Layouts</a> with <span role="img" aria-label="love">❤️</span> David <span role="img" aria-label="smile">😊</span></p>
      </footer>
    </div>
  )
}


/*
##############################
Code for review
#############################

<div className="site-title">
  <Link to="/">{data.site.siteMetadata.title}</Link>
</div>


*/