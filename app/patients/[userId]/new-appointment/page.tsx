'use client';
import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { useParams } from "next/navigation";

const NewAppointment = () => {

    //const patient = await getPatient(patientId);
    const { userId } = useParams();
    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container my-auto">
                <div className="sub-container max-w-[860px] flex-1 justify-between">
                    <AppointmentForm
                        userId={userId as string}
                        type="create"
                    />

                    <p className="copyright mt-10 py-12">© 2024 CarePluse</p>
                </div>
            </section>


        </div>
    );
};

export default NewAppointment;
