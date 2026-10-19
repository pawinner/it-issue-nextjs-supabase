import { notFound } from "next/navigation";
import { getIssueById } from "@/lib/issues";
import { StatusBadge } from "@/components/StatusBadge";

type IssueDetailPageProps = {
    params: Promise<{ id: string }>;
}

export default async function IssueDetailPage({
    params
}: IssueDetailPageProps) {
    const { id } = await params;

    const issue = await getIssueById(id);

    if (!issue) {
        notFound()
    }   

    return (
        <main className="mx-auto max-w-3xl px-6 py-8">
  <h1 className="text-2xl font-bold text-slate-950">{issue.title}</h1>
  <p className="mt-2 text-slate-600">{issue.description}</p>
  <div className="mt-6 grid gap-2 rounded-lg border border-slate-200 bg-white p-6 text-sm">
    <p>ผู้แจ้ง: {issue.reporterName}</p>
    <p>อีเมล: {issue.reporterEmail}</p>
    <p>สถานะ: <StatusBadge status={issue.status} /></p>
  </div>
</main>

        
    )
}