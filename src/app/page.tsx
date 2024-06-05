import ProductLits from "./components/ProductLits"
import Sldier from "./components/Sldier"

const HomePage = () => {
  return (
    <div className=''>
      <Sldier/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductLits/>
      </div>
    </div>
  )
}

export default HomePage