import React from 'react'

function DataRow({viagem}) {
  return (
    <div id="data-row" className="group flex items-center justify-between p-2 my-2 rounded cursor-pointer hover:bg-slate-700">
        <div>
            <div>
                <span>{viagem.destino}</span>
            </div>
            <div>
                <span>{viagem.agencia}</span>
            </div>
        </div>
        <div>
            <div>
                <span>{viagem.ida}</span>
            </div>
            <div>
                <span>{viagem.volta}</span>
            </div>
        </div>
    </div>
  )
}

export default DataRow