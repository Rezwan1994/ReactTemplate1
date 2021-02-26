import applogo from '../../assets/images/logo.jpg'

function HeaderMenu(){
return <div>
    {/* Header Menu*/}
    <div className="container">
            <div className="row">
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div className="full">
                     <div className="center-desk">
                        <div className="logo"> <a href="index.html"><img src={applogo} alt="logo"/></a> </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
                  <div className="menu-area">
                     <div className="limit-box">
                        <nav className="main-menu">
                           <ul className="menu-area-main">
                              <li className="active"> <a href="index.html">Home</a> </li>
                              <li> <a href="about.html">About</a> </li>
                              <li> <a href="product.html">product</a> </li>
                              <li> <a href="blog.html"> Blog</a> </li>
                              <li> <a href="contact.html">Contact</a> </li>
                              <li className="mean-last"> <a href="#contact">signup</a> </li>
                               
                           </ul>
                        </nav>
                     </div>
                  </div>
               </div>
               <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                  <li><a className="buy" href="#">Login</a></li>
               </div>
            </div>
         </div>

</div>

}

export default HeaderMenu;