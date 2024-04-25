import "./style.css";

interface HrProps {
    text?: string;
}
export default function Hr({ text }: HrProps) {
    return (
        <>
            <div className="divider">
                {text && <span>{text}</span>}
            </div>
        </>
    );
}