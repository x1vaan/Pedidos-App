export default async function DeliveryPedidosCard({
  nombre,
  horario,
}: {
  nombre: string;
  horario: string;
}) {
  return (
    <div className="w-[100px] h-full[100px] bg-slate-600 rounded-md cursor-pointer flex justify-center items-center">
      <h1 className="text-sm font-light">{nombre}</h1>
    </div>
  );
}
