import { notFound } from "next/navigation";
import { issues } from "@/data/issue";
import { StatusBadge } from "@/components/StatusBadge";

type IssueDetailPageProps = {
    params: Promise<{ id: string }>;
}

export default async function IssueDetailPage({
    params
}: IssueDetailPageProps) {
    const { id } = await params;

    const issue = issues.find((item) => item.id === id)

    if (!issue) {
        notFound()
    }   

    return (
        <main>
            <h1>#{issue.id} {issue.title}</h1>
            <p>{issue.description}</p>
            <p>ผู้แจ้ง: {issue.reporterName}</p>
            <p>อีเมล: {issue.reporterEmail}</p>
            <p>สถานะ: <StatusBadge status={issue.status} /></p>
        </main>
    )
}