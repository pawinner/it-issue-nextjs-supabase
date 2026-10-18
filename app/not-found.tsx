import Link from "next/link";
 
export default function NotFound() {
  return (
    <main>
      <h1>ไม่พบหน้าที่ต้องการ</h1>
      <p>ไม่พบข้อมูลหรือหน้าที่คุณกำลังค้นหา</p>
      <Link href="/issues">กลับไปหน้ารายการปัญหา</Link>
    </main>
  );
}