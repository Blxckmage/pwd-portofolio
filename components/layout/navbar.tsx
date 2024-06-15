import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed left-1/2 top-4 z-50 w-full max-w-[75vw] -translate-x-1/2 rounded-full bg-[#181825]/50 text-[#cdd6f4] shadow-lg backdrop-blur-md">
      <nav className="flex items-center justify-between px-8 py-4">
        <Link href="#" className="flex items-center gap-2">
          <Image src="/logo.png" width={20} height={20} alt="Logo" />
          <span className="text-lg font-medium">Faza Zikri</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-medium transition-colors"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium transition-colors"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#"
            className="text-sm font-medium transition-colors"
            prefetch={false}
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
