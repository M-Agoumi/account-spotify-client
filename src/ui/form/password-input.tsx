import './style.css';

interface PasswordInputProps {
    style?: string
}

export default function PasswordInput({style = ''}: PasswordInputProps)
{
    return (
        <>
            <div className={'form-control' + (style && ' ' + style)}>
                <label className="form-label">
                    Email address
                </label>
                <div className="input">
                    <input className="form-input" type="password" name="password" placeholder="Password"/>
                </div>
            </div>
        </>
    );
}