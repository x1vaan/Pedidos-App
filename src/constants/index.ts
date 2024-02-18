import { sideBarInterface } from "@/types/types";
import { Pizza, DollarSign, Notebook } from "lucide-react";

export const sideBarLinks: sideBarInterface[] = [
  {
    href: "/pedidos",
    label: "Pedidos",
    icon: Pizza,
  },
  {
    href: "/abrir-turno",
    label: "Abrir Caja",
    icon: DollarSign,
  },
  {
    href: "/cerrar-turno",
    label: "Cerrar Caja",
    icon: Notebook,
  },
];
