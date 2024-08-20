"use client";
import Logo from "../../../public/andys.svg";
import Image from "next/image";
import { sideBarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function SideBar() {
  const pathname = usePathname();
  return (
    <aside className="w-[230px] md:w-[250px] h-full overflow-auto bg-zinc-900/50 shadow-xl flex items-center justify-center">
      <div className="w-[90%] h-full flex flex-col items-center">
        <div className="w-full flex justify-center items-center mt-4 gap-4">
          <Image src={Logo} alt="Logo" height={125} width={125} />
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-2 mt-4 text-textGray">
          {sideBarLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                href={link.href}
                key={link.label}
                className={`w-full h-10 rounded-md flex justify-start items-center gap-5 p-4 py-6 text-base font-medium transition-colors ease-linear duration-200 ${
                  pathname.includes(link.href)
                    ? "bg-backgroundColor text-greenSpotify"
                    : "hover:bg-selectedColor/30 hover:text-white"
                }`}
              >
                <Icon size={20} />
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="w-full h-full justify-center items-center relative">
          <Button className="absolute bottom-2 w-full bg-inherit flex justify-start font-medium transition-colors ease-linear duration-200 text-red-600">
            {" "}
            <LogOut size={20} className="mr-2" /> Cerrar sesion
          </Button>
        </div>
      </div>
    </aside>
  );
}
