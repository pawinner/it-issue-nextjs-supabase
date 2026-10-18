# IT Issue Tracker — Next.js Day 4 Starter

โปรเจคเริ่มต้นสำหรับเรียน Next.js วันที่ 4 (ระบบแจ้งปัญหา IT)

## เริ่มต้นใช้งาน

### วิธีที่ 1: ใช้ Template (แนะนำ)

1. กดปุ่ม **Use this template** → **Create a new repository** ที่มุมขวาบนของหน้านี้
2. ตั้งชื่อ repo ของตัวเอง แล้วกด **Create repository**
3. Clone repo ของตัวเองลงเครื่อง

```bash
git clone https://github.com/<username>/<repo-name>.git
cd <repo-name>
```

### วิธีที่ 2: Clone ตรง

```bash
git clone https://github.com/ohmiler/it-issue-nextjs-day-4-starter.git
cd it-issue-nextjs-day-4-starter
```

### ติดตั้งและรัน

```bash
npm install
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) ในเบราว์เซอร์

## สิ่งที่ต้องมี

- Node.js 20.9 ขึ้นไป (`node -v` เพื่อเช็ค)
- Git
- VS Code (แนะนำ)

## โครงสร้างโปรเจค

```
app/
  page.tsx              หน้าแรก
  issues/page.tsx       รายการ issue
  issues/new/page.tsx   ฟอร์มแจ้งปัญหาใหม่
  issues/[id]/page.tsx  รายละเอียด issue
  not-found.tsx         หน้า 404
components/             คอมโพเนนต์ (IssueBoard, IssueList, IssueForm, StatusBadge)
data/issue.ts           ข้อมูลตัวอย่าง
types/issue.ts          TypeScript types
```

## คำสั่งที่ใช้บ่อย

| คำสั่ง | ความหมาย |
| --- | --- |
| `npm run dev` | รัน dev server |
| `npm run build` | build สำหรับ production |
| `npm run start` | รัน production server (หลัง build) |
| `npm run lint` | ตรวจโค้ดด้วย ESLint |

## Tech Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4
