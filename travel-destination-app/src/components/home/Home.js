import Header from '../header/Header';
import Tours from  '../tours/Tours';
import Footer from '../footer/Footer';

const data = require('../../data/db.json')

function Home() {
  return (
   <>
    <Header/>
    <Footer/>
    <div>
   <Tours travelData = {data}/>
   </div>  
   </>
  )
}

export default Home;
