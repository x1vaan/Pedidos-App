// import { Button } from "@nextui-org/button";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import LoginForm from "./forms/LoginForm";

export default function ContentHome() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <LoginForm />
      {/* <Button
        disabled
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      >
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Abrir Caja
      </Button> */}
    </div>
  );
}
