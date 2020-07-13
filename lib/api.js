import Prismic from 'prismic-javascript'

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`
// export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'
export const API_TOKEN = process.env.PRISMIC_API_TOKEN
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE

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

// Interior Cleaning PAGE
export async function interiorCleaningPageQuery(previewData) {
  const data = await fetchAPI(
    `
    query {
      allInterior_cleaning_pages{
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
              ... on Interior_cleaning_pageBodyProduct_card{
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
              ... on Interior_cleaning_pageBodyProduct_page_specific_link{
                fields{
                  product_page_title
                  product_page_link
                  product_image
                }
              }
              ... on Interior_cleaning_pageBodyPage_online_advert{
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
  return data.allInterior_cleaning_pages.edges
}

// Exterior Cleaning PAGE
export async function exteriorCleaningPageQuery(previewData) {
  const data = await fetchAPI(
    `
    query {
      allExterior_cleaning_pages{
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
              ... on Exterior_cleaning_pageBodyProduct_card{
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
              ... on Exterior_cleaning_pageBodyProduct_page_specific_link{
                fields{
                  product_page_title
                  product_page_link
                  product_image
                }
              }
              ... on Exterior_cleaning_pageBodyPage_online_advert{
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
  return data.allExterior_cleaning_pages.edges
}

// Cleaning Accessories PAGE
export async function cleaningAccessoriesPageQuery(previewData) {
  const data = await fetchAPI(
    `
    query {
  allCleaning_accessories_pages{
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
              ... on Cleaning_accessories_pageBodyProduct_card{
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
              ... on Cleaning_accessories_pageBodyProduct_page_specific_link{
                fields{
                  product_page_title
                  product_page_link
                  product_image
                }
              }
              ... on Cleaning_accessories_pageBodyPage_online_advert{
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
  return data.allCleaning_accessories_pages.edges
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
