import Logo from "@/ui/logo";
import './style.css';
import Link from "next/link";

interface NavbarProps {
    logoHeight?: string;
    classes?: string;
}

export default function Navbar({ logoHeight = '32', classes='' }: NavbarProps) {
    return (
        <header className={'navbar' + (classes && ' ' + classes)}>
           <Link href="/">
               <Logo height={logoHeight}/>
           </Link>
        </header>
    );
}