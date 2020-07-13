import Prismic from 'prismic-javascript'

const REPOSITORY = process.env.NEXT_EXAMPLE_CMS_PRISMIC_REPOSITORY_NAME
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`
// export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'
export const API_TOKEN = process.env.NEXT_EXAMPLE_CMS_PRISMIC_API_TOKEN
export const API_LOCALE = process.env.NEXT_EXAMPLE_CMS_PRISMIC_REPOSITORY_LOCALE

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
})

async function fetchAPI(query, { previewData, variables } = {}) {
  const prismicAPI = await PrismicClient.getApi()
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': previewData?.ref || prismicAPI.masterRef.ref,
        'Content-Type': 'application/json',
        'Accept-Language': API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  )
  if (res.status !== 200) {
    console.log(await res.text())
    throw new Error('Failed to fetch API')
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      allPosts {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `)
  return data?.allPosts?.edges
}

export async function getAllPostsForHome(previewData) {
  const data = await fetchAPI(
    `
    query {
      allPosts(sortBy: date_DESC) {
        edges {
          node {
            date
            title
            content
            coverimage
            excerpt
            author {
              ...on Author {
                name
                picture
              }
            }
            _meta {
              uid
            }
          }
        }
      }
    }
  `,
    { previewData }
  )

  return data.allPosts.edges
}

export async function getAllPostsForProducts(previewData) {
  const data = await fetchAPI(
    `
    query {
      allPost_products(sortBy: product_date_DESC){
         edges {
           node {
             product_date
             product_title
             product_image
             _meta{
               tags
               uid
             }
             product_price
             product_link {
               __typename
              ... on _ExternalLink{
                url
              }
            }
           }
         }
     	 }
     }
  `,
    { previewData }
  )

  return data.allPost_products.edges
}

// INDEX PAGE
export async function indexPageQuery(previewData) {
  const data = await fetchAPI(
    `
    query {
      allIndex_pages{
        edges{
          node{
            body{
              __typename
              ... on Index_pageBodyProduct_card{
                fields{
                  product_card_date
                  product_card_image
                  product_card_title
                  product_card_price
                  product_card_link {
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
              ... on Index_pageBodyProduct_page_specific_link{
                fields{
                  product_page_title
                  product_page_link
                  product_image
                }
              }
              ... on Index_pageBodyPage_title{
                fields{
                  page_title
                }
              }
              ... on Index_pageBodyOnline_advert{
                fields{
                  advert_image_desktop
                  advert_image_mobile
                  advert_link{
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    `,
    { previewData }
  )
  return data.allIndex_pages.edges
}

// Products Page
export async function productPageQuery(previewData) {
  const data = await fetchAPI(
    `
    query {
      allProduct_pages{
        pageInfo{
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        edges{
          node{
            page_title
            _meta{
              uid
            }
            body{
              __typename
              ... on Product_pageBodyProduct_card{
                fields{
                  product_card_date
                  product_card_image
                  product_card_title
                  product_card_price
                  product_card_link {
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
              ... on Product_pageBodyProduct_page_specific_link{
                fields{
                  product_page_title
                  product_page_link
                  product_image
                }
              }
              ... on Product_pageBodyPage_online_advert{
                fields{
                  page_advert_image
                  page_advert_link{
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
            }
          }
          cursor
        }
      }
    }
    `,

    { previewData }
  )

  return data.allProduct_pages.edges
}

// Cranksets Page
export async function productCranksetPageQuery(previewData) {
  const data = await fetchAPI(
    `
    query {
  allCrankets_pages{
        pageInfo{
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        edges{
          node{
            page_title
            _meta{
              uid
            }
            body{
              __typename
              ... on Crankets_pageBodyProduct_card{
                fields{
                  product_card_date
                  product_card_image
                  product_card_title
                  product_card_price
                  product_card_link {
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
              ... on Crankets_pageBodyProduct_page_specific_link{
                fields{
                  product_page_title
                  product_page_link
                  product_image
                }
              }
              ... on Crankets_pageBodyPage_online_advert{
                fields{
                  page_advert_image_desktop
                  page_advert_image_mobile
                  page_advert_link{
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
            }
          }
          cursor
        }
      }
    }
    `,

    { previewData }
  )

  return data.allCrankets_pages.edges
}

// Wheels Page
export async function productWheelPageQuery(previewData) {
  const data = await fetchAPI(
    `
    query {
  allWheels_pages{
        pageInfo{
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        edges{
          node{
            page_title
            _meta{
              uid
            }
            body{
              __typename
              ... on Wheels_pageBodyProduct_card{
                fields{
                  product_card_date
                  product_card_image
                  product_card_title
                  product_card_price
                  product_card_link {
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
              ... on Wheels_pageBodyProduct_page_specific_link{
                fields{
                  product_page_title
                  product_page_link
                  product_image
                }
              }
              ... on Wheels_pageBodyPage_online_advert{
                fields{
                  page_advert_image_desktop
                  page_advert_image_mobile
                  page_advert_link{
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
            }
          }
          cursor
        }
      }
    }
    `,

    { previewData }
  )

  return data.allWheels_pages.edges
}

// Handlebars Page
export async function productHandlebarPageQuery(previewData) {
  const data = await fetchAPI(
    `
    query {
  allHandlebars_pages{
        pageInfo{
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        edges{
          node{
            page_title
            _meta{
              uid
            }
            body{
              __typename
              ... on Handlebars_pageBodyProduct_card{
                fields{
                  product_card_date
                  product_card_image
                  product_card_title
                  product_card_price
                  product_card_link {
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
              ... on Handlebars_pageBodyProduct_page_specific_link{
                fields{
                  product_page_title
                  product_page_link
                  product_image
                }
              }
              ... on Handlebars_pageBodyPage_online_advert{
                fields{
                  page_advert_image_desktop
                  page_advert_image_mobile
                  page_advert_link{
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
            }
          }
          cursor
        }
      }
    }
    `,

    { previewData }
  )

  return data.allHandlebars_pages.edges
}

// Saddles Page
export async function productSaddlePageQuery(previewData) {
  const data = await fetchAPI(
    `
    query {
  allSaddles_pages{
        pageInfo{
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        edges{
          node{
            page_title
            _meta{
              uid
            }
            body{
              __typename
              ... on Saddles_pageBodyProduct_card{
                fields{
                  product_card_date
                  product_card_image
                  product_card_title
                  product_card_price
                  product_card_link {
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
              ... on Saddles_pageBodyProduct_page_specific_link{
                fields{
                  product_page_title
                  product_page_link
                  product_image
                }
              }
              ... on Saddles_pageBodyPage_online_advert{
                fields{
                  page_advert_image_desktop
                  page_advert_image_mobile
                  page_advert_link{
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
            }
          }
          cursor
        }
      }
    }
    `,

    { previewData }
  )

  return data.allSaddles_pages.edges
}

// Accessories Page
export async function productAccessoriesPageQuery(previewData) {
  const data = await fetchAPI(
    `
    query {
  allAccessories_pages{
        pageInfo{
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        edges{
          node{
            page_title
            _meta{
              uid
            }
            body{
              __typename
              ... on Accessories_pageBodyProduct_card{
                fields{
                  product_card_date
                  product_card_image
                  product_card_title
                  product_card_price
                  product_card_link {
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
              ... on Accessories_pageBodyProduct_page_specific_link{
                fields{
                  product_page_title
                  product_page_link
                  product_image
                }
              }
              ... on Accessories_pageBodyPage_online_advert{
                fields{
                  page_advert_image_desktop
                  page_advert_image_mobile
                  page_advert_link{
                    ... on _ExternalLink{
                      url
                    }
                  }
                }
              }
            }
          }
          cursor
        }
      }
    }
    `,

    { previewData }
  )

  return data.allAccessories_pages.edges
}

export async function getPostAndMorePosts(slug, previewData) {
  const data = await fetchAPI(
    `
  query PostBySlug($slug: String!, $lang: String!) {
    post(uid: $slug, lang: $lang) {
      title
      content
      date
      coverimage
      author {
        ...on Author {
          name
          picture
        }
      }
      _meta {
        uid
      }
    }

   morePosts: allPosts(sortBy: date_DESC, first: 3) {
      edges {
        node {
          title
          content
          date
          coverimage
          excerpt
          author{
            ...on Author {
              name
              picture
            }
          }
          _meta {
            uid
          }
        }
      }
    }
  }
  `,
    {
      previewData,
      variables: {
        slug,
        lang: API_LOCALE,
      },
    }
  )

  data.morePosts = data.morePosts.edges
    .filter(({ node }) => node._meta.uid !== slug)
    .slice(0, 2)

  return data
}
