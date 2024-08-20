import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import DeliveryPedidosCard from "./cards/DeliveryPedidos";

export function ResizablePedidos() {
  const pedidosDelivery = [
    { nombre: "Ivan", horario: "12:30", id: 1 },
    { nombre: "Ivan", horario: "12:30", id: 2 },
    { nombre: "Ivan", horario: "12:30", id: 3 },
    { nombre: "Ivan", horario: "12:30", id: 4 },
    { nombre: "Ivan", horario: "12:30", id: 5 },
    { nombre: "Ivan", horario: "12:30", id: 6 },
    { nombre: "Ivan", horario: "12:30", id: 7 },
  ];
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[200px] max-w-full rounded-lg border border-greenSpotify"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex flex-col h-full items-center justify-start p-6 overflow-y-scroll">
          <h1 className="flex justify-start items-start text-white text-xl font-bold">
            Pedidos delivery
          </h1>
          <h2>Cant:31</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-10 pb-4 items-center w-[90%] mt-8">
            {pedidosDelivery.map((pedido) => {
              return (
                <DeliveryPedidosCard
                  nombre={pedido.nombre}
                  horario={pedido.horario}
                  key={pedido.id}
                />
              );
            })}
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Pedidos mostrador</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
