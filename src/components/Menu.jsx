import React from 'react'
  
export default function Menu({ menuItems, addItem }) {
  return (
    <div className="space-y-3 mt-5">
        {menuItems.map( item => (
            <button
                key={item.id}
                className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between items-center mb-2 rounded-lg transition-colors"
                onClick={() => addItem(item)}>
                <div className="text-left">
                    <p className="text-lg font-medium">{item.name}</p>
                </div>
                <p className="font-black text-xl text-black-600">${item.price}</p>
            </button>
        ))}
    </div>
  )
}
