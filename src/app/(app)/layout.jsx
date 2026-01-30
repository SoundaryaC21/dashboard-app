import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ClientLayout from "./ClientLayout";

export default async function AppLayout({ children }) {
  const session = await getServerSession();

  if (!session) {
    redirect("/sign-in");
  }

  return <ClientLayout>{children}</ClientLayout>;
}
