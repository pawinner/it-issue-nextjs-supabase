import type { IssueStatus } from "@/types/issue";

function getStatusClass(status: IssueStatus): string {
    if (status === "OPEN") {
        return "bg-red-50 text-red-700 ring-red-200";
    }

    if (status === "IN_PROGRESS") {
        return "bg-amber-50 text-amber-700 ring-amber-200";
    }

    return "bg-emerald-50 text-emerald-700 ring-emerald-200";
}

type StatusBadgeProps = {
    status: IssueStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
    return (
        <span className={`inline-flex rounded-full px-2.5 py-1
    text-xs font-bold ring-1 ${getStatusClass(status)}`}>
            {status}
        </span>
    )
}