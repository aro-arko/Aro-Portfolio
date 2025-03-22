"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

import { createExperience } from "@/services/ExperienceService";
import { IExperience } from "@/types/experience";

const CreateExperience = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit } = useForm<IExperience>();

  const onSubmit: SubmitHandler<IExperience> = async (values) => {
    setSubmitting(true);
    const res = await createExperience(values);
    setSubmitting(false);

    if (res?.success) {
      toast.success("Experience created successfully!");
      router.push("/experiences");
    } else {
      toast.error("Failed to create experience.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Create Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" {...register("title", { required: true })} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                {...register("company", { required: true })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Type</Label>
              <Input id="type" {...register("type", { required: true })} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration</Label>
              <Input
                id="duration"
                {...register("duration", { required: true })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Textarea
                id="location"
                {...register("location", { required: true })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="logo">Logo URL</Label>
              <Input id="logo" {...register("logo", { required: true })} />
            </div>

            <Button type="submit" disabled={submitting}>
              {submitting ? "Creating..." : "Create Experience"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateExperience;
