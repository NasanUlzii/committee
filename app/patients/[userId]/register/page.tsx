'use client';
import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image';
import RegisterForm from '@/components/forms/RegisterForm';
const Register = () => {

    const { userId } = useParams();
    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container mx-12">
                <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
                    <Image
                        src="/assets/icons/logo-full.svg"
                        height={1000}
                        width={1000}
                        alt="patient"
                        className="mb-12 h-10 w-fit" />

                    <RegisterForm userId={userId as string} />

                    <p className="copyright py-12">
                        © 2025 Mediks
                    </p>

                </div>
            </section>
            <Image
                src="/assets/images/register-img.png"
                alt="patient"
                height={1000}
                width={1000}
                className="side-img max-w-[390px]" />
        </div>
    )
}

export default Register