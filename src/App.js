import './index.css';
import Pizza from './pizza-card.js';
import pizzaData from './data.js';
import Footer from './Footer.jsx';

export default function App()  {
  return(
    <div className='container'>
      <h1>FAST REACT PIZA CO.</h1>
      <h4>OUR MENU</h4>
      <p className='description'>Athentic Italian Cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
      <section className='pizza-grid'>
        {pizzaData.map((pizza) => (
          <Pizza pizzaObject = {pizza} />
        ))}
      </section>
      <Footer />
    </div>
  )
}

