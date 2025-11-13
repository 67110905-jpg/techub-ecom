export default function Contact() {
  return (
    <div className="w-screen min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6">
        ติดต่อเรา
      </h1>

      <p className="text-gray-700 text-lg mb-2">
        อีเมล: <span className="font-medium text-blue-600">support@techubecom.com</span>
      </p>

      <p className="text-gray-700 text-lg mb-2">
        โทรศัพท์: <span className="font-medium text-blue-600">02-123-4567</span>
      </p>

      <p className="text-gray-700 text-lg mb-6">
        ที่อยู่: มหาวิทยาลัยธุรกิจบัณฑิตย์ (DPU) ถนนประชาชื่น กรุงเทพมหานคร
      </p>

      <div className="mt-4">
        <a
          href="mailto:support@techubecom.com"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
        >
          ส่งอีเมลถึงเรา
        </a>
      </div>
    </div>
  );
}
