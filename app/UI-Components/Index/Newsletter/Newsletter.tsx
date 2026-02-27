export default function Newsletter() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-30 newsletter relative">
        <div className="flex flex-col items-center justify-center">
          <span className="rounded-full title-span border border-gray-400 px-6 ps-10 py-2 GolosText uppercase font-bold">
            Subscribe to the newsletter
          </span>
          <h1 className="CalSans text-center text-3xl md:text-5xl w-full lg:w-[60%] my-5">
            Манай{" "}
            <span className="text-(--prim)">
              {" "}
              мэдээллийн товхимолд нэгдэж шинэ мэдээ мэдээллээс{" "}
            </span>{" "}
            хоцрохгүй байгаарай
          </h1>
          <p className="text-center GolosText w-full text-lg lg:w-[60%] mb-5">
            Манай мэдээллийн товхимолд нэгдээрэй. Шинэ мэдлэг олж авч, онцгой
            контентод хандах боломжийг ашиглан, салбарын хамгийн сүүлийн үеийн
            мэдээ мэдээллээс цаг алдалгүй мэдээлэлтэй байгаарай.
          </p>
          <div className="email-details border-b border-gray-300 w-[450px] flex items-center transition-all duration-300 hover:border-(--prim) cursor-pointer">
            <input
              type="email"
              placeholder="Мэйл хаяг..."
              className="focus:outline-none w-full py-3"
            />
            <i className="bi bi-arrow-up-right px-2 py-1 bg-(--prim) rounded-full text-white transition-all duration-300 hover:rotate-45"></i>
          </div>
        </div>
      </div>
    </>
  );
}
