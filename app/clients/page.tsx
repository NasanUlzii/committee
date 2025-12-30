//import { PatientForm } from "@/components/forms/PatientForm";
//import { PasskeyModal } from "@/components/PasskeyModal";
import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";
import { BiSolidBusiness } from 'react-icons/bi'

export default function PatientsHome() {

    //const isAdmin = searchParams.admin === 'true';
    return (
        <div className="flex h-screen max-h-screen">
            {/* {isAdmin && <PasskeyModal />} */}
            <section className="remove-scrollbar container my-auto">
                <div className="sub-container ml-40 max-w-[496px]">

                    <div className='flex items-center space-x-2'>
                        <div className='w-10 h-10 bg-[#b69974] rounded-full flex items-center justify-center flex-col'>
                            <BiSolidBusiness className='w-10 h-10 text-white' />
                        </div>
                        <h1 className='text-xl hidden sm:block md:text-2xl text-[#d5b68c]'>Мэдикс эмнэлэг</h1>
                    </div>
                    <PatientForm />
                    <div className="text-14-regular mt-20 flex justify-between">
                        <p className="justify-items-end text-dark-600 xl:text-left">
                            © 2025 Mediks
                        </p>
                        <Link href="/?admin=true" className="text-green-500">Admin</Link>
                    </div>
                </div>
            </section>
            <Image
                src="/assets/images/onboarding-img.png"
                alt="patient"
                height={1000}
                width={1000}
                className="side-img max-w-[50%]" />
        </div>
    );
}
