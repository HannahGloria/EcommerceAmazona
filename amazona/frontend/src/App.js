function App() {
  return (
    <div>
      <header className="App">
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured products</h1>
        {data.products.map((product)=>(
          <div>
            <img src={product.image} alt={product.name}/>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
