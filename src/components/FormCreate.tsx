import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import EditorDongeng from "./EditorDongeng";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Judul Tidak Boleh Kosong Yaa..",
  }),
  user: z.string().min(2, {
    message: "Nama Pengarang Tidak Boleh Kosong Yaa..",
  }),
  dongeng: z.string().min(100, {
    message: "Minimal Berdongeng 100 Kata Yaa..",
  }),
});
const FormCreate = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      user: "",
      dongeng: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 "
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="md:text-base lg:text-lg">
                Judul Dongeng
              </FormLabel>
              <FormControl>
                <Input placeholder="Masukan judulmu" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="user"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="md:text-base lg:text-lg">
                Pengarang Dongeng
              </FormLabel>
              <FormControl>
                <Input placeholder="Masukan namamu" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dongeng"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="md:text-base lg:text-lg">
                Cerita Dongeng
              </FormLabel>
              <FormControl>
                {/* <Input placeholder="Dongeng" {...field} /> */}
                <EditorDongeng />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full ">
          Simpan Dongeng
        </Button>
      </form>
    </Form>
  );
};

export default FormCreate;
