import './Header.css';
import Appendix from './Appendix';

function Header() {
  return (
    <header>
      <div className="header-area">
        <div className="container-fluid">
            <div className="container-header">
                <div className="logo col-xl-2 col-md-2">
                  <a href="index.html">
                    <img src="https://user-images.githubusercontent.com/94737368/168539482-035c74bf-662a-41f3-80fe-97ebe0ba2b41.png" alt="logo" />
                  </a>
                </div>
                <div className="col-xl-10 col-md-10 d-flex align-items-center justify-content-end">
                  <nav>
                    <ul className="main-menu">
                      <li className="item">
                        <a href='#'>Home</a>
                      </li>
                      <li className="item">
                        <a href='#'>About</a>
                      </li>
                      <li className="item list-item">
                        <a href='#'>Services</a>
                        <Appendix listItems={['service1', 'service2', 'service3']} />
                      </li>
                      <li className="item list-item">
                        <a href='#'>Portfolio</a>
                      </li>
                      <li className="item list-item">
                        <a href='#'>Page</a>
                        <Appendix listItems={['Blog', 'Blog Details', 'Element', 'Portfolio Details']} />
                      </li>
                      <li className="item">
                        <a href='#'>Contact</a>
                      </li>
                    </ul>
                  </nav>
                  
                <div>
                  <a id='btn-Get' className="btn btn-primary">Get Free Consultent</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
