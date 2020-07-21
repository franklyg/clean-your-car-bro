import Container from './container'
import Link from 'next/link'
import { EXAMPLE_PATH } from '../lib/constants'

import Mailchimp from 'react-mailchimp-form'

class Footer extends React.Component  {

  componentDidMount(){
    document.querySelector('.subscribe-form').childNodes[0].style.height = '3rem'
    document.querySelector('.subscribe-form').childNodes[0].style.padding = '.5rem'
    document.querySelector('.subscribe-form').childNodes[0].style.fontSize = '1rem'
    document.querySelector('.subscribe-form').childNodes[0].style.borderRadius = '0.125rem'
    document.querySelector('.subscribe-form').childNodes[0].style.outline = 'none'
  }

  render(){
    return (
      <footer className="py-20 mt-20">
        <Container>
          <div className="flex grid grid-cols-1 md:grid-cols-2 row-gap-10 col-gap-10">

            <div className="footer-links">
              <h3 className="font-poppins font-bold text-2xl">For Customers</h3>
              <div className="my-4 flex flex-col">
                <Link href="/privacy-policy">
                  <a className="mb-3">
                    Privacy Policy
                  </a>
                </Link>
                <Link href="/terms-and-conditions">
                  <a className="mb-3">
                    Terms & Conditions
                  </a>
                </Link>
                <Link href="/about">
                  <a className="mb-3">
                    About
                  </a>
                </Link>
                <Link href="/about#faq">
                  <a className="mb-3">
                    FAQ
                  </a>
                </Link>
              </div>
              <div className="footer-feedback">
                <h3 className="font-poppins font-bold text-2xl">Feedback & Support</h3>
                <p className="my-3"><a href="mailto:support@ineedbikeparts.com">Click here to contact us.</a></p>
              </div>
            </div>

            <div className="footer-subscribe p-8 shadow-lg rounded-sm">
              <h3 className="font-poppins font-bold text-2xl">Subscribe to our mailing list!</h3>
              <p className="mt-3 mb-6">Get the lastest on what's coming out!</p>
              <Mailchimp
                action='https://ineedbikeparts.us10.list-manage.com/subscribe/post?u=85ed7c9f37af452193f0a22ed&amp;id=bec81044fb'
                //Adding multiple fields:
                fields={[
                  {
                    name: 'EMAIL',
                    placeholder: 'Email',
                    type: 'email',
                    required: true
                  }
                ]}
                // Change predetermined language
                messages = {
                  {
                    sending: "Sending...",
                    success: "Thank you for subscribing!",
                    error: "Error: An unexpected internal error has occurred.",
                    empty: "You must write an e-mail.",
                    duplicate: "Too many subscribe attempts for this email address",
                    button: "Subscribe!"
                  }
                }
                // Add a personalized class
                className='flex flex-col subscribe-form text-poppins'
                />

            </div>

          </div>
        </Container>
      </footer>
    )
  }

}

export default Footer;
