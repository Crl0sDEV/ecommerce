const ProductCard = ({ product }) => (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-700">{product.price}</p>
        <p className="text-sm text-gray-500">{product.description}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
  
  export default ProductCard;
  