import Link from "next/link";
import Navbar from "@/ui/navbar/navbar";
import Hr from "@/ui/tools/hr";
import Box from "@/ui/components/box";

export default function Home() {
  return (
      <>
          <Navbar/>
          <Box classes="login-box min-w-min w-1/3 items-center bg-site-base-gray">
              <h1>this is a WIP</h1>
              <h3>pages</h3>
              <Hr text="Auth"/>
              <Link href="/signup" className="underline underline-offset-8 mb-2">signup</Link>
              <Link href="/login" className="underline underline-offset-8 mb-2">login</Link>
              <Link href="/login/phone" className="underline underline-offset-8 mb-2">login phone</Link>
              <Link href="/password-reset" className="underline underline-offset-8">password reset</Link>
          </Box>
      </>
  );
}
