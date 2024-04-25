import Link from "next/link";
import Navbar from "@/ui/navbar/navbar";
import Hr from "@/ui/tools/hr";
import Box from "@/ui/components/box";

export default function Home() {
  return (
      <>
          <Navbar/>
          <Box classes="login-box min-w-min w-1/3 ">
              <h1>this is a WIP</h1>
              <h3>pages</h3>
              <Hr/>
              <Link href={"/signup"} className="underline">signup</Link>
              <Link href={"/login"} className="underline">login</Link>
              <Link href={"/login/phone"} className="underline">login phone</Link>
          </Box>
      </>
  );
}
