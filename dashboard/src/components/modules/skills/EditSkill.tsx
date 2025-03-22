"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import {
  getSkillById,
  updateSkill,
  deleteSkill,
} from "@/services/SkillService";

const EditSkill = () => {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSkillById(id as string);
      if (response?.success && response.data) {
        reset(response.data);
      }
      setLoading(false);
    };
    fetchData();
  }, [id, reset]);

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    console.log(values);
    const res = await updateSkill(id as string, values);
    console.log(res);
    if (res?.success) {
      toast.success("Skill updated successfully!");
      router.push("/skills");
    } else {
      toast.error("Failed to update skill.");
    }
  };

  const handleDelete = async () => {
    const res = await deleteSkill(id as string);
    if (res?.success) {
      toast.success("Skill deleted successfully!");
      router.push("/skills");
    } else {
      toast.error("Failed to delete skill.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Edit Skill</CardTitle>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size="sm" className="bg-red-600 hover:bg-red-500">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  skill.
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
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" {...register("title", { required: true })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="icon">Icon URL</Label>
                <Input id="icon" {...register("icon", { required: true })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  {...register("category", { required: true })}
                />
              </div>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Updating..." : "Update Skill"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EditSkill;
