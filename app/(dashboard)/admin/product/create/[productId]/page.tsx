import Banner from "@/components/ui/banner";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import Actions from "./_components/actions";
import { IconBadge } from "@/components/ui/icon-badge";
import {
  CircleDollarSign,
  File,
  LayoutDashboard,
  ListChecks,
} from "lucide-react";
import NombreFrom from "./_components/NombreForm";
import CategoryForm from "./_components/category-form";

async function page({ params }: { params: { productId: string } }) {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const product = await db.producto.findUnique({
    where: {
      id: params.productId,
      userId,
    },
  });

  const Categories = await db.category.findMany();




  if (!product) {
    return redirect("/");
  }

  const requiredFields = [
    product.nombre,
    product.categoryId,
    product.referencia,
    product.propietarioId,
    product.ubicacion,
    product.estado,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);


  console.log(Categories);

  return (
    <>
      {!product.isPublished && (
        <Banner label="This Product is not published. It will not be visible to users" />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Product Setup</h1>
            <span className="text-sm text-slate-700">
              complete all fill fields {completionText}
            </span>
          </div>
          <Actions
            disableb={!isComplete}
            courseId={params.productId}
            isPublished={product.isPublished}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-xl">Customize your Product</h2>
            </div>

            <NombreFrom initialData={product} productId={product.id} />
            {
              /* <TittleForm initialData={course} courseId={course.id} />
            <DescriptionFrom initialData={course} courseId={course.id} />
            <ImageForm initialData={course} courseId={course.id} />*/
              <CategoryForm
                initialData={product}
                productId={product.id}
                options={Categories.map((category) => ({
                  label: category.name,
                  value: category.id,
                }))}
              />
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
