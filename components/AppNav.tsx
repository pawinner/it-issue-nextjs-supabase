import Link from "next/link";
import { signOutAction } from "@/app/actions";
import { getCurrentUser, getCurrentUserRole } from "@/lib/auth";

export async function AppNav() {
  const user = await getCurrentUser();
  const role = user ? await getCurrentUserRole(user.id) : null;
  const linkClass = "rounded-md px-3 py-2 font-semibold text-slate-700 hover:bg-slate-100";

  return (
    <nav className="border-b border-slate-200 bg-white" aria-label="เมนูหลัก">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 px-6 py-3">
        <Link className={linkClass} href="/issues">รายการปัญหา</Link>
        {user ? (
          <>
            {role === "ADMIN" && (
              <Link className={linkClass} href="/admin/issues">จัดการปัญหา</Link>
            )}
            <Link className={linkClass} href="/issues/new">แจ้งปัญหาใหม่</Link>
            <span className="ml-auto text-sm text-slate-600">{user.email}</span>
            <form action={signOutAction}>
              <button className="rounded-md px-3 py-2 font-semibold text-teal-700">ออกจากระบบ</button>
            </form>
          </>
        ) : (
          <Link className={linkClass} href="/login">เข้าสู่ระบบ</Link>
        )}
      </div>
    </nav>
  );
}
