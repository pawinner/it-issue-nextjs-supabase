"use server";

import { createIssue, updateIssueStatus } from "@/lib/issues";
import type { IssueStatus, NewIssueInput } from "@/types/issue";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const allowedStatuses: IssueStatus[] = ["OPEN", "IN_PROGRESS", "DONE"];

function parseIssueInput(formData: FormData): NewIssueInput {
  return {
    reporterName: String(formData.get("reporterName") ?? "").trim(),
    reporterEmail: String(formData.get("reporterEmail") ?? "").trim(),
    title: String(formData.get("title") ?? "").trim(),
    description: String(formData.get("description") ?? "").trim(),
  };
}

function validateIssueInput(input: NewIssueInput): string[] {
  const errors: string[] = [];
  if (input.reporterName.length < 2) errors.push("ชื่อผู้แจ้งต้องมีอย่างน้อย 2 ตัวอักษร");
  if (!input.reporterEmail.includes("@")) errors.push("กรุณาตรวจสอบอีเมลผู้แจ้ง");
  if (input.title.length < 5) errors.push("หัวข้อปัญหาต้องมีอย่างน้อย 5 ตัวอักษร");
  if (input.description.length < 10) errors.push("รายละเอียดต้องมีอย่างน้อย 10 ตัวอักษร");
  return errors;
}

export async function createIssueAction(formData: FormData) {
  const input = parseIssueInput(formData);
  const errors = validateIssueInput(input);
  if (errors.length > 0) throw new Error(errors.join(", "));

  await createIssue(input);
  revalidatePath("/issues");
  redirect("/issues");
}

export async function updateIssueStatusAction(
  formData: FormData,
): Promise<void> {
  const id = String(formData.get("id") ?? "").trim();
  const status = String(formData.get("status") ?? "").trim();

  if (!id || !allowedStatuses.includes(status as IssueStatus)) {
    throw new Error("Invalid update request");
  }

  await updateIssueStatus(id, status as IssueStatus);
  revalidatePath("/issues");
}