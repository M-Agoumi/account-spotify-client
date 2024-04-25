import "./style.css";
import Image from 'next/image';
import Google from "./google-icon.svg";
import Facebook from "./facebook-icon.svg";
import Apple from "./apple-icon.svg";

export default function SocialLogin() {
    return (
        <>
            <div className="social-login">
                <div className="social-links">
                    <a href="#">
                        <Image src={Google}
                            alt="Google logo"
                            width={20}
                            height={20}
                        />
                        Sign up with Google
                    </a>
                    <a href="#">
                        <Image src={Facebook}
                               alt="Facebook logo"
                               width={20}
                               height={20}
                        />
                        Sign up with Facebook
                    </a>
                    <a href="#">
                        <Image src={Apple}
                               alt="Apple logo"
                               width={20}
                               height={20}
                        />
                        Sign up with Apple
                    </a>
                </div>
            </div>
        </>
    );
}