import clientpng from '../../assets/images/lllll.png'

import NavBar from '../../components/Header/nav'
import HeaderMenu from '../../components/Header/menu'
import Slider from '../../components/Slider'
import ChooseItem from '../../components/Chose/choseitem'
import ServiceItem from '../../components/Service/item'
import ProductItemArea from '../../components/Product/item'
import  clientItem from '../../components/Client/item'
import RequestArea from '../../components/Client/Request'
import Map from '../../components/Map'
import FooterItem from '../../components/Footer/footeritem'
import Copyright from '../../components/Footer/copyright'
function HomePage()
{
    return <div>
        <NavBar/>
        <HeaderMenu/>
        <Slider/>

        <div className="whyschose">
         <div className="container">
            <div className="row">
               <div className="col-md-7 offset-md-3">
                  <div className="title">
                     <h2>Why <strong className="black">choose us</strong></h2>
                     <span>Fastest repair service with best price!</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <ChooseItem/>
      <div>
        <div class="service">
            <div class="container">
                <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="title">
                        <h2>Service <strong class="black">Process</strong></h2>
                        <span>Easy and effective way to get your device repair</span>
                    </div>
                </div>
                </div>
                <div class="row">
                <ServiceItem/>
                </div>
            </div>
        </div>
    </div>

    <div>
        <div className="product">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="title">
                        <h2>our <strong className="black">products</strong></h2>
                        <span>We package the products with best services to make you a happy customer.</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <ProductItemArea/>
    </div>

    <div>
        <div ClassName="Clients_bg_white">
            <div ClassName="container">
               <div ClassName="row">
                  <div ClassName="col-md-12">
                     <div ClassName="title">
                        <h3>What Clients Say?</h3>
                     </div>
                  </div>
               </div>
               <div id="client_slider" ClassName="carousel slide banner_Client" data-ride="carousel">
                <ol ClassName="carousel-indicators">
                <li data-target="#client_slider" data-slide-to="0" ClassName="active"></li>
                <li data-target="#client_slider" data-slide-to="1"></li>
                <li data-target="#client_slider" data-slide-to="2"></li>
                </ol>
                <div ClassName="carousel-inner">
                <div ClassName="carousel-item active">
                    <div ClassName="container">
                    <div ClassName="carousel-caption text-bg">
                    <div ClassName="img_bg">
                        <i><img src={clientpng}/><span>Jone Due <strong ClassName="date">12/02/2019</strong></span></i>
                        
                    </div>
                        
                        <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.
                        You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am </p>
                        
                    </div>
                    </div>
                </div>
                    <clientItem/>
                    <RequestArea/>
                </div>
                
            </div>

            </div>
         </div>
    </div>
    <Map/>

    <div className="footer">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <ul className="sociel">
                    <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                    <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                    <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                </ul>
            </div>
            
        </div>
        <FooterItem/>
        <Copyright/>
    </div>
</div>
}

export default HomePage