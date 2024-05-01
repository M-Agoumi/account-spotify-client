import './style.css';
import Navbar from "@/ui/navbar/navbar";
import EmailInput from "@/ui/form/email-input";
import Button from "@/ui/form/button";
import SocialLogin from "@/ui/social-login/social-login";
import Hr from "@/ui/tools/hr";
import Footer from "@/ui/footer/footer";
import Link from 'next/link'

export default function signup() {
    return (
        <>
            <div className="signup-body">
                <Navbar />
                <div className="signup">
                    <header className="header">
                        <h1>Sign up to start listening</h1>
                    </header>
                    <form className="form">
                        <EmailInput/>
                        <div className="phone-link">
                            <Link href="/login/phone?intent=signup">Use phone number instead.</Link>
                        </div>
                        <Button/>
                    </form>
                    <Hr text="or"/>
                    <SocialLogin />
                    <Hr />
                    <div className="login-link">
                        Already have an account? <Link href="/login">Log in here</Link>.
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}