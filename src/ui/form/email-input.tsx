import './style.css';

interface EmailInputProps {
    placeholder?: string,
    label?: string,
    style?: string,
    name?: string
}

export default function EmailInput({placeholder = "name@domain.com", label = "Email address", name = 'email', style = ''}: EmailInputProps) {
    return (
        <>
            <div className={'form-control' + (style && ' ' + style)}>
                <label className="form-label">
                    {label}
                </label>
                <div className="input">
                    <input className="form-input" type="email" name={name} placeholder={placeholder}/>
                </div>
            </div>
        </>
    );
}