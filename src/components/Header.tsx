import { BiDownload } from "react-icons/bi"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0f0f0fcc] backdrop-blur-[5px] border-b border-[#262626] z-10">
        <div className="max-container py-4">
            <nav className="flex justify-between items-center">
              <a href="/" className="flex items-center gap-2">
                <img className="w-10" src="/logo.svg" alt="" />
                <span className="font-semibold text-xl text-[#dfdfd6]">M-ali.dev</span>
              </a>
              <a className="flex items-center gap-2 py-2 px-3.5 rounded-lg bg-[#dfdfd6] text-[#0f0f0fcc] hover:bg-white duration-150" download href="">
                <BiDownload size={18} />
                <span className="font-semibold text-[14px]">Резюме</span>
              </a>
            </nav>
        </div>
    </header>
  )
}

export default Header