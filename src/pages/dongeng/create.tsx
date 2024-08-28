import FormCreate from "@/components/FormCreate";

export default function Create() {
  return (
    <main className="pt-20 min-h-screen md:pt-28 duration-500 transition-all ease-out">
      <p className="text-lg text-center md:text-xl lg:text-2xl">
        Buat Dongengmu Sekarang :)
      </p>
      <section className="pt-5 pb-10">
        <FormCreate />
      </section>
    </main>
  );
}
