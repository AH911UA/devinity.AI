import React from "react";
import BackgroundImage from "gatsby-background-image";
import {graphql, useStaticQuery} from "gatsby";

const   StarsBackground = (
  {
    children
  }
) => {
  const data = useStaticQuery(
    graphql`
        query {
            backgroundStars: file(relativePath: { eq: "background_stars.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `
  )

  return (
    <BackgroundImage
      fluid={data?.backgroundStars?.childImageSharp?.fluid}
      style={styleBackgroundStars}
    >
      {children}
    </BackgroundImage>
  )
}

export default StarsBackground;

const styleBackgroundStars = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundSize: 'auto',
  backgroundRepeat: 'repeat-y'
}
