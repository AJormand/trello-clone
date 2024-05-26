"use client";

import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

interface FormInputProps {
  errors?: {
    title?: string[];
  };
}

export const FormInput = ({ errors }: FormInputProps) => {
  const { pending } = useFormStatus(); //as component is inside the form it this hook validate if the form is being processed and can be used for loading

  return (
    <div>
      <Input
        id="title"
        name="title"
        required
        placeholder="Enter a borad title"
        disabled={pending}
      />

      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className="text-rose-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};
