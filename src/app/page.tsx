import { Button } from "@nextui-org/button";
import SideBar from "./_components/SideBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row">
        <SideBar />
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
          Abrir Caja
        </Button>
      </div>
    </main>
  );
}
