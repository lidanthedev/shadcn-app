import Nav from "@/components/Nav";
import { UserForm } from "@/components/UserForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-24">
      <Nav />
      <section className="py-24 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold">Shadcn very cool</h1>
        <p className="text-2xl text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, similique?</p>
      </section>
      <div className="flex gap-6 items-center justify-center">
        <Button>Learn More</Button>
        <Button variant={"secondary"}>Later</Button>
      </div>

      <UserForm />
    </main>
  );
}
