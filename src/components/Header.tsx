import { BiDownload } from "react-icons/bi"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0f0f0fcc] backdrop-blur-[5px] border-b border-[#262626] z-10">
        <div className="max-container py-4">
            <nav className="flex justify-between items-center">
              <a href="/" className="flex items-center gap-2">
                <img className="w-10" src="/logo.svg" alt="" />
                <span className="font-semibold text-xl text-[#dfdfd6]">M-ali.dev</span>
              </a>
              <Link download to="/">
                <Button className="cursor-pointer">
                  <BiDownload size={18} />
                  <span className="font-semibold text-[14px]">Резюме</span>
                </Button>
              </Link>
            </nav>
        </div>
    </header>
  )
}

export default Header