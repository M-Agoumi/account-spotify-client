"use client"
import Navbar from "@/ui/navbar/navbar";
import "./style.css";
import PhoneInput from "@/ui/form/phone-input";
import Button from "@/ui/form/button";
import ToggleInput from "@/ui/form/toggle-input";
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ButtonWrapper() {
    const searchParams = useSearchParams();
    const intent = searchParams.get('intent');

    return (
        <>
            {!intent && <ToggleInput style="basis-5 float-left"/>}
        </>
    );
}

export default function Phone() {
    return (
        <>
            <Navbar logoHeight='36px'/>
            <div className="phone-login">
                <div className="form">
                    <PhoneInput name='phone' placeholder='Phone number'/>
                    <div className="basis-full mt-5">
                        <div className="button m-auto w-96">
                            <Suspense>
                                <ButtonWrapper/>
                            </Suspense>
                            <Button text='Next' style="w-15 float-right" marginBlockStart="0"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}