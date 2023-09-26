import React, { useState } from 'react';

export const Form = ({ setResult, setError }) => {
  const [heigth, setHeigth] = useState('');
  const [weigth, setWeigth] = useState('');
  const [formError, setFormError] = useState(false);

  const buttonHandler = (e) => {
    e.preventDefault();

    if([heigth, weigth].includes('')) {
      setFormError(true);
      return
    };

    setFormError(false);
    setResult(weigth / ((heigth/100) * (heigth/100)));
    setError(false);
  };

  const cleanFields = () => {
    setHeigth('');
    setWeigth('');
    setError(true);
  };

  return (
    <form className='flex flex-col items-center space-y-5 border border-gray-500 p-5 rounded-lg'>

      {formError && <div className='bg-red-500 p-2 rounded-md'>
        Error: Debes llenar todos los campos del formulario
      </div>}

      <div className='flex flex-col w-full'>
        <label className='font-bold'>Estatura</label>
        <input type="number" placeholder='Introduzca su estatura en cm' className='bg-yellow-200 p-2 rounded-md' value={heigth} onChange={e => setHeigth(e.target.value)} />
      </div>
      <div className='flex flex-col w-full'>
        <label className='font-bold'>Peso</label>
        <input type="number" placeholder='Introduzca su peso en kg' className='bg-yellow-200 p-2 rounded-md' value={weigth} onChange={e => setWeigth(e.target.value)} />
      </div>
      <div className='flex w-full justify-center space-x-3'>
        <input type="button" value={'Calcular IMC'} onClick={buttonHandler}
          className='bg-yellow-300 rounded-md p-2 font-semibold cursor-pointer hover:bg-yellow-500 transition ease-in-out delay-100' />
        <input type="button" value={'Limpiar campos'} onClick={cleanFields}
          className='bg-yellow-300 rounded-md p-2 font-semibold cursor-pointer hover:bg-yellow-500 transition ease-in-out delay-100' />
      </div>
    </form>
  )
}
