import "./style.css";

interface HrProps {
    text?: string;
    width?: number;
    backgroundColor?: string;
}
export default function Hr({ text, width, backgroundColor}: HrProps) {
    const widthStyle = width ? { width: width } : {};
    const backgroundStyle = backgroundColor ? { background: backgroundColor } : {};
    return (
        <>
            <div className="divider" style={widthStyle}>
                {text && <span style={backgroundStyle}>{text}</span>}
            </div>
        </>
    );
}