import { IssueList } from "@/components/IssueList";
import { requireAdmin } from "@/lib/auth";
import { getIssues } from "@/lib/issues";

export default async function AdminIssuesPage() {
  await requireAdmin();
  const issues = await getIssues();

  return (
    <main className="mx-auto grid grid-cols-1 max-w-5xl gap-6 px-6 py-8">
      <h1 className="text-2xl font-bold text-slate-950">จัดการปัญหาทั้งหมด</h1>
      <IssueList issues={issues} canManage />
    </main>
  );
}
