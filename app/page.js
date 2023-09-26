'use client';
import { useState } from 'react';
import { Form } from './components/Form'

export default function Home() {
  const [result, setResult] = useState('');
  const [error, setError] = useState(true);

  return (
    <main className="flex flex-col items-center space-y-5 mb-11">
      <section>
        <h1 className=" uppercase font-bold text-3x1 mt-8">Indice de Masa Corporal</h1>
      </section>
      <section className='w-[80%]'>
        <Form
          result = {result}
          setResult = {setResult}
          setError = {setError} 
        />
      </section>
      {error === true ? '' : (<section className='font-bold text-2x1 p-2 bg-yellow-300 rounded-md'>
        {result}
      </section>)}

    </main>
  )
}
