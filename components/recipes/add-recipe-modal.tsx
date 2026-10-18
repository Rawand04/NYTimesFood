"use client";
import { useState } from "react";
import { AddRecipe } from "@/app/lib/apis";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddRecipeModal = ({ isOpen, tags, userId, onAdded }) => {
  const [cuisine, setCuisine] = useState(tags?.[0] ?? "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const body = {
      title: formData.get("title"),
      cuisine,
      duration: Number(formData.get("duration")),
      image:
        "https://static01.nyt.com/images/2023/01/17/dining/onepot-cheesypasta/onepot-cheesypasta-threeByTwoMediumAt2X.jpg?width=1280&quality=75&auto=webp",
      userId,
    };
    const created = await AddRecipe(body);
    onAdded?.(created);
    isOpen(false);
  };

  return (
    <Dialog open onOpenChange={(open) => !open && isOpen(false)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center font-sourceserif">
            Add Recipe
          </DialogTitle>
        </DialogHeader>

        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <Label htmlFor="title">Recipe Title</Label>
              <Input
                name="title"
                id="title"
                placeholder="ex: Mansaf"
                required
              />
            </Field>

            <Field>
              <Label htmlFor="cuisine">Cuisine</Label>
              <Select value={cuisine} onValueChange={setCuisine}>
                <SelectTrigger id="cuisine" className="w-full">
                  <SelectValue placeholder="Select cuisine" />
                </SelectTrigger>
                <SelectContent>
                  {tags.map((tag, index) => (
                    <SelectItem key={index} value={tag}>
                      {tag}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <Label htmlFor="duration">Preparation duration in minutes</Label>
              <Input
                name="duration"
                id="duration"
                type="number"
                placeholder="e.g. 45"
                required
                className="!w-1/4"
              />
            </Field>

            <Field>
              <Label htmlFor="image">Recipe Image</Label>
              <Input name="image" id="image" type="file" />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <Button type="submit" className="rounded-full w-1/2 mx-auto">
              Add Recipe
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddRecipeModal;
