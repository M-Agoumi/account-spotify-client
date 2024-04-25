import Navbar from "@/ui/navbar/navbar";
import "./style.css";
import PhoneInput from "@/ui/form/phone-input";
import Button from "@/ui/form/button";


export default function phone() {
    return (
        <>
            <Navbar logoHeight='36px'/>
            <div className="phone-login">
                <div className="form">
                    <PhoneInput name='phone' placeholder='Phone number'/>
                    <div className="button">
                        <Button text='Next' style="button-left"/>
                    </div>
                </div>
            </div>
        </>
    );
}