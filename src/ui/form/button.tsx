import './style.css';

interface ButtonProps {
    text?: string;
    style?: string;
}

export default function Button({ text = 'Next', style = '' }: ButtonProps) {
    return (
        <>
            <button className={'form-button' + (style && ' ' + style)}>
                <span>{text}</span>
            </button>
        </>
    );
}