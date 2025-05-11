import { CiLocationOn } from 'react-icons/ci'
import Header from './components/Header'
import { FaGithub, FaTelegram } from 'react-icons/fa'

function App() {
  return (
    <>
      <Header />
      <main className='mt-[70px]'>
        <section className='py-28'>
          <div className="max-container flex flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center gap-4">
              <p className='flex items-center gap-1 opacity-70'>
                <CiLocationOn strokeWidth={1} size={18} />
                <span>Астана, Казахстан</span>
              </p>
              <h1 className="text-7xl">Frontend <br /> Разработчик</h1>
              <p className="font-medium text-xl opacity-90 mt-2">Ахмет Мухаммедали</p>
              <ul className='flex items-center gap-4'>
                <li>
                  <a href="https://www.t.me/plewfx">
                    <FaTelegram size={25} className="hover:text-white text-gray-my duration-150" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/mukhammedali-akhmet">
                    <FaGithub size={25} className="hover:text-white text-gray-my duration-150" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="background -z-10"></div>
          </div>
        </section>
        <div className="w-2/3 h-[1px] bg-gray-my/10 mx-auto"></div>
        <section className='mt-20'>
          <div className="max-container">
            <h1 className='text-5xl'>Проекты</h1>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
