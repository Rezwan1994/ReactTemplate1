import servicepng from '../../assets/icon/service1.png'
function ServiceItem()
{
    return <div>
         <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="service-box">
                     <i><img src={servicepng}/></i>
                     <h3>Fast service</h3>
                     <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                  </div>
               </div>
    </div>
}
export default ServiceItem