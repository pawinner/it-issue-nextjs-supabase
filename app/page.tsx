import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-teal-800 px-6 py-8 text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold">ระบบแจ้งปัญหา ​IT</h1>
          <p className="mt-2 text-teal-100">แจ้งและติดตามปัญหาการใช้งานระบบภายใน</p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
  <h2 className="text-2xl font-semibold">จัดการปัญหาการใช้งานระบบ</h2>
  <p className="mt-2 text-slate-600">ดูรายการปัญหาที่แจ้งเข้ามาและติดตามสถานะ</p>
  <Link
    href="/issues"
    className="mt-6 inline-block rounded-md bg-teal-700 px-4 py-2
      font-semibold text-white hover:bg-teal-800"
  >
    ดูรายการปัญหา
  </Link>
</main>

      <footer className="px-6 py-8 text-center text-sm text-slate-500">
        <p>ฝ่ายเทคโนโลยีสารสนเทศ</p>
      </footer>
    </>
  );
}
