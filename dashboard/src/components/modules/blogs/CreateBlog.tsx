"use client";

import {
  useForm,
  useFieldArray,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { createBlog } from "@/services/BlogService";

const CreateBlog = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, control } = useForm();

  const {
    fields: tagFields,
    append: appendTag,
    remove: removeTag,
  } = useFieldArray({
    control,
    name: "tags",
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    setSubmitting(true);
    console.log(values);
    const response = await createBlog(values);
    console.log(response);
    setSubmitting(false);

    if (response?.success) {
      toast.success("Blog created successfully!");
      router.push("/blogs");
    } else {
      toast.error("Failed to create blog.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Create Blog</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" {...register("title", { required: true })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="banner">Banner URL</Label>
                <Input
                  id="banner"
                  {...register("banner", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  {...register("date", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="readTime">Read Time</Label>
                <Input id="readTime" {...register("readTime")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  {...register("author", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  {...register("category", { required: true })}
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  {...register("description", { required: true })}
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="middleImage">Middle Image</Label>
                <Input id="middleImage" {...register("middleImage")} />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="middleTitle">Middle Title</Label>
                <Input id="middleTitle" {...register("middleTitle")} />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="middleDescription">Middle Description</Label>
                <Textarea {...register("middleDescription")} />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="middleDescription2">Middle Description 2</Label>
                <Textarea {...register("middleDescription2")} />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="bottomDescription">Bottom Description</Label>
                <Textarea {...register("bottomDescription")} />
              </div>
            </div>

            <hr className="my-4" />

            <div className="space-y-2">
              <Label>Tags</Label>
              {tagFields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-2">
                  <Input {...register(`tags.${index}`)} className="w-full" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeTag(index)}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              ))}
              <Button type="button" onClick={() => appendTag("")}>
                Add Tag
              </Button>
            </div>

            <Button type="submit" disabled={submitting}>
              {submitting ? "Creating..." : "Create Blog"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateBlog;
