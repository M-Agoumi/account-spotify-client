import './style.css';

interface ButtonProps {
    text?: string;
    style?: string;
    marginBlockStart?: string;
}

export default function Button({ text = 'Next', style = '', marginBlockStart = '20px' }: ButtonProps) {
    const marginBlockStartStyle = marginBlockStart ? { marginBlockStart: marginBlockStart} : {};
    return (
        <>
            <button className={'form-button' + (style && ' ' + style)} style={marginBlockStartStyle}>
                <span>{text}</span>
            </button>
        </>
    );
}