import requsticon from '../../assets/icon/calll.png'
function RequestArea(){
    return <div>
        <div class="container">
            <div class="yellow_bg">
                <div class="row">
                    <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                        <div class="yellow-box">
                            <h3>REQUEST A FREE QUOTE<i><img src={requsticon}/></i></h3>
                            
                            <p>Get answers and advice from people you want it from.</p>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <div class="yellow-box">
                            <a href="#">Get  Quote</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default RequestArea;