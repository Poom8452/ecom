import {sampleProducts} from './data'
import './App.css'

function App( ){
  

  return (
    <>
    <header>ShopG</header>
    <main>
      <ul>
        {sampleProducts.map((product)=>
        
        <li key={product.slug}>
          <img className='product-image' src={product.image} alt="" />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </li>
        
        )}
      </ul>
    </main>
    <footer>AlL ri</footer>
    </>
  )
}

export default App;