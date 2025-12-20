import { UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>Home page</div>
      <div><UserButton /></div>
    </div>
  );
}