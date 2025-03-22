"use client";

import { useEffect, useState } from "react";
import {
  useForm,
  useFieldArray,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { getBlogById, updateBlog, deleteBlog } from "@/services/BlogService";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

const BlogDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const {
    fields: tagFields,
    append: appendTag,
    remove: removeTag,
  } = useFieldArray({
    control,
    name: "tags",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getBlogById(id as string);
      if (response?.success && response.data) {
        reset(response.data);
      }
      setLoading(false);
    };
    fetchData();
  }, [id, reset]);

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const response = await updateBlog(id as string, values);
    if (response?.success) {
      toast.success("Blog updated successfully!");
    } else {
      toast.error("Failed to update blog.");
    }
  };

  const handleDelete = async () => {
    const res = await deleteBlog(id as string);
    if (res?.success) {
      toast.success("Blog deleted successfully");
      router.push("/blogs");
    } else {
      toast.error("Failed to delete blog");
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Edit Blog</CardTitle>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-500" size="sm">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  blog post.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDelete}
                  className="bg-red-600 text-white hover:bg-red-700"
                >
                  Yes, Delete It
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardHeader>

        <CardContent>
          {loading ? (
            <p className="text-muted-foreground">Loading...</p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="blog_no">Blog No</Label>
                  <Input
                    id="blog_no"
                    {...register("blog_no")}
                    type="number"
                    readOnly
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" {...register("title")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="banner">Banner URL</Label>
                  <Input id="banner" {...register("banner")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" {...register("date")} />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" {...register("description")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="middleImage">Middle Image</Label>
                  <Input id="middleImage" {...register("middleImage")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="middleTitle">Middle Title</Label>
                  <Input id="middleTitle" {...register("middleTitle")} />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="middleDescription">Middle Description</Label>
                  <Textarea {...register("middleDescription")} />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="middleDescription2">
                    Middle Description 2
                  </Label>
                  <Textarea {...register("middleDescription2")} />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="bottomDescription">Bottom Description</Label>
                  <Textarea {...register("bottomDescription")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="readTime">Read Time</Label>
                  <Input id="readTime" {...register("readTime")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Input id="author" {...register("author")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input id="category" {...register("category")} />
                </div>
              </div>

              <hr className="my-6" />

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

              <Button type="submit" disabled={isSubmitting} className="mt-6">
                {isSubmitting ? "Updating..." : "Update Blog"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogDetails;
