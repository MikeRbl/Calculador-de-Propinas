

export default function TomaDeDatos({ order, removeItem, tip, setTip, guardarOrden }) {
  let subtotal = 0;
  order.map(item => {
    subtotal = subtotal + (item.price * item.quantity);
  });

  let propinaAmount = subtotal * tip;
  let total = subtotal + propinaAmount;

  const tipOptions = [
    { id: 'tip-10', value: .10, label: '10%' },
    { id: 'tip-20', value: .20, label: '20%' },
    { id: 'tip-50', value: .50, label: '50%' },
  ];

  return (
    <>
      <h2 className='text-4xl font-black mb-5'>TomaDeDatos</h2>

      {order.length === 0 ? (
        <p className="text-center text-lg mt-10">La orden esta vacia</p>
      ) : (
        <div className="space-y-5">
          
          <div className="max-h-60 overflow-y-scroll space-y-3">
            {order.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b border-gray-200 py-4 last-of-type:border-0">
                <div>
                  <p className="text-lg">
                    {item.name} - ${item.price}
                  </p>
                  <p className="font-black text-lg">
                    Cantidad: {item.quantity} - ${item.price * item.quantity}
                  </p>
                </div>
                
                <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black hover:bg-red-700" onClick={() => removeItem(item.id)}>
                  X
                </button>
              </div>
            ))}
          </div>
          <div className="mt-10 space-y-3">
            <h3 className="font-black text-2xl">Propina:</h3>
            <form className="flex flex-col gap-2">
              {tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex gap-2 items-center">
                  <input type="radio" id={tipOption.id} name="tip" value={tipOption.value} onChange={(e) => setTip(+e.target.value)} checked={tipOption.value === tip}/>
                  <label htmlFor={tipOption.id}>{tipOption.label}</label>
                </div>
              ))}
            </form>
          </div>

          <div className="mt-10 space-y-3">
            <h3 className="font-black text-2xl">Totales y Propina:</h3>
            <p>Subtotal a pagar: <span className="font-bold">${subtotal}</span></p>
            <p>Propina: <span className="font-bold">${propinaAmount}</span></p>
            <p className="text-xl mt-2">Total a Pagar: <span className="font-bold">${total}</span></p>
          </div>

          <button className="w-full bg-black p-3 text-white font-bold uppercase hover:bg-gray-900 mt-5" onClick={guardarOrden}>
            Guardar Orden
          </button>
        </div>
      )}
    </>
  )
}