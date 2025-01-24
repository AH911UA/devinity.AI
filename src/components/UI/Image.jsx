import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({filename, alt = '', style, styleImg, size = 500, className}) => (
  <StaticQuery
    variables={{ size }}
    query={graphql`
      query image($size: Int) {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: $size, sizes: "(max-width: 600px) 100vw, 800px", quality: 70) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename);
      });
      if (!image) {
        return null;
      }

      return <Img
        className={className}
        alt={alt}
        fluid={image.node.childImageSharp.fluid}
        loading="lazy"
        imgStyle={{objectFit: 'contain', objectPosition: 'left', ...(styleImg ? styleImg : style)}}
        style={{objectFit: 'contain', objectPosition: 'left', ...style}}
      />;
    }}
  />
);

export default Image;
