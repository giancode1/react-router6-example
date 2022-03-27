import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import logo from '../logo.svg'

const userId = 10
export const CountPage = () => {

  const [count, setCount] = useState(0)

  return (
    
    <div>
      <br />
      <Link to='saludo'>ir al saludo</Link> |
      <Link to='despedida'>ir a la despedida</Link> 
      {/* la etiqueta h1 con: te saludo en Oulet: */}
      <Outlet />  
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
      <Link to="/">Home</Link>
      {/* <Link to={`/users/${userId}`}>UserId</Link> */}
    
    </div>

    
  
  )
}
