"use client"

import { StatusBadge } from "./StatusBadge";
import type { Issue, IssueStatus } from "@/types/issue";
import Link from "next/link";

type IssueListProps = {
    issues: Issue[];
    onUpdateStatus?: (id: string, status: IssueStatus) => void;
}

const statuses: IssueStatus[] = ["OPEN", "IN_PROGRESS", "DONE"];

export function IssueList({ issues, onUpdateStatus }: IssueListProps) {

    if (issues.length === 0) {
        return (
            <section className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
                <h2 className="text-lg font-bold text-slate-950">ยังไม่มีรายการปัญหา</h2>
                <p className="mt-2 text-sm text-slate-600">
                    เมื่อมีการแจ้งปัญหา รายการจะแสดงที่นี่
                </p>
            </section>
        );
    }

    return (
        <section className="min-w-0 rounded-lg border border-slate-200 bg-white p-6" aria-labelledby="issue-list-title">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 id="issue-list-title" className="text-xl font-bold text-slate-950">รายการปัญหาล่าสุด</h2>
                <p className="text-sm font-medium text-slate-600">ทั้งหมด {issues.length} รายการ</p>
            </div>

            <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[920px] border-collapse text-sm">
                    <thead>
                        <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs text-slate-500">
                            <th className="px-3 py-3 font-semibold">รหัส</th>
                            <th className="px-3 py-3 font-semibold">หัวข้อ</th>
                            <th className="px-3 py-3 font-semibold">ผู้แจ้ง</th>
                            <th className="px-3 py-3 font-semibold">สถานะ</th>
                            <th className="px-3 py-3 font-semibold">รายละเอียด</th>
                            {onUpdateStatus && (
                                <th className="px-3 py-3 font-semibold">จัดการ</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {issues.map((issue) => (
                            <tr key={issue.id} className="border-b border-slate-100 last:border-0">
                                <td className="px-3 py-4 font-medium text-slate-700">#{issue.id}</td>
                                <td className="px-3 py-4 text-slate-950">{issue.title}</td>
                                <td className="px-3 py-4 text-slate-600">{issue.reporterName}</td>
                                <td className="px-3 py-4"><StatusBadge status={issue.status} /></td>
                                <td className="px-3 py-4"><Link href={`/issues/${issue.id}`} className="font-semibold text-teal-700 hover:text-teal-900">ดูรายละเอียด</Link></td>
                                {onUpdateStatus && (
                                    <td className="px-3 py-4">
                                        <div className="flex flex-wrap gap-2">
                                            {statuses.map((status) => (
                                                <button
                                                    key={status} type="button" disabled={issue.status === status}
                                                    onClick={() => onUpdateStatus(issue.id, status)}
                                                    className="rounded-md border border-slate-300 px-2 py-1 text-xs font-semibold text-slate-700
      hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-teal-700
      disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
                                                >
                                                    {status}
                                                </button>
                                            ))}
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}