import { Form } from './components/Form'

export default function Home() {
  return (
    <main className="flex flex-col items-center space-y-5 mb-11">
      <section>
        <h1 className=" uppercase font-bold text-3x1 mt-8">Indice de Masa Corporal</h1>
      </section>
      <section className='w-[90%]'>
        <Form/>
      </section>
    </main>
  )
}
