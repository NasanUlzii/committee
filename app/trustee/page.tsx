//import { PatientForm } from "@/components/forms/PatientForm";
//import { PasskeyModal } from "@/components/PasskeyModal";
import PatientForm from "@/components/forms/PatientForm";
import TrusteeForm from "@/components/forms/TrusteeForm";
import Image from "next/image";
import Link from "next/link";
import { BiSolidBusiness } from 'react-icons/bi'

export default function TrusteeHome() {

    return (
        <section className="grid p-12 gap-8 md:items-center md:grid-cols-2">
            <div>

                <div className='flex items-center space-x-2'>
                    <div className='w-10 h-10 bg-[#b69974] rounded-full flex items-center justify-center flex-col'>
                        <BiSolidBusiness className='w-10 h-10 text-white' />
                    </div>
                    <h1 className='text-xl sm:block md:text-2xl text-[#d5b68c]'>Мэдикс эмнэлэг</h1>
                </div>
                <TrusteeForm />
            </div>
            <div>
                <Image
                    src="/assets/images/onboarding-img.png"
                    alt="patient"
                    height={1000}
                    width={1000}
                    className="w-full rounded-lg" />
            </div>
        </section>
    );
}
