import HomePage from '../pages/Home'
import AboutPage from '../pages/About'
import ProductPage from '../pages/Product'
import NotFound from '../pages/404'
import { Router,Redirect } from "@reach/router";

function AppRouter(){
    return (
        <Router>
            <HomePage path='/index.html'/>
            <HomePage path='/'/>
            <AboutPage path='/about.html'/>
            <ProductPage path='/product.html'/>
            <NotFound default/>
        </Router>
    )
}
export default AppRouter