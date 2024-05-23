import Navbar from "@/ui/navbar/navbar";
import "./style.css";
import Box from "@/ui/components/box";
import SocialLogin from "@/ui/social-login/social-login";
import Hr from "@/ui/tools/hr";
import Link from "next/link";
import type {Metadata} from "next";
import EmailInput from "@/ui/form/email-input";
import Button from "@/ui/form/button";
import PasswordInput from "@/ui/form/password-input";
import ToggleInput from "@/ui/form/toggle-input";
import Footer from "@/ui/footer/footer";

export const metadata: Metadata = {
  title: "Log in to Spotify"
};

export default function login() {
  return (
      <>
        <div className="login-body bg-regal-blue">
          <Navbar classes="login-navbar" logoHeight="42"/>
          <Box classes="login-box min-w-min items-center w-1/3 bg-site-base-gray">
            <header className="header">
              <h1>Log in to Spotify</h1>
            </header>
            <SocialLogin phone={true}/>
            <Hr width={320}/>
            <form className="login-form">
              <EmailInput placeholder="Email or username" label="Email or username" style='mb-5'/>
              <PasswordInput style='mb-2'/>
              <ToggleInput style='mb-5'/>
              <Button text={"log In"} marginBlockStart="0"/>
            </form>
            <Link href="/password-reset" className="underline underline-offset-1">Forgot your password?</Link>
            <Hr width={320}/>
            <div className="signup-link">
              Don&apos;t have an account? <Link href="/signup" className="underline underline-offset-1">Sign
              up for Spotify</Link>.
            </div>
          </Box>
          <Footer/>
        </div>
      </>
  );
}