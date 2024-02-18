"use client"
import Logo from "../../../public/andys.svg";
import Image from "next/image";
import { sideBarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();
  return (
    <aside className="w-[300px] h-full overflow-auto bg-zinc-900/50 shadow-xl flex items-center justify-center">
      <div className="w-[90%] h-full flex flex-col items-center">
        <div className="w-full flex justify-center items-center mt-4 gap-4">
          <Image src={Logo} alt="Logo" height={125} width={125} />
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-2 mt-4">
          {sideBarLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                href={link.href}
                key={link.label}
                className={`w-full h-10 rounded-md flex justify-start items-center gap-5 p-4 py-6 text-base font-medium text-[#ebf6ff] transition-colors ${
                  pathname.includes(link.href) ? "bg-[#ebf6ff]/20" : "hover:bg-[#ebf6ff]/20 hover:text-green-500"
                }`}
              >
                <Icon size={20} />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
