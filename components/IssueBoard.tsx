"use client";

import { useState } from "react";
import { IssueForm } from "./IssueForm";
import { IssueList } from "./IssueList";
import type { Issue, IssueStatus } from "@/types/issue";

type IssueBoardProps = {
    initialIssues: Issue[];
};

export function IssueBoard({ initialIssues }: IssueBoardProps) {
    const [items, setItems] = useState<Issue[]>(initialIssues);

    function handleCreateIssue(issue: Issue) {
        setItems((currentItems) => [issue, ...currentItems]);
    }

    function handleUpdateStatus(id: string, status: IssueStatus) {
        setItems((currentItems) =>
            currentItems.map((issue) =>
                issue.id === id ? { ...issue, status } : issue
            )
        );
    }

    return (
        <main className="mx-auto grid grid-cols-1 max-w-5xl gap-6 px-6 py-8">
            <IssueForm onCreateIssue={handleCreateIssue} />
            <IssueList issues={items} onUpdateStatus={handleUpdateStatus} />
        </main>
    );
}