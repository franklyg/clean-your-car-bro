import Layout from '../../components/layout'
import Container from '../../components/container'
import Head from 'next/head'

export default function TermsAndConditions() {
  return (
    <>
      <Layout>
        <Container>
          <div className="footer-pages">
            <div id="about">
              <h1 className="main-headline text-6xl font-bold mb-8 pt-10 mb-8">about.</h1>
              <h2>Welcome to I Need Bike Parts. </h2>
              <p>We curate our bike parts from Amazon, and direct you to the best possible products at the best possible price. We go through products, with hopes that we can get you Amazon Prime shipping on your order. </p>
              <p>If you do not have Amazon Prime <a href="https://www.amazon.ca/amazonprime?_encoding=UTF8&linkCode=ur1&primeCampaignId=prime_assoc_ft&tag=fgisonni-20" target="_blank"><b>click here to sign up today!</b></a></p>
            </div>
            <div id="faq"></div>
            <div id="faq-section">
              <h1 className="main-headline text-6xl font-bold mb-8 pt-10 mb-8">frequently asked questions.</h1>
              <h2>Does I Need Bike Parts sell product from a warehouse?</h2>
              <p>No. All products are sold by the merchant/seller on Amazon. We are a third party service helping consumers get their best bike parts from Amazon. </p>
              <h2>Who do I speak to about returns and exchanges?</h2>
              <p>You will have to get in touch with the merchant/seller.  We are not responsible for the condition of your product, which it arrives in. Please go to your Amazon account to find this information in, Your Orders.</p>
              <h2>How long does it take for my product to ship?</h2>
              <p>I Need Bike Parts does not ship out any products. Please go to your Amazon account to find this information in, Your Orders.</p>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}
