import Container from '../components/container'

export default function heroImage() {
  return (
    <section className="hero-image flex flex-col items-center justify-center py-20 mb-10">
      <Container>
        <h1 className="text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-abel pb-1 text-center leading-none">It's Time to Clean Your Car, Bro!</h1>
        <h2 className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-abel pb-5 lg:pb-10 text-center leading-tight">All Your Car Cleaning Essentials Curated From Amazon.</h2>
        {/*<p className="text-1xl lg:text-2xl text-center">All your bikes parts and accessories curated from Amazon.</p>*/}
      </Container>
    </section>
  )
}
