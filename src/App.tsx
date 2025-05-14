import { CiLocationOn } from 'react-icons/ci'
import Header from './components/Header'
import { FaGithub, FaTelegram } from 'react-icons/fa'
import { projects } from './projects'
import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import { BsGlobe } from 'react-icons/bs'

function App() {
  const [filtered, setFiltered] = useState<string[]>([])
  const technologies = ["React", "TypeScript", "Redux", "Zustand", "React Router", "SCSS", "TailwindCSS", "shadcn", "Firebase", "React Query"]

  const filteredProjects = filtered.length ? projects.filter(project =>
    filtered.every(fil => project.technologies.includes(fil))
  ) : projects

  return (
    <>
      <Header />
      <main className='mt-[70px] mb-10'>
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
          <div className="max-container flex flex-col gap-6">
            <h1 className='text-5xl'>Проекты</h1>
            <div className="flex justify-center gap-2">
              {technologies.map(tech => (
                <Button key={tech} className={"flex items-center gap-2 cursor-pointer" + (filtered.includes(tech) ? " border" : " bg-transparent")} onClick={() => {
                  filtered.includes(tech) ?
                    setFiltered((prev) => prev.filter(el => (
                      el !== tech
                    ))) :
                    setFiltered((prev) => [...prev, tech])
                }} variant={filtered.includes(tech) ? "default" : "outline"}>
                  <img className="w-5" src={`/technologies/${tech.toLocaleLowerCase()}.svg`} alt="" />
                  <span className="font-semibold">{tech}</span>
                </Button>
              ))}
            </div>
            <ul className="grid grid-cols-4 gap-6 mt-6">
              {filteredProjects.map(project => (
                <li key={project.id}>
                  <Card className="bg-transparent p-2 gap-2">
                    <img className="w-full h-37 rounded-xl" src={`/projectScreenshots/${project.title.toLowerCase()}Poster.png`} alt="" />
                    <div>
                      <h2 className="font-bold text-2xl">{project.title}</h2>
                      <ul className="flex gap-2 mt-2">
                        {project.technologies.map(tech => (
                          <div key={tech}>
                            <img className="w-5" src={`/technologies/${tech.toLocaleLowerCase()}.svg`} alt="" />
                          </div>
                        ))}
                      </ul>
                    </div>
                    <div className="flex mt-2 gap-2">
                      <a href={project.liveDemo}>
                        <Button variant="secondary">
                          <BsGlobe />
                          <span>Live Demo</span>
                        </Button>
                      </a>
                      <a href={project.sourceCode}>
                      <Button variant="secondary">
                        <FaGithub />
                        <span>Code</span>
                      </Button>
                      </a>
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
