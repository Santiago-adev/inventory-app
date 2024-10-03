"use client";

import * as z from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

import {
  FormControl,
  Form,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";

const formShema = z.object({
  nombre: z
    .string()
    .min(1, {
      message: "title is required",
    })
    .max(50, {
      message: "very long message",
    }),
});

const CreatePage = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formShema>>({
    resolver: zodResolver(formShema),
    defaultValues: {
      nombre: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formShema>) => {
    try {
      const response = await axios.post("/api/product", values);
      router.push(`/admin/product/create/${response.data.id}`);
      toast.success("Course created");
    } catch {
      toast.error("Something webt wrong");
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">Assign a name of the person in charge</h1>
        <p className="text-sm text-slate-600">
          What is the name of the person responsible for this Product? Don't
          worry, you can change the latter.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g 'Elsa'"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href="/">
                <Button type="button" variant="ghost">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" disabled={!isValid || isSubmitting}>
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreatePage;
