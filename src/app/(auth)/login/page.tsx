import Navbar from "@/ui/navbar/navbar";
import "./style.css";
import Box from "@/ui/components/box";
import SocialLogin from "@/ui/social-login/social-login";

export default function login() {
    return (
        <>
            <Navbar classes="login-navbar" logoHeight="42"/>
            <Box classes="login-box">
                <header className="header">
                    <h1>Log in to Spotify</h1>
                    <SocialLogin />
                </header>
            </Box>
        </>
    );
}