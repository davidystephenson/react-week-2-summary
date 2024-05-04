export default function Hello({ name, product }) {
  console.log('name', name)
  console.log('product', product)
  return (
    <>
      <div>
        <h1>Hello!</h1>
        {name}
      </div>
      <button>The price is {product.price}</button>
    </>
  )
}