import React from 'react'

function Footer() {
    return (
  <div>
  <div className="footer-dark">
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3 item">
            <h3>Useful Links </h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Cart</a></li>
              <li><a href="#">Men Fashion</a></li>
              <li><a href="#">Women Fashion</a></li>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Wishkist</a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 item">
            <h3>About</h3>
            <ul>
              <li><a href="#">Company</a></li>
              <li><a href="#">Prodcts</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="col-sm-6 col-md-3 item">
          <h3>Contacts</h3>
            <ul>
            <li><a href="#">798 Ulwe, Navi Mumbai, Maharastra, India</a></li>
            <li><a href="#">onlineshop@gmail.com</a></li>
            <li><a href="#">+91 9198262266</a></li>
            </ul>
          </div>

          <div className="col-md-3 item text">
            <h3>My Online Shop</h3>
            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus.</p>
          </div>
          <div className="col item social">
              <a href="#" style={{backgroundColor:'#3B5999'}}><i className="icon ion-social-facebook" /></a>
              <a href="#" style={{backgroundColor:'#55ACEE'}}><i className="icon ion-social-twitter" /></a>
              <a href="#" style={{backgroundColor:'#E60023'}}><i className="icon ion-social-snapchat"  /></a>
              <a href="#" style={{backgroundColor:'#E4405F'}}><i className="icon ion-social-instagram" /></a>
            </div>
        </div>
        <p className="copyright">My Online Shop © 2021</p>
      </div>
    </footer>
  </div>
</div>
    )
}

export default Footer
