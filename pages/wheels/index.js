import Layout from '../../components/layout'
import Container from '../../components/container'
import Head from 'next/head'
import Link from 'next/link'
import CoverImage from '../../components/cover-image'
import {RichText} from 'prismic-reactjs';

import { linkResolver } from '../../prismic-config';
import { productWheelPageQuery } from '../../lib/api';

import ProductPage from '../../components/product-page'

export default function Index({allPosts}){
  const morePosts = allPosts.slice(0)
  console.log(morePosts)

  return(
    <div>
      <>
        <Layout>
          <Container>
            <h1 className="main-headline text-6xl font-bold mb-8 pt-10 mb-8">wheels.</h1>
            <div className="specific-pages mb-4 lg:mb-8 grid flex grid-cols-1 md:grid-cols-2 lg:grid-cols-4 row-gap-4 md:col-gap-4 text-poppins">
              <Link href="/wheels/tires">
                <a className="filter-link shadow-small p-3 text-1xl grid flex grid-cols-8 items-center">
                  <span className="col-span-7">Tires</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arrow w-4 h-4 col-span-1" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                </a>
              </Link>
              <Link href="/wheels/rims">
                <a className="filter-link shadow-small p-3 text-1xl grid flex grid-cols-8 items-center">
                  <span className="col-span-7">Rims</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arrow w-4 h-4 col-span-1" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                </a>
              </Link>
              <Link href="/wheels/brake-pads">
                <a className="filter-link shadow-small p-3 text-1xl grid flex grid-cols-8 items-center">
                  <span className="col-span-7">Brake Pads</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arrow w-4 h-4 col-span-1" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                </a>
              </Link>
              <Link href="/wheels/tubes">
                <a className="filter-link shadow-small p-3 text-1xl grid flex grid-cols-8 items-center">
                  <span className="col-span-7">Tubes</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arrow w-4 h-4 col-span-1" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                </a>
              </Link>
              <Link href="/wheels/hubs">
                <a className="filter-link shadow-small p-3 text-1xl grid flex grid-cols-8 items-center">
                  <span className="col-span-7">Hubs</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arrow w-4 h-4 col-span-1" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                </a>
              </Link>
              <Link href="/wheels/spokes">
                <a className="filter-link shadow-small p-3 text-1xl grid flex grid-cols-8 items-center">
                  <span className="col-span-7">Spokes</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="arrow w-4 h-4 col-span-1" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                </a>
              </Link>
            </div>
            {
              morePosts.length > 0 && <ProductPage posts={morePosts} uidName="wheels" apiName="Wheels" />
            }
          </Container>
        </Layout>
      </>
    </div>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await productWheelPageQuery(previewData)
  return {
    props: { preview, allPosts },
  }
}
