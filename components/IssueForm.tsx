import { createIssueAction } from "@/app/actions";


export function IssueForm() {


    return (
        <section className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-950">แจ้งปัญหาใหม่</h2>
           <form className="mt-4" action={createIssueAction}>
                <fieldset className="grid gap-4">
                    <legend className="text-sm font-semibold text-slate-700">ข้อมูลปัญหา</legend>
                    

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="grid gap-2">
                            <label htmlFor="reporterName" className="text-sm font-semibold text-slate-800">ชื่อผู้แจ้ง</label>
                            <input id="reporterName" name="reporterName" type="text" required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm
      focus:border-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-100" />
                        </div>

                        <div className="grid gap-2">
                            <label htmlFor="reporterEmail" className="text-sm font-semibold text-slate-800">อีเมลผู้แจ้ง</label>
                            <input id="reporterEmail" name="reporterEmail" type="email" required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm
      focus:border-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-100" />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <label htmlFor="title" className="text-sm font-semibold text-slate-800">หัวข้อปัญหา</label>
                        <input id="title" name="title" type="text" required minLength={5} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm
      focus:border-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-100" />
                    </div>

                    <div className="grid gap-2">
                        <label htmlFor="description" className="text-sm font-semibold text-slate-800">รายละเอียดปัญหา</label>
                        <textarea name="description" id="description" rows={5} required className="w-full resize-y rounded-md border border-slate-300 px-3 py-2 text-sm
    focus:border-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-100"></textarea>
                    </div>

                    <button type="submit" className="rounded-md bg-teal-700 px-4 py-3 font-bold text-white
    hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-100">ส่งข้อมูล</button>
                </fieldset>
            </form>
        </section>
    )
}