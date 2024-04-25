import Logo from "@/ui/logo";
import './style.css';

interface NavbarProps {
    logoHeight?: string;
    classes?: string;
}

export default function Navbar({ logoHeight = '32', classes='' }: NavbarProps) {
    return (
        <header className={'navbar' + (classes && ' ' + classes)}>
            <Logo height={logoHeight}/>
        </header>
    );
}