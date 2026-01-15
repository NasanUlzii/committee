//import { PatientForm } from "@/components/forms/PatientForm";
//import { PasskeyModal } from "@/components/PasskeyModal";
import PatientForm from "@/components/forms/PatientForm";
import TrusteeForm from "@/components/forms/TrusteeForm";
import Image from "next/image";
import Link from "next/link";
import { BiSolidBusiness } from 'react-icons/bi'

export default function TrusteeHome() {

    return (
        <div className="flex flex-col md:flex-row md:items-start md:gap-8">
            <div className="flex-1 flex flex-col items-center mt-8">
                <TrusteeForm />
            </div>
            <div className="flex-1 flex items-start justify-center mt-8 md:mr-8">
                <Image
                    src="/assets/images/onboarding-img.png"
                    alt="patient"
                    height={1000}
                    width={1000}
                    className="w-full rounded-lg" />
            </div>
        </div>
    );
}
