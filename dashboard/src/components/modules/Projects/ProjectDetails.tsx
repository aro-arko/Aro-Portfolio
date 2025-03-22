"use client";

import { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { IProject } from "@/types";
import {
  getProjectById,
  updateProject,
  deleteProject,
} from "@/services/ProjectService";
import { toast } from "sonner";

const ProjectDetails = () => {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;

  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting },
  } = useForm<
    IProject & {
      challenge: { challenges: string[] };
      solution: { solutions: string[] };
    }
  >();

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

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProjectById(projectId);
      if (response?.success && response.data) {
        reset(response.data);
      }
      setLoading(false);
    };
    fetchData();
  }, [projectId, reset]);

  const onSubmit = async (values: IProject) => {
    const response = await updateProject(projectId, values);
    if (response?.success) {
      toast.success("Project updated successfully");
    } else {
      toast.error("Failed to update project");
    }
  };

  const handleDelete = async () => {
    const response = await deleteProject(projectId);
    if (response?.success) {
      toast.success("Project deleted successfully");
      router.push("/projects");
    } else {
      toast.error("Failed to delete project");
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Project Details</CardTitle>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-500" size="sm">
                <Trash2 className="mr-2 h-4 w-4" /> Delete Project
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  project.
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
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" {...register("title")} />
                </div>
                <div>
                  <Label htmlFor="banner">Banner</Label>
                  <Input id="banner" {...register("banner")} />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" {...register("description")} />
                </div>
                <div>
                  <Label htmlFor="livePreview">Live Preview</Label>
                  <Input id="livePreview" {...register("livePreview")} />
                </div>
                <div>
                  <Label htmlFor="github">GitHub</Label>
                  <Input id="github" {...register("github")} />
                </div>
              </div>

              <hr className="my-6" />

              <h3 className="text-xl font-semibold">Challenge</h3>
              <div>
                <Label htmlFor="challenge.image">Image URL</Label>
                <Input {...register("challenge.image")} />
              </div>
              <div>
                <Label htmlFor="challenge.description">Description</Label>
                <Textarea {...register("challenge.description")} />
              </div>
              <div className="space-y-2">
                <Label>Challenges</Label>
                {challengeFields.map((field, index) => (
                  <div key={field.id} className="flex items-center gap-2">
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
                <Button type="button" onClick={() => appendChallenge("")}>
                  Add Challenge
                </Button>
              </div>

              <hr className="my-6" />

              <h3 className="text-xl font-semibold">Solution</h3>
              <div>
                <Label htmlFor="solution.image">Image URL</Label>
                <Input {...register("solution.image")} />
              </div>
              <div>
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
              <div>
                <Label htmlFor="result.image">Image URL</Label>
                <Input {...register("result.image")} />
              </div>
              <div>
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
                {isSubmitting ? "Updating..." : "Update Project"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDetails;
