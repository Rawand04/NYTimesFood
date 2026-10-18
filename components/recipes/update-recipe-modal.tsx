"use client";
import { useState } from "react";
import { updateRecipe } from "@/app/lib/apis";
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

const UpdateRecipeModal = ({ isOpen, tags, userId, onUpdate, items }) => {
  const [cuisine, setCuisine] = useState(items?.cuisine ?? "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const file = formData.get("image") as File;

    const body = {
      title: formData.get("title"),
      cuisine,
      duration: Number(formData.get("duration")),
      image: file && file.size > 0 ? URL.createObjectURL(file) : items.image,
      userId,
    };
    const updated = await updateRecipe(items.id, body);
    console.log(body.title);
    onUpdate?.(updated);
    isOpen(false);
  };

  return (
    <Dialog open onOpenChange={(open) => !open && isOpen(false)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center font-sourceserif">
            Update Recipe
          </DialogTitle>
        </DialogHeader>

        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <Label htmlFor="title">Recipe Title</Label>
              <Input
                name="title"
                id="title"
                defaultValue={items.title}
                placeholder="ex: Mansaf"
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
                defaultValue={items.duration}
                placeholder="e.g. 45"
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
              Update Recipe
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateRecipeModal;
