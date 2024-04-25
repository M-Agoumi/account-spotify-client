import './style.css';

interface PhoneInputProps {
    name: string;
    label?: string;
    placeholder?: string;
}

export default function PhoneInput({name, label = 'Enter phone number', placeholder = 'Phone number'}: PhoneInputProps)
{
    return (
        <>
            <div className="form-control">
                {label && <label className="form-label font-extrabold text-lg text-center text-large">{label}</label>}
                <div className="form-flex">
                    <div className="input">
                        <select className="country-code form-input">
                            {/* @todo The options are hardcoded for now, but you can fetch them from an API */}
                            <option value="+1">+1</option>
                            <option value="+44">+44</option>
                            <option value="+91">+91</option>
                        </select>

                        <input className="form-input form-input-wide"
                               type="text"
                               name={name}
                               placeholder={placeholder}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}