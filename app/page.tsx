import { IssueBoard } from "@/components/IssueBoard";
import { issues } from "@/data/issue"

export default function Home() {
  return (
    <>
      <header className="bg-teal-800 px-6 py-8 text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold">ระบบแจ้งปัญหา ​IT</h1>
          <p className="mt-2 text-teal-100">แจ้งและติดตามปัญหาการใช้งานระบบภายใน</p>
        </div>
      </header>

      <IssueBoard initialIssues={issues} />

      <footer className="px-6 py-8 text-center text-sm text-slate-500">
        <p>ฝ่ายเทคโนโลยีสารสนเทศ</p>
      </footer>
    </>
  );
}
