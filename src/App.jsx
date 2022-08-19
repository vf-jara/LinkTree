import { GithubLogo, LinkedinLogo, Envelope } from 'phosphor-react'
import './App.css'

function App() {

  return (
    <div className='bg-sky-100 w-full'>
      <div className='flex flex-col mx-auto min-h-screen max-w-[500px] items-center py-10 '>
        <div className='fade'>
          <img src="/image.jpg" className='rounded-full p-[2px] border-4 border-sky-700 h-[150px]' />
        </div>
        <div className='py-5 text-center'>
          <h1 className='text-2xl font-bold'>Vinicius Franco Jara</h1>
          <p>Desenvolvedor Front-End<br />JavaScript | React | Next.js</p>
        </div>
        <div className='w-full flex flex-col gap-5 px-10'>
          <a href='https://github.com/vf-jara' target="_blank" className='card font-medium text-xl'>
            <div className='bg-gray-800 text-white flex rounded-md'>
              <div className=' px-5 py-3'>
                <GithubLogo size={35} />
              </div>
              <div className=' pl-12 border-l px-5 py-4'>
                <p>GitHub</p>
              </div>
            </div>
          </a>
          <a href='https://www.linkedin.com/in/vfjara21/' target="_blank" className='card2 delay-75 font-medium text-xl'>
            <div className='bg-[#0a66c2] text-white flex rounded-md'>
              <div className=' px-5 py-3'>
                <LinkedinLogo size={35} />
              </div>
              <div className=' pl-12 border-l px-5 py-4'>
                <p>LinkedIn</p>
              </div>
            </div>
          </a>
          <a href='mailto:viniciusfjara@gmail.com' target="_blank" className='card3 delay-150 font-medium text-xl'>
            <div className='bg-[#c5221f] text-white flex rounded-md'>
              <div className=' px-5 py-3'>
                <Envelope size={35} />
              </div>
              <div className=' pl-12 border-l px-5 py-4'>
                <p>E-mail</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
