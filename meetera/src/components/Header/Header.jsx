import logo from "../../assets/logo.png"
import TempDrawer from "./Drawer"

export default function Header(){
    return(
        <header className="flex h-12 w-full items-center bg-white px-3">

        {/* Mobile Drawer */}
        <div className="shrink-0 md:hidden">
            <TempDrawer />
        </div>

        {/* Meetera Logo */}
        <div className="flex min-w-0 flex-1 items-center md:flex-none w-full justify-between h-full">
            <img
            src={logo}
            alt="Meetera Logo"
            className="block h-10 w-auto max-w-full object-contain md:h-12"
            />

            <div className="hidden md:flex flex-1 items-center justify-evenly h-full px-8">
                <div className="text-sm md:text-base whitespace-nowrap">Home</div>
                <div className="text-sm md:text-base whitespace-nowrap">My Meetings</div>
                <div className="text-sm md:text-base whitespace-nowrap">History</div>
                <div className="text-sm md:text-base whitespace-nowrap">Mock Interview</div>
            </div>

            {/* profile */}
            <div className="shrink-0">
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 text-sm font-semibold text-white hover:bg-blue-800">
                    VK
                </button>
            </div>
      </div>
    </header>
    )
}