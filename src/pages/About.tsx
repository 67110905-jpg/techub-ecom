export default function About() {
  return (
    <div className="w-screen min-h-[calc(100vh-40px)] bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6">
        เกี่ยวกับเรา
      </h1>

      <p className="max-w-2xl text-gray-700 text-lg leading-relaxed mb-6">
        <strong>TecHub Ecom</strong>
         เป็นเว็บไซต์จำลองที่เรานำเสนอขายสินค้าอุปกรณ์เสริมสำหรับอุปกรณ์คอมพิวเตอร์และเกมมิ่ง
        คุณภาพสูงหลากหลายประเภท
      </p>
    </div>
  );
}
