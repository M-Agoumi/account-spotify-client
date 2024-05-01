"use client"
import Navbar from "@/ui/navbar/navbar";
import "./style.css";
import PhoneInput from "@/ui/form/phone-input";
import Button from "@/ui/form/button";
import ToggleInput from "@/ui/form/toggle-input";
import { useSearchParams } from 'next/navigation'

export default function Phone() {
    const searchParams = useSearchParams();
    const intent = searchParams.get('intent');

    return (
        <>
            <Navbar logoHeight='36px'/>
            <div className="phone-login">
                <div className="form">
                    <PhoneInput name='phone' placeholder='Phone number'/>
                    <div className="basis-full mt-5">
                        <div className="button m-auto w-96">
                            {!intent && <ToggleInput style="basis-5 float-left"/>}
                            <Button text='Next' style="w-15 float-right" marginBlockStart="0"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}