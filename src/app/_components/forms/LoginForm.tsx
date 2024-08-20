"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import * as z from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email({ message: "Email tiene que ser un email valido." }),
  password: z
    .string()
    .min(4, { message: "La contraseña debe tener al menos 4 caracteres." })
    .max(20, {
      message: "La contraseña debe tener como maximo 20 caracteres.",
    }),
});

export default function LoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitLogin = (values: z.infer<typeof formSchema>) => {
    // mutate(values)
    console.log(values);
    toast.success("Sesion iniciada");
  };
  return (
    <Form {...form}>
      <div className="w-[70%] h-full flex justify-start items-center relative">
        <form
          onSubmit={form.handleSubmit(submitLogin)}
          className="w-full flex flex-col items-center gap-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-textGray">Email:</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full mb-3">
                <FormLabel className="text-textGray">Contraseña:</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Contraseña" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full justify-start items-center mb-3 gap-4">
            <Button
              className="bg-greenSpotify w-[200px] text-black hover:bg-greenSpotify/80"
              type="submit"
            >
              Entrar
            </Button>
          </div>
        </form>
      </div>
    </Form>
  );
}
