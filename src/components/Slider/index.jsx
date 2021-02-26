import appbanner from '../../assets/images/banner2.jpg'
function Slider(){
    return <div>
            <div id="main_slider" class="carousel slide banner-main" data-ride="carousel">
                <div ClassName="carousel-inner">
                    <div ClassName="carousel-item active">
                    <img class="first-slide" src={appbanner}  alt="First slide"/>
                        <div ClassName="container">
                            <div ClassName="carousel-caption relative">
                                <h1>Our  <strong ClassName="black_bold">Latest </strong>
                                <strong ClassName="yellow_bold">Product </strong></h1>
                                <p>It is a long established fact that a r 
                                eader will be distracted by the readable content of a page </p>
                                <a  href="#">see more Products</a>
                            </div>
                        </div>
                        <a ClassName="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                        <i ClassName='fa fa-angle-right'></i>
                        </a>
                        <a ClassName="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                        <i ClassName='fa fa-angle-left'></i>
                        </a>
                    </div>
                </div>
            </div>
    </div>
}
export default Slider;

