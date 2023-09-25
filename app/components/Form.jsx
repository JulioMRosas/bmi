import React from 'react'

export const Form = () => {
  return (
    <div>
        <form className='flex flex-col items-center space-y-5 border border-gray-500 p-5 rounded-lg'>
            <div className='flex flex-col w-full'>
                <label className='font-bold'>Estatura</label>
                <input type="text" placeholder='Introduzca su estatura en cm' className='bg-yellow-200 p-2 rounded-md'/>
            </div>
            <div className='flex flex-col w-full'>
                <label className='font-bold'>Peso</label>
                <input type="text" placeholder='Introduzca su peso en kg' className='bg-yellow-200 p-2 rounded-md'/>
            </div>
            <div className='flex w-full justify-center'>
                <input type="button" value={'Calcular IMC'} 
                className='bg-yellow-300 rounded-md p-2 font-semibold cursor-pointer hover:bg-yellow-500 transition ease-in-out delay-100'/>
            </div>
        </form>
    </div>
  )
}
