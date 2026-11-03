import { signInAction } from "@/app/actions";

type LoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { error } = await searchParams;
  return (
    <main className="mx-auto max-w-md px-6 py-12">
      <h1 className="text-2xl font-bold text-slate-950">เข้าสู่ระบบ</h1>
      {error && <p className="mt-4 text-sm font-medium text-red-700">อีเมลหรือรหัสผ่านไม่ถูกต้อง</p>}
      <form action={signInAction} className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          อีเมล
          <input
            name="email"
            type="email"
            required
            className="rounded-md border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          รหัสผ่าน
          <input
            name="password"
            type="password"
            required
            className="rounded-md border border-slate-300 px-3 py-2"
          />
        </label>
        <button
          className="rounded-md bg-teal-700 px-4 py-3 font-bold text-white hover:bg-teal-800"
        >
          เข้าสู่ระบบ
        </button>
      </form>
    </main>
  );
}
