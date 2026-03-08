import Image from "next/image";
import PatientForm from "@/components/forms/PatientForm";

const Register = () => {
  return (
    <div className="hero">
      <div className="w-full px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
          <div className="p-6 ">
            {/* Sub heading */}
            <h1 className="text-[#eeb956] text-lg font-small md:font-medium tracking-widest mb-12">
              Энэ өдрийн мэнд 👋
            </h1>

            {/* Main heading */}
            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-8">
              Шинээр захиалга үүсгэх
            </h1>

            <PatientForm />
          </div>
          {/* Image content */}
          <div className="hidden lg:block mt-32">
            <div className="relative flex justify-center items-center">
              {/* Main image */}
              <Image
                src={"/images/p2.png"}
                width={500}
                height={500}
                alt="About Main"
                className="animate-spin [animation-duration:20s]"
              />
              {/* Centered image */}
              <Image
                src={"/images/a4.png"}
                width={350}
                height={350}
                alt="img"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    rounded-4xl md:ml-4 w-[200px] h-[200px] md:w-[350px] md:h-[350px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
