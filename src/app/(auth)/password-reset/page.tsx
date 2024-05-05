import Navbar from "@/ui/navbar/navbar";
import Box from "@/ui/components/box";
import EmailInput from "@/ui/form/email-input";
import Button from "@/ui/form/button";
import Link from "next/link";
import Footer from "@/ui/footer/footer";
import './style.css';


export default function resetPassword() {
	return (
			<>
				<div className='reset-password-body'>
					<Navbar classes='reset-password-navbar' logoHeight='34'/>
					<Box classes='reset-password-box min-w-96 w-1/3 max-w-105 min-h-[75vh] bg-site-base-gray'>
						<header className='header'>
							<h1 className="text-xl font-semibold">Reset your password</h1>
							<p>Enter your email address or username, and we&apos;ll send you a link to get back into your account.</p>
						</header>
						<form className='reset-password-form mt-4'>
							<EmailInput placeholder='' label='Email address or username' style='mb-5'/>
							{/* @todo add link when support services is created */}
							<Link href='#' className='underline underline-offset-1 text-sm'>Need support?</Link>
							<Button text='Send link' style='max-w-80 mx-auto mt-12 block'/>
						</form>
					</Box>
					<Footer classes='bg-site-second-gray'/>
				</div>
			</>
	);
}