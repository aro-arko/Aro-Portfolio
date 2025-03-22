"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { IProject } from "@/types";
import { createProject } from "@/services/ProjectService";
import { toast } from "sonner";

const CreateProject = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<IProject>();

  const {
    fields: challengeFields,
    append: appendChallenge,
    remove: removeChallenge,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  } = useFieldArray({ control, name: "challenge.challenges" });
  const {
    fields: solutionFields,
    append: appendSolution,
    remove: removeSolution,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  } = useFieldArray({ control, name: "solution.solutions" });
  const {
    fields: resultFields,
    append: appendResult,
    remove: removeResult,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  } = useFieldArray({ control, name: "result.results" });

  const onSubmit = async (values: IProject) => {
    const response = await createProject(values);
    if (response?.success) {
      toast.success("Project created successfully");
      reset();
      router.push("/projects");
    } else {
      toast.error("Failed to create project");
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Create Project</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" {...register("title")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="banner">Banner</Label>
                <Input id="banner" {...register("banner")} />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" {...register("description")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="livePreview">Live Preview</Label>
                <Input id="livePreview" {...register("livePreview")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="github">GitHub</Label>
                <Input id="github" {...register("github")} />
              </div>
            </div>

            <hr className="my-6" />

            <h3 className="text-xl font-semibold">Challenge</h3>
            <div className="space-y-2">
              <Label htmlFor="challenge.image">Image URL</Label>
              <Input {...register("challenge.image")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="challenge.description">Description</Label>
              <Textarea {...register("challenge.description")} />
            </div>
            <div className="space-y-2">
              <Label>Challenges</Label>
              {challengeFields.map((field, index) => (
                <div
                  key={field.id}
                  className="flex items-center gap-2 space-y-2"
                >
                  <Input
                    {...register(`challenge.challenges.${index}`)}
                    className="w-full"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeChallenge(index)}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              ))}
              <Button
                className=""
                type="button"
                onClick={() => appendChallenge("")}
              >
                Add Challenge
              </Button>
            </div>

            <hr className="my-6" />

            <h3 className="text-xl font-semibold space-y-2">Solution</h3>
            <div className="space-y-2">
              <Label htmlFor="solution.image">Image URL</Label>
              <Input {...register("solution.image")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="solution.description">Description</Label>
              <Textarea {...register("solution.description")} />
            </div>
            <div className="space-y-2">
              <Label>Solutions</Label>
              {solutionFields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-2">
                  <Input
                    {...register(`solution.solutions.${index}`)}
                    className="w-full"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeSolution(index)}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              ))}
              <Button type="button" onClick={() => appendSolution("")}>
                Add Solution
              </Button>
            </div>

            <hr className="my-6" />

            <h3 className="text-xl font-semibold">Result</h3>
            <div className="space-y-2">
              <Label htmlFor="result.image">Image URL</Label>
              <Input {...register("result.image")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="result.description">Description</Label>
              <Textarea {...register("result.description")} />
            </div>
            <div className="space-y-2">
              <Label>Results</Label>
              {resultFields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-2">
                  <Input
                    {...register(`result.results.${index}`)}
                    className="w-full"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeResult(index)}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              ))}
              <Button type="button" onClick={() => appendResult("")}>
                Add Result
              </Button>
            </div>

            <Button type="submit" disabled={isSubmitting} className="mt-6">
              {isSubmitting ? "Creating..." : "Create Project"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateProject;
