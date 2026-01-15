
import Image from 'next/image';
import PatientForm from '@/components/forms/PatientForm';

const Register = () => {

    return (
        <div className="pt-16 pb-16 bg-[#1f242c]">
            <div className="className='w-[80%] max-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Text content */}
                <div className='ml-32'>

                    {/* Sub heading */}
                    <h1
                        className='text-[#eeb956] text-lg font-medium tracking-widest'>
                        <section className='mb-12 space-y-4'>
                            <h1>Энэ өдрийн мэнд 👋</h1>
                        </section>
                    </h1>
                    {/* Main heading */}
                    <h1
                        className='text-3xl md:text-5xl font-bold mt-4 mb-8'>Шинээр захиалга үүсгэх</h1>

                    <PatientForm />
                </div>
                {/* Image content */}
                <div className='relative flex justify-center items-center'>
                    {/* Main image */}
                    <Image src={"/images/a3.png"} width={500} height={500} alt='About Main'
                        className='animate-spin [animation-duration:20s]' />
                    {/* Centered image */}
                    <Image src={"/images/a4.png"} width={350} height={350} alt='img'
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    rounded-lg md:ml-4 w-[200px] h-[200px] md:w-[350px] md:h-[350px]'/>
                </div>
            </div>
        </div>
    )
}

export default Register