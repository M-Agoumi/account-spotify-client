import './style.css';

interface EmailInputProps {
    placeholer?: string,
    label?: string,
    style?: string
}

export default function EmailInput({placeholer = "name@domain.com", label = "Email address", style = ''}: EmailInputProps) {
    return (
        <>
            <div className={'form-control' + (style && ' ' + style)}>
                <label className="form-label">
                    {label}
                </label>
                <div className="input">
                    <input className="form-input" type="email" name="email" placeholder={placeholer}/>
                </div>
            </div>
        </>
    );
}