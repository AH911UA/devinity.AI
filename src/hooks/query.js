import { graphql, useStaticQuery } from "gatsby";

export const useHomeData = () => {
  const { dataJson } = useStaticQuery(
    graphql`
      query {
        dataJson {
          home {
            howWeWork {
              id
              title
              description
              image
            }
            brands
            technologies {
              id
              title
              description
              image
              link
              url
            }
            reviews {
              id
              title
              description
            }
            process {
              id
              title
              description
              image
            }
          }

          portfolio {
            id
            type
            title
            title_seo
            description_short
            description
            link
            status
            time
            members
            country {
              name
              code
            }
            picture
            picture2
            images {
              id
              url
              alt
            }
            libraries {
              id
              url
              alt
            }
            videos {
              id
              url
              alt
            }
          }

          teams {
            id
            name
            position
            description
            image
            linkedin
          }

          aboutUs {
            description
            list
          }

          aboutUsDescriptions {
            id
            label
            description
            list
          }

          testimonials {
            id
            name
            time
            image
            video
          }

          faq {
            question
            answer
            open
          }

          calculator {
            design {
              name
              services {
                id
                name
                time
              }
            }

            blockchain {
              types {
                name
                services {
                  id
                  name
                  time
                  child {
                    name
                    services {
                      id
                      name
                      time
                    }
                  }
                }
              }
              steps {
                stepId
                name
                services {
                  id
                  name
                  time
                  hide
                  only
                }
              }
            }

            classic {
              types {
                name
                services {
                  id
                  name
                  time
                  child {
                    name
                    services {
                      id
                      name
                      time
                    }
                  }
                }
              }
              steps {
                stepId
                name
                services {
                  id
                  name
                  time
                  hide
                  only
                }
              }
            }
          }

          article {
            id
            title
            title_seo
            description_short
            description
            images {
              id
              url
              alt
            }
          }

          blogItem {
            id
            imgTop
            title
            subTitle
            content {
              type,
              data,
              width
            }
            tags {
              data, link
            }
            title_seo
          }
        }
      }
    `
  );
  return dataJson;
};
