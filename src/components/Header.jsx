const Header = () => (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ECommerce Web</h1>
      <nav>
        <a href="/" className="mx-2">Home</a>
        <a href="/products" className="mx-2">Products</a>
        <a href="/about" className="mx-2">About</a>
      </nav>
    </header>
  );
  
  export default Header;
  