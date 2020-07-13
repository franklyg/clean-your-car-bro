import ProductPostPreview from '../components/product-post-preview'

export default function productListing({ posts }) {
  return (
    <section className="mt-24">
      <div className="grid grid-cols-2 md:grid-cols-4 col-gap-4 row-gap-20 md:row-gap-32 mb-32">
        {posts.map(({ node }) => (
          <ProductPostPreview
            key={node._meta.uid}
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
