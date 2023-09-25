import React from 'react'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='flex justify-around bg-[#12322b] text-white p-9'>
        <div className='mr-9'>
            <Image 
                src={'footer_logo.svg'} 
                width={200} height={200} 
                alt="Website logo" 
                style={{width:189, height:63}}
                priority
            />
        </div>
        <div className='list-none mr-7'>
            <h6 className='mb-1'>Enlaces</h6>
            <li className='text-sm cursor-pointer hover:underline hover:text-blue-500'>Participa</li>
            <li className='text-sm cursor-pointer hover:underline hover:text-blue-500'>Publicaciones Oficiales</li>
            <li className='text-sm cursor-pointer hover:underline hover:text-blue-500'>Marco Juridico</li>
            <li className='text-sm cursor-pointer hover:underline hover:text-blue-500'>Plataforma Nacional de Transparencia</li>
        </div>
        <div className='list-none'>
            <h6>¿Qué es gob.mx?</h6>
            <p className='text-sm mb-5'>Es el portal único de trámites, información y participación ciudadana. 
                <br /><u className='cursor-pointer text-sm hover:text-blue-500'>Leer más</u>
            </p>
            <li className='text-sm cursor-pointer hover:underline hover:text-blue-500'>Portal de datos abiertos</li>
            <li className='text-sm cursor-pointer hover:underline hover:text-blue-500'>Declaración de accesibilidad</li>
            <li className='text-sm cursor-pointer hover:underline hover:text-blue-500'>Aviso de privacidad integral</li>
            <li className='text-sm cursor-pointer hover:underline hover:text-blue-500'>Aviso de privacidad simplificado</li>
            <li className='text-sm cursor-pointer hover:underline hover:text-blue-500'>Términos y condiciones</li>
            <li className='text-sm cursor-pointer hover:underline hover:text-blue-500'>Política de seguridad</li>
            <li className='text-sm cursor-pointer hover:underline hover:text-blue-500'>Mapa del sitio</li>
        </div>
        <div className='ml-6'>
            <h6>
                <u className='cursor-pointer hover:text-blue-500'>Denuncia contra servidores públicos</u>
            </h6>
            <br />
            <h6>Siguenos en:</h6>
            <ul className='flex'>
            <Image 
                src={'facebook.svg'} 
                width={200} height={200} 
                alt="FB logo" 
                style={{width:24, height:24}}
                priority
                className='cursor-pointer m-1'
            />
            <Image 
                src={'twitter.svg'} 
                width={200} height={200} 
                alt="twitter logo" 
                style={{width:24, height:24}}
                priority
                className='cursor-pointer m-1'
            />
            </ul>
        </div>
    </footer>
  )
}
