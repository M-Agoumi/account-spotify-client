import "./style.css";

interface FooterProps {
    classes?: string
}

export default function Footer({classes = 'bg-site-base-gray'}: FooterProps) {
    return (
        <>
            <footer className={'footer ' + classes}>
                <div className="footer-content">
                    This site is protected by reCAPTCHA and the Google&nbsp;
                    <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
                </div>
            </footer>
        </>
    );
}