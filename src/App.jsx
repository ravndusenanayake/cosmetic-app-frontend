
import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'

function App() {


  return (
    <>
      <Header />
      <ProductCard name="apple laptop" description="Description 1" price="$19.99" picture="https://source.unsplash.com/200x200/?skincare" />
      <ProductCard name="Product 2" description="Description 2" price="$24.99" />
      <ProductCard name="Product 3" description="Description 3" price="$29.99" />
    </>
  )
}

export default App
