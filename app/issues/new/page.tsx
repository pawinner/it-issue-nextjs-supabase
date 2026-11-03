import { IssueForm } from "@/components/IssueForm";
import { requireUser } from "@/lib/auth";

export default async function NewIssuePage() {
  await requireUser();
    return (
        <main className="mx-auto max-w-3xl px-6 py-8">
            <IssueForm />
        </main>
    )
}