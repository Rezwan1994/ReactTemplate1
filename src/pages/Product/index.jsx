import AboutLayout from "../../assets/images/pc_layout.png"

import NavBar from '../../components/Header/nav'
import HeaderMenu from "../../components/Header/menu";
import PageIntro from "../../components/PageInro";
import ProductItemArea from '../../components/Product/item'
import FooterItem from '../../components/Footer/footeritem'
import Copyright from '../../components/Footer/copyright'
function ProductPage(){
    return <div>
        <NavBar/>
        <HeaderMenu/>
        <PageIntro/>
        
        <div className="about">
            <div className="container">
                <div className="row">
                    <dir className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="about_box">
                        <figure><img src={AboutLayout}/></figure>
                    </div>
                    </dir>
                    <dir ClassName="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div ClassName="about_box">
                        <h3>Who is Lighten</h3>
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    </dir> 
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
export default ProductPage;