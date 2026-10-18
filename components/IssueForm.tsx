"use client";

import { useState } from "react";
import type { SubmitEvent } from "react";
import type { Issue } from "@/types/issue";

type NewIssueInput = {
    reporterName: string;
    reporterEmail: string;
    title: string;
    description: string;
};

function getIssueInput(form: HTMLFormElement): NewIssueInput {
    const formData = new FormData(form);

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

function createIssueFromInput(input: NewIssueInput): Issue {
    return {
        id: crypto.randomUUID(),
        reporterName: input.reporterName,
        reporterEmail: input.reporterEmail,
        title: input.title,
        description: input.description,
        status: "OPEN",
        createdAt: new Date().toISOString(),
    };
}

type IssueFormProps = {
    onCreateIssue?: (issue: Issue) => void;
};

export function IssueForm({ onCreateIssue }: IssueFormProps) {

    const [errors, setErrors] = useState<string[]>([]);

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        const input = getIssueInput(event.currentTarget);
        const validationErrors = validateIssueInput(input);
        setErrors(validationErrors);
        if (validationErrors.length > 0) return;
        if (!onCreateIssue) {
            setErrors(["หน้านี้ยังไม่บันทึกข้อมูล กรุณาลองเพิ่มรายการที่หน้าแรก"]);
            return;
        }
        onCreateIssue(createIssueFromInput(input));
        event.currentTarget.reset();
    }

    return (
        <section className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-950">แจ้งปัญหาใหม่</h2>
            <form className="mt-4" onSubmit={handleSubmit}>
                <fieldset className="grid gap-4">
                    <legend className="text-sm font-semibold text-slate-700">ข้อมูลปัญหา</legend>
                    {errors.length > 0 && (
                        <div role="alert" className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                            <p className="font-bold">กรุณาตรวจสอบข้อมูล</p>
                            <ul className="mt-2 list-disc space-y-1 pl-5">
                                {errors.map((error) => (
                                    <li key={error}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="grid gap-2">
                            <label htmlFor="reporterName" className="text-sm font-semibold text-slate-800">ชื่อผู้แจ้ง</label>
                            <input id="reporterName" name="reporterName" type="text" required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm
      focus:border-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-100" />
                        </div>

                        <div className="grid gap-2">
                            <label htmlFor="reporterEmail" className="text-sm font-semibold text-slate-800">อีเมลผู้แจ้ง</label>
                            <input id="reporterEmail" name="reporterEmail" type="email" required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm
      focus:border-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-100" />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <label htmlFor="title" className="text-sm font-semibold text-slate-800">หัวข้อปัญหา</label>
                        <input id="title" name="title" type="text" required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm
      focus:border-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-100" />
                    </div>

                    <div className="grid gap-2">
                        <label htmlFor="description" className="text-sm font-semibold text-slate-800">รายละเอียดปัญหา</label>
                        <textarea name="description" id="description" rows={5} required className="w-full resize-y rounded-md border border-slate-300 px-3 py-2 text-sm
    focus:border-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-100"></textarea>
                    </div>

                    <button type="submit" className="rounded-md bg-teal-700 px-4 py-3 font-bold text-white
    hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-100">ส่งข้อมูล</button>
                </fieldset>
            </form>
        </section>
    )
}