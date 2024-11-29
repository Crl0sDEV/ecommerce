import ProductCard from '../components/ProductCard';
import products from '../data/product';

const Products = () => (
  <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default Products;
