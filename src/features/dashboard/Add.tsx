'use client';

import { useFormState, useFormStatus } from "react-dom";
import { create} from "~/actions/dashboard/create";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" aria-disabled={pending} className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
    Create
  </button>
  );
}

export function Add({userId}: {userId?: string}) {
  const [state, formAction] = useFormState(create, initialState)
  return (
    <form action={formAction}>
      <label>Create</label>
      <input type="hidden" name="userId" value={userId}></input>
      <SubmitButton/>
      <p aria-live="polite" className="warning" role="status">
        {state?.message}
      </p>
    </form>
  );
}
