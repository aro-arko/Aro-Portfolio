"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import {
  getExperienceById,
  updateExperience,
} from "@/services/ExperienceService";
import { IExperience } from "@/types/experience";

const EditExperience = () => {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IExperience>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getExperienceById(id as string);
      if (response?.success && response.data) {
        reset(response.data);
      }
      setLoading(false);
    };
    fetchData();
  }, [id, reset]);

  const onSubmit: SubmitHandler<IExperience> = async (values) => {
    const res = await updateExperience(id as string, values);
    if (res?.success) {
      toast.success("Experience updated successfully!");
      router.push("/experiences");
    } else {
      toast.error("Failed to update experience.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Edit Experience</CardTitle>
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

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Updating..." : "Update Experience"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EditExperience;
