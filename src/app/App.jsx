import HomePage from '../pages/Home'
import AboutPage from '../pages/About'
import ProductPage from '../pages/Product'
import {Helmet} from 'react-helmet'
function App() {
  return (
    <div className="App">
        <Helmet>
          <link rel="icon" href="images/fevicon.png" type="image/gif" />
          <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen"/>
      </Helmet>
      <HomePage/>
      <AboutPage/>
      <ProductPage/>
    </div>
  );
}

export default App;
