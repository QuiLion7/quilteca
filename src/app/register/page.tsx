import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import FormItems from "./components/form-item";

export default async function Register() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <main className="flex w-full items-center justify-center px-2 2xl:container">
      <FormItems />
    </main>
  );
}
