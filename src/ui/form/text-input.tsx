import './style.css';

interface TextInputProps {
    name: string;
    label?: string;
    placeholder?: string;
}

export default function TextInput({name, label, placeholder}: TextInputProps)
{
    return (
        <>
            <div className="form-control">
                {label && <label className="form-label">{label}</label>}
                <div className="input">
                    <input className="form-input"
                           type="text"
                           name={name}
                           placeholder={placeholder}
                    />
                </div>
            </div>
        </>
    );
}