import Footer from '../components/footer'
import Navigation from '../components/navigation'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Navigation />
      <div className="min-h-screen pt-20">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
