import Background from "@/components/background/mainBackground";
import Link from "next/link";
import { getServerSession } from "next-auth";
import clientPromise from "@/lib/mongodb";
import Statistics from "@/components/Statistics";
import MainNavigation from "@/components/navigation/main-navigationBar";
export default async function TestPage() {
  const session = await getServerSession();
  const client = await clientPromise;
  var statistics;

  if (session) {
    const res = await client
      .db("User")
      .collection("UserAccount")
      .findOne({ name: session.user.name });

    statistics = res.statistics;
  }

  console.log(statistics);
  return (
    <>
      <MainNavigation />
      <Background>
        <div className="flex">
          <section className="grid w-3/4 grid-cols-3 auto-rows-[150px] gap-3">
            <article className="flex items-center justify-center text-2xl font-bold bg-white border-2 border-black border-solid">
              필기
            </article>
            <article className="flex items-center justify-center col-span-2 row-span-2 text-2xl font-bold bg-white border-2 border-black border-solid">
              오답노트
            </article>
            <article className="flex items-center justify-center text-2xl font-bold bg-white border-2 border-black border-solid">
              <Link
                href="/test/practicaltest"
                className="flex items-center justify-center w-full h-full"
              >
                실기
              </Link>
            </article>
          </section>

          <Statistics statistics={statistics} />
        </div>
      </Background>
    </>
  );
}
