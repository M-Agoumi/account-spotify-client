import Link from "next/link";
import Navbar from "@/ui/navbar/navbar";
import Hr from "@/ui/tools/hr";

export default function Home() {
  return (
      <>
          <Navbar/>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
              <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

                  <div className="container">
                      <h1>this is a WIP</h1>
                      <Link href={"/login"}>login</Link>
                      <Hr/>
                      <Link href={"/signup"}>signup</Link>
                  </div>
              </div>
          </main>
      </>
  );
}
