'use client';

import { useParams } from 'next/navigation'
import RegisterForm from '@/components/forms/RegisterForm';
const Register = () => {

    const { userId } = useParams();
    return (
        <div>
            <section>
                <div>
                    <div>
                        <h1>Welcome 👋</h1>
                        <p>Let us know more about yourself.</p>
                    </div>

                    <RegisterForm userId={userId as string} />

                </div>
            </section>
        </div>
    )
}

export default Register