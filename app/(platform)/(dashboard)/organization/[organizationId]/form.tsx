"use client";
import { createBoard } from "@/actions/create-board/index.";

import { useAction } from "@/hooks/use-action";
import { FormInput } from "@/components/forms/form-input";

import { FormButton } from "./form-button";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS!");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput label="Board title" id="title" errors={fieldErrors} />
      </div>

      <FormButton />
    </form>
  );
};
