import Link from 'next/link'
import Container from '../components/container'

class MainNavigation extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        showHideSidenav: 'not-active'
      }
  }

  getInitialState(){
    return {"showHideSidenav":"not-active"};
  }

  componentDidMount(){

    const navigationLink = document.querySelectorAll('.link-arrow');
    const navigationOverlay = document.querySelector('.navigation-overlay');
    const menuButton = document.querySelector('.menu-button');

    window.addEventListener('resize', function(){
      if(this.innerWidth > '728'){
        navigationLink.forEach(function(item){
          item.parentNode.parentNode.classList.remove('active')
        })
      }
    })

    navigationOverlay.addEventListener('click', function(){
      navigationLink.forEach(function(item){
        item.parentNode.parentNode.classList.remove('active')
      })
    })

    menuButton.addEventListener('click', function(){
      if(!menuButton.classList.contains('active')){
        navigationLink.forEach(function(item){
          item.parentNode.parentNode.classList.remove('active')
        })
      }
    })

    navigationLink.forEach(function(item){

      item.addEventListener('click', function(){
        console.log(item.parentNode.parentNode)
        navigationLink.forEach(function(item) {
          item.parentNode.parentNode.classList.remove('active')
        })
        item.parentNode.parentNode.classList.toggle('active')
      })
    })

  }

  render(){
    return(
        <nav className="navigation flex items-center shadow-small h-20">
          <Container>
            <div className="grid grid-cols-2 flex flex-row flex-auto items-center font-poppins">
              <Link href="/">
                <a className="logo h-16 w-24">
                  Logo
                </a>
              </Link>
              <div className={`link-collection flex flex-col md:flex-row md:justify-end ${this.state.showHideSidenav}`}>
                <div className="link-group pb-2 md:pb-0">
                  <div className="link-main flex flex-row grid grid-cols-4 md:grid-cols-none align-center px-6 md:px-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="link-arrow w-4 h-4 col-span-1 md:hidden" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                    <Link href="/cranksets">
                      <a className="link-item px-0 md:px-3 col-span-3">
                        Cranksets
                      </a>
                    </Link>
                  </div>
                  <div className="link-dropdown md:py-6 px-6 md:px-3 md:w-48">
                    <Link href="/cranksets/chains">
                      <a>Chains</a>
                    </Link>
                    <Link href="/cranksets/pedals">
                      <a>Pedals</a>
                    </Link>
                    <Link href="/cranksets/chain-rings">
                      <a>Chain Rings</a>
                    </Link>
                    <Link href="/cranksets/bottom-brackets">
                      <a>Bottom Brackets</a>
                    </Link>
                  </div>
                </div>

                <div className="link-group pb-2 md:pb-0">
                  <div className="link-main flex flex-row grid grid-cols-4 md:grid-cols-none align-center px-6 md:px-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="link-arrow w-4 h-4 col-span-1 md:hidden" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                    <Link href="/handlebars">
                      <a className="link-item px-0 md:px-3 col-span-3">
                        Handlebars
                      </a>
                    </Link>
                  </div>
                  <div className="link-dropdown md:py-6 px-6 md:pl-3 md:pr-12 md:w-48">
                    <Link href="/handlebars/grips">
                      <a>Grips</a>
                    </Link>
                    <Link href="/handlebars/shifters">
                      <a>Shifters</a>
                    </Link>
                    <Link href="/handlebars/brake-levers">
                      <a>Brake Levers</a>
                    </Link>
                    <Link href="/handlebars/stems">
                      <a>Stems</a>
                    </Link>
                    <Link href="/handlebars/headsets">
                      <a>Headsets</a>
                    </Link>
                  </div>
                </div>

                <div className="link-group pb-2 md:pb-0">
                  <div className="link-main flex flex-row grid grid-cols-4 md:grid-cols-none align-center px-6 md:px-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="link-arrow w-4 h-4 col-span-1 md:hidden" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                    <Link href="/saddles">
                      <a className="link-item px-0 md:px-3 col-span-3">
                        Saddles
                      </a>
                    </Link>
                  </div>
                  <div className="link-dropdown md:py-6 px-6 md:pl-3 md:pr-12 md:w-48">
                    <Link href="/saddles/cushions">
                      <a>Cushions</a>
                    </Link>
                    <Link href="/saddles/seatposts">
                      <a>Seatposts</a>
                    </Link>
                  </div>
                </div>

                <div className="link-group pb-2 md:pb-0">
                  <div className="link-main flex flex-row grid grid-cols-4 md:grid-cols-none align-center px-6 md:px-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="link-arrow w-4 h-4 col-span-1 md:hidden" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                    <Link href="/wheels">
                      <a className="link-item px-0 md:px-3 col-span-3">
                        Wheels
                      </a>
                    </Link>
                  </div>
                  <div className="link-dropdown md:py-6 px-6 md:pl-3 md:pr-12 md:w-48">
                    <Link href="/wheels/tires">
                      <a>Tires</a>
                    </Link>
                    <Link href="/wheels/rims">
                      <a>Rims</a>
                    </Link>
                    <Link href="/wheels/brake-pads">
                      <a>Brake Pads</a>
                    </Link>
                    <Link href="/wheels/tubes">
                      <a>Tubes</a>
                    </Link>
                    <Link href="/wheels/hubs">
                      <a>Hubs</a>
                    </Link>
                    <Link href="/wheels/spokes">
                      <a>Spokes</a>
                    </Link>
                  </div>
                </div>

                {/*<Link href="/frames">
                  <a className="link-item px-6 md:px-3">
                    Frames
                  </a>
                </Link>*/}

                <div className="link-group pb-2 md:pb-0">
                  <div className="link-main flex flex-row grid grid-cols-4 md:grid-cols-none align-center px-6 md:px-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="link-arrow w-4 h-4 col-span-1 md:hidden" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                    <Link href="/accessories">
                      <a className="link-item px-0 md:px-3 col-span-3">
                        Accessories
                      </a>
                    </Link>
                  </div>
                  <div className="link-dropdown md:py-6 px-6 md:pl-3 md:pr-12 md:w-48">
                    <Link href="/accessories/bells">
                      <a>Bells</a>
                    </Link>
                    <Link href="/accessories/locks">
                      <a>Locks</a>
                    </Link>
                    <Link href="/accessories/lights">
                      <a>Lights</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className={`menu-button w-8 ${this.state.showHideSidenav}`} onClick={this.mobileMenu.bind(this)}>
                  <span className="bar h-1 mb-1"></span>
                  <span className="bar h-1 mb-1"></span>
                  <span className="bar h-1 mb-1"></span>
                </div>
              </div>
              <div className={`navigation-overlay ${this.state.showHideSidenav}`} onClick={this.mobileMenu.bind(this)}></div>
            </div>
          </Container>

        </nav>
    )
  }
  mobileMenu() {
    var css = (this.state.showHideSidenav === "not-active") ? "active" : "not-active";
    this.setState({
      "showHideSidenav" : css
    });
  }

}

export default MainNavigation;
