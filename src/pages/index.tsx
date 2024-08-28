import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface homeProps {
  status: number;
  message: string;
}

export default function Home(props: homeProps) {
  //  const resultData = status;
  //  console.log(resultData)
  // console.log(props)
  return (
    <main className="min-h-screen flex flex-col pt-20 pb-10 items-center gap-10 md:p-0 md:flex-row lg:justify-evenly ">
      <section className="min-w-80 max-w-11/12 md:grow lg:grow-0 lg:w-5/12 lg:max-w-6/12 duration-500 transition-all ease-out">
        <Image
          src={"/assets/images/home.png"}
          alt="Home Image"
          width={500}
          height={500}
          className="w-full"
        />
      </section>
      <section className="md:w-7/12 lg:w-4/12">
        <p className="text-2xl font-bold mb-5 md:text-3xl lg:text-4xl lg:font-extrabold">
          Selamat Datang, Pendongeng Handal!
        </p>
        <p className="text-justify text-base mb-5 text-gray-500 md:text-lg lg:text-xl">
          Mendongeng adalah kreatifitas, bukan hanya karangan. Nikmati setiap
          dongeng dari proses kreatif dan ingatlah bahwa setiap dongeng membawa
          Anda lebih dekat pada imajinasi yang hebat.
        </p>
        <Button
          variant={"outline"}
          className="font-semibold text-lg py-6 px-10 md:text-xl md:py-8 md:px-12 "
        >
          <Link href={"/dongeng"}>Mari Mendongeng!</Link>
        </Button>
      </section>
    </main>
  );
}

// export async function  getServerSideProps() {
//   const response = await fetch("http://localhost:8000/about",)
//   const data = await response.json()

//   return {props:data}
// }
