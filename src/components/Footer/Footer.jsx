import {
  PiLifebuoyLight,
  PiFileTextLight,
  PiShoppingCart,
} from "react-icons/pi";
export default function Footer() {
  return (
    <footer className="w-full p-[9.5px] bg-white border-[1px]">
      <div className=" flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Limitless Web App Kit
          </a>
        </p>
        <nav className="flex items-center gap-1 sm:gap-3 ">
          <a
            href="#"
            className="text-sm bg-white hover:bg-gray-100 px-4 py-[9px] rounded-md transition-bg duration-200 flex gap-2 items-center"
          >
            <PiLifebuoyLight size={20} />
            Support
          </a>

          <a
            href="#"
            className="text-sm hover:bg-gray-100 px-4 py-[9px] rounded-md transition-all duration-200 flex gap-2 items-center"
          >
            <PiFileTextLight size={20} />
            Docs
          </a>
          <a
            href="#"
            className="text-sm font-semibold bg-blue-100 hover:bg-blue-200 text-blue-500 hover:text-blue-600 px-4 py-[9px] rounded-md transition-all duration-200 flex gap-2 items-center"
          >
            <PiShoppingCart size={20} />
            Purchase
          </a>
        </nav>
      </div>
    </footer>
  );
}
