import './style.css';

export default function EmailInput()
{
    return (
        <>
            <div className="form-control">
                <label className="form-label">
                    Email address
                </label>
                <div className="input">
                    <input className="form-input" type="email" name="email" placeholder="name@domain.com"/>
                </div>
            </div>
        </>
    );
}