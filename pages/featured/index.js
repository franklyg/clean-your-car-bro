import Layout from '../../components/layout'
import Container from '../../components/container'
import Head from 'next/head'
import Link from 'next/link'
import CoverImage from '../../components/cover-image'
import {RichText} from 'prismic-reactjs';

import { linkResolver } from '../../prismic-config';
import { productPageQuery } from '../../lib/api';

import ProductPage from '../../components/product-page'

export default function Index({allPosts}){
  const morePosts = allPosts.slice(0)
  console.log(morePosts)

  return(
    <div>
      <>
        <Layout>
          <Container>
            <h1 className="main-headline text-6xl font-bold mb-8 pt-10 mb-8">gears.</h1>
            {morePosts.length > 0 && <ProductPage posts={morePosts} uidName="cranksets"/>}
          </Container>
        </Layout>
      </>
    </div>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await productPageQuery(previewData)
  return {
    props: { preview, allPosts },
  }
}
