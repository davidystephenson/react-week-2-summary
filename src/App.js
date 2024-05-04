import { Fragment } from 'react'
import Hello from './Hello'

function App() {
  const names = [
    'Mary Manager',
    'Amy Accountant',
    'David Y. Stephenson',
    'Mary Manager'
  ]
  // console.log('names', names)
  // const nameViews = names.map((name, index) => {
  //   return (
  //     <div key={index}>
  //       <div>
  //         <h1>Hello!</h1>
  //         {name}
  //       </div>
  //       <button>Click me</button>
  //     </div>
  //   )
  // })
  // console.log('nameViews', nameViews)
  return (
    <>
      {names.map((name, index) => {
        const product = {
          name: 'fake product',
          price: 1
        }
        return (
          <Hello
            name={name}
            product={product}
            key={index}
          />
        )
      })}
    </>
  );
}

export default App;
