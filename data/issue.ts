import type { Issue } from "@/types/issue"

export const issues: Issue[] = [
  {
    id: "001",
    reporterName: "Anan",
    reporterEmail: "anan@example.com",
    title: "Login เข้าระบบไม่ได้",
    description: "ไม่สามารถเข้าสู่ระบบด้วยบัญชีเดิมได้",
    status: "OPEN",
    createdAt: "2026-05-08",
  },
  {
    id: "002",
    reporterName: "Mali",
    reporterEmail: "mali@example.com",
    title: "ส่งแบบฟอร์มไม่ได้",
    description: "กดส่งข้อมูลแล้วระบบขึ้น error",
    status: "IN_PROGRESS",
    createdAt: "2026-05-08",
  },
  {
    id: "003",
    reporterName: "Kanda",
    reporterEmail: "kanda@example.com",
    title: "ขอสิทธิ์เข้า Dashboard",
    description: "ต้องการสิทธิ์สำหรับตรวจสอบข้อมูลหลังบ้าน",
    status: "DONE",
    adminComment: "อนุมัติสิทธิ์และแจ้งผู้ใช้เรียบร้อยแล้ว",
    createdAt: "2026-05-08",
  },
]