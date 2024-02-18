import { Button } from "@nextui-org/button";

export default function ContentHome() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Button isLoading radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
        Abrir Caja
      </Button>
    </div>
  );
}
