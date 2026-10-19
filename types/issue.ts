export type IssueStatus = "OPEN" | "IN_PROGRESS" | "DONE";

export type Issue = {
  id: string;
  reporterName: string;
  reporterEmail: string;
  title: string;
  description: string;
  status: IssueStatus;
  adminComment?: string;
  createdAt: string;
}

export type NewIssueInput = {
  reporterName: string;
  reporterEmail: string;
  title: string;
  description: string;
};