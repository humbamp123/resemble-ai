"use server";

import { db } from "~/server/db";
import { z } from "zod";

type FormState = {
  message?: string;
};

export async function create(prevState: FormState, formData: FormData) {
  const schema = z.object({
    userId: z.string().min(1),
  });
  const parsedData = schema.parse({
    userId: formData.get("userId"),
  });
  try {
    // const savingsAccount = await db.savingsAccount.create({
    //   data: {
    //     name: "New Savings Account",
    //     amount: 0,
    //     userId: parsedData.userId,
    //   },
    // });
    return { message: "Created" };
  } catch (e) {
    return { message: "Failed" };
  }
}
