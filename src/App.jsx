
import './App.css'
import Header from './components/Header';
import Menu from './components/Menu';
import TomaDeDatos from './components/TomaDeDatos.jsx'
import { useState } from 'react';
import { menuItems } from './db/db.js';
function App() {
  // Carga el menu
  const [data] = useState(menuItems)
  // Estado para guardar lo que el usuario pide
  const [order, setOrder] = useState([])
  const [tip, setTip] = useState(0)
  // Agrergar producto al menu
  const addItem = (item) => {
    const itemExist = order.findIndex(orderItem => orderItem.id === item.id)
    
    if (itemExist >= 0) {
      // Si ya existe se actualiza la cantidad
      const updatedOrder = [...order]
      updatedOrder[itemExist].quantity += 1
      setOrder(updatedOrder)
    } else {
      // Si no existe lo agregamos con cantidad 1
      const newItem = { ...item, quantity: 1 }
      setOrder([...order, newItem])
    }
  }

  // Eliminar producto del menu 
  const removeItem = (id) => {
    const updatedOrder = order.filter(item => item.id !== id)
    setOrder(updatedOrder)
  }

  const guardarOrden = () => {
    console.log("Procesando orden");
    console.log("Productos del Menu:", order);
    console.log("Propina:", tip);

    // Vaciar la orden 
    setOrder([]);
    // Reiniciar la propina a 0
    setTip(0);
  }
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-10">
        
        <div className="p-5">
          <h2 className='text-4xl font-black mb-10'>Menú</h2>
          <Menu 
            menuItems={data} 
            addItem={addItem} 
          />
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            <TomaDeDatos 
              order={order}
              removeItem={removeItem}
              tip={tip}           
              setTip={setTip}   
              guardarOrden={guardarOrden}
            />
        </div>

      </main>
    </>
  )
}

export default App
