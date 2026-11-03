import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type UserRole = "USER" | "ADMIN";

export async function getCurrentUser() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  return data.user;
}

export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
}

export async function getCurrentUserRole(userId: string): Promise<UserRole | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .maybeSingle();

  return data?.role === "ADMIN" || data?.role === "USER" ? data.role : null;
}

export async function requireAdmin() {
  const user = await requireUser();
  const role = await getCurrentUserRole(user.id);
  if (role !== "ADMIN") redirect("/issues");
  return user;
}
