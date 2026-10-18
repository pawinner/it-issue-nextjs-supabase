import { IssueList } from "@/components/IssueList";
import { issues } from "@/data/issue";

export default function IssuesPage() {
    return (
        <main className="mx-auto grid grid-cols-1 max-w-5xl gap-6 px-6 py-8">
            <h1 className="text-2xl font-bold text-slate-950">รายการปัญหา</h1>
            <IssueList issues={issues} />
        </main>
    )
}