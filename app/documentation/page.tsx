import Link from "next/link";
import DocumHero from "../UI-Components/Index/Hero/DocumHero";

function page() {
  return (
    <>
      <DocumHero
        title="Манай бодлогьг тодорхойлсон бичиг баримтууд"
        text="Ахмад настнуудын туршлага бүрийг аюулгүй, шударга, итгэлцэлд суурилсан байлгахад чиглэсэн бидний халамж үйлчилгээний бодлого, зарчмуудтай танилцана уу."
        img="/older/pic15.webp"
      />

      <div className="w-full px-[8%] lg:px-[12%] py-10 mt-0 md:mt-[2%]">
        <div className="flex flex-col lg:flex-row gap-5 h-full mt-10">
          <div className="w-full lg:w-1/1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* 1 */}
              <div
                key={1}
                className="pricing-card bg-white shadow p-5 rounded-2xl"
              >
                <h2 className="GolosText font-semibold text-3xl mb-5">
                  Ерөнхий баримтууд
                </h2>

                <div className="flex flex-col gap-2 my-5">
                  <p className="text-gray-800 font-semibold text-[21px] GolosText">
                    <i className="bi bi-check-circle-fill text-(--prim)"></i>{" "}
                    <Link href="/documentation/safeguarding-at-medx">
                      Мэдикс дахь Хамгааллын Бодлого
                    </Link>
                    <br />
                    <i className="bi bi-check-circle-fill text-(--prim)"></i>{" "}
                    <Link href="/documentation/medx-respect-anti-discrimination-policy">
                      Хүндлэл ба ялгаварлан гадуурхалтын эсрэг бодлого
                    </Link>
                    <br />
                    <i className="bi bi-check-circle-fill text-(--prim)"></i>{" "}
                    <Link href="/documentation/medx-community-standards">
                      Олон нийтийн ёс зүйн хэм хэмжээ
                    </Link>
                    <br />
                    <i className="bi bi-check-circle-fill text-(--prim)"></i>{" "}
                    <Link href="/documentation/safety-trust-at-medx">
                      Итгэлцэл ба аюулгүй байдал
                    </Link>
                    <br />
                    <i className="bi bi-check-circle-fill text-(--prim)"></i>{" "}
                    <Link href="/complaints-policy">Гомдол хүлээн авах</Link>
                    <br />
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div
                key={2}
                className="pricing-card bg-white shadow p-5 rounded-2xl"
              >
                <h2 className="GolosText font-semibold text-3xl mb-5">
                  Асрагчдын баримтууд
                </h2>

                <div className="flex flex-col gap-2 my-5">
                  <p className="text-gray-800 font-semibold text-[21px] GolosText">
                    <i className="bi bi-check-circle-fill text-(--prim)"></i>{" "}
                    <Link href="/documentation/carer-standards">
                      Ажилчдын хэв хэмжээ
                    </Link>
                    <br />
                    <i className="bi bi-check-circle-fill text-(--prim)"></i>{" "}
                    <Link href="/documentation/what-a-self-employed-carer-can-expect-from-an-medx-placement">
                      Бие даасан асран хамгаалагч Ахмадын асрамжийн
                      байгууллагаас юу хүлээж болох вэ
                    </Link>
                    <br />
                    <i className="bi bi-check-circle-fill text-(--prim)"></i>{" "}
                    <Link href="/documentation/what-self-employed-carers-can-expect-from-medx">
                      Бие даасан асран хамгаалагч компаниас юу хүлээж болох вэ
                    </Link>
                    <br />
                    <i className="bi bi-check-circle-fill text-(--prim)"></i>{" "}
                    <Link href="/carer-privacy">
                      Ажилчдын нууцлалын бодлого
                    </Link>
                    <br />
                    <i className="bi bi-check-circle-fill text-(--prim)"></i>{" "}
                    <Link href="/carer-terms">Ажилчдын нөхцөл ба журам</Link>
                    <br />
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div
                key={3}
                className="pricing-card bg-white shadow p-5 rounded-2xl"
              >
                <h2 className="GolosText font-semibold text-3xl mb-5">
                  Хэрэглэгчдийн баримтууд
                </h2>

                <div className="flex flex-col gap-2 my-5">
                  <p className="text-gray-800 font-semibold text-[21px] GolosText">
                    <i className="bi bi-check-circle-fill text-(--prim)"></i>{" "}
                    <Link href="/documentation/medx-standards">
                      Хэрэглэгчдэд зориулсан тусламж
                    </Link>
                    <br />
                    <i className="bi bi-check-circle-fill text-(--prim)"></i>{" "}
                    <Link href="/privacy">Нууцлалын бодлого</Link>
                    <br />
                    <i className="bi bi-check-circle-fill text-(--prim)"></i>{" "}
                    <Link href="/terms">Хэрэглэгчдийн нөхцөл ба журам</Link>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
