import { createSupabaseServerClient } from "./supabase/server";
import type { Issue, IssueStatus, NewIssueInput } from "@/types/issue";

type DbIssue = {
  id: string;
  reporter_name: string;
  reporter_email: string;
  title: string;
  description: string;
  status: IssueStatus;
  created_at: string;
};

function mapIssue(row: DbIssue): Issue {
  return {
    id: row.id,
    reporterName: row.reporter_name,
    reporterEmail: row.reporter_email,
    title: row.title,
    description: row.description,
    status: row.status,
    createdAt: row.created_at,
  };
}

export async function getIssues(): Promise<Issue[]> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("issues")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(`Failed to fetch issues: ${error.message}`);

  return (data ?? []).map((row) => mapIssue(row as DbIssue));
}

export async function getIssueById(id: string): Promise<Issue | null> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("issues")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error?.code === "22P02") return null;
  if (error) throw new Error(`Failed to fetch issue: ${error.message}`);
  return data ? mapIssue(data as DbIssue) : null;
}

export async function createIssue(
  input: NewIssueInput,
): Promise<void> {
  const supabase = createSupabaseServerClient();

  const { error } = await supabase.from("issues").insert({
  reporter_name: input.reporterName,
  reporter_email: input.reporterEmail,
  title: input.title,
  description: input.description,
  status: "OPEN",
});

if (error) {
  throw new Error(`Failed to create issue: ${error.message}`);
}
}

export async function updateIssueStatus(id: string, status: IssueStatus): Promise<void> {
  const supabase = createSupabaseServerClient();
  const { error } = await supabase
    .from("issues")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) throw new Error(`Failed to update issue: ${error.message}`);
}