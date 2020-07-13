import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import Date from '../components/date'
import CoverImage from './cover-image'

export default function ProductCard({
  title,
  coverImage,
  date,
  slug,
  tags,
  price,
  link
}) {
  return (
    <Link href={`${link.url}`}>
      <a className="shadow-small product-card hover:shadow-medium transition-shadow duration-200">
        <div>
          <div className="product-card-image h-56">
            <CoverImage
              title={RichText.asText(title)}
              url={coverImage.url}
            />
          </div>
          <div className="text-3xl leading-snug p-4">
              <RichText render={title} />
              <RichText render={price} />
          </div>
        </div>
      </a>
    </Link>
  )
}

export default function productListing({ posts }) {
  return (
    <section className="mt-24">
      <div className="grid grid-cols-2 md:grid-cols-4 col-gap-4 row-gap-20 md:row-gap-32 mb-32">
        {posts.map(({ node }) => (
          <ProductPostPreview
            title={node.product_title}
            coverImage={node.product_image}
            price={node.product_price}
            link={node.product_link}
          />
        ))}
      </div>
    </section>
  )
}
