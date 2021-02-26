import ProductIcon from '../../assets/icon/p7.png'
function ProductItemArea(){
    return <div>
          <div className="product-bg">
                <div className="product-bg-white">
                    <div className="container">
                        <div className="row">
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    <i><img src={ProductIcon}/></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
}
export default ProductItemArea;