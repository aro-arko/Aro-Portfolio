"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { createSkill } from "@/services/SkillService";
import { ISkill } from "@/types/skill";

const CreateSkill = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ISkill>();

  const onSubmit: SubmitHandler<ISkill> = async (values) => {
    setSubmitting(true);
    // console.log(values);
    const response = await createSkill(values);
    // console.log(response);
    setSubmitting(false);

    if (response?.success) {
      toast.success("Skill created successfully!");
      router.push("/skills");
    } else {
      toast.error("Failed to create skill.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Create Skill</CardTitle>
        </CardHeader>
        <CardContent>
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

            <Button type="submit" disabled={isSubmitting || submitting}>
              {isSubmitting || submitting ? "Creating..." : "Create Skill"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateSkill;
