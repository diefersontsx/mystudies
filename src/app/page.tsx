import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto flex flex-row items-center justify-center p-24">
      <ThemeToggle />

    </main>
  );
}
