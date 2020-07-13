import Layout from '../../components/layout'
import Container from '../../components/container'
import Head from 'next/head'
import Link from 'next/link'
import CoverImage from '../../components/cover-image'
import {RichText} from 'prismic-reactjs';

import { linkResolver } from '../../prismic-config';
import { productAccessoriesPageQuery } from '../../lib/api';

import ProductPage from '../../components/product-page'

export default function Index({allPosts}){
  const morePosts = allPosts.slice(0)

  return(
    <div>
      <>
        <Layout>
          <Container>
            <h1 className="main-headline text-6xl font-bold mb-8 pt-10 mb-8">accessories.</h1>
            <div className="specific-pages mb-4 lg:mb-8 grid flex grid-cols-1 md:grid-cols-2 lg:grid-cols-4 row-gap-4 md:col-gap-4 text-poppins">
              <Link href="/accessories/locks">
                <a className="filter-link shadow-small p-3 text-1xl grid flex grid-cols-8 items-center">
                  <span className="col-span-7">Locks</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arrow w-4 h-4 col-span-1" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                </a>
              </Link>
              <Link href="/accessories/bells">
                <a className="filter-link shadow-small p-3 text-1xl grid flex grid-cols-8 items-center">
                  <span className="col-span-7">Bells</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arrow w-4 h-4 col-span-1" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                </a>
              </Link>
              <Link href="/accessories/lights">
                <a className="filter-link shadow-small p-3 text-1xl grid flex grid-cols-8 items-center">
                  <span className="col-span-7">Lights</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arrow w-4 h-4 col-span-1" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                </a>
              </Link>
              {/*<Link href="/accessories/tire-caps">
                <a className="filter-link shadow-small p-3 text-1xl grid flex grid-cols-8 items-center">
                  <span className="col-span-7">Tire Caps</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arrow w-4 h-4 col-span-1" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                </a>
              </Link>*/}
              {/*<Link href="/accessories/bearings">
                <a className="filter-link shadow-small p-3 text-1xl grid flex grid-cols-8 items-center">
                  <span className="col-span-7">Bearings</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arrow w-4 h-4 col-span-1" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                </a>
              </Link>*/}
            </div>
            {
              morePosts.length > 0 && <ProductPage posts={morePosts} uidName="exterior-cleaning" apiName="Exterior_cleaning" />
            }
          </Container>
        </Layout>
      </>
    </div>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await productAccessoriesPageQuery(previewData)
  return {
    props: { preview, allPosts },
  }
}