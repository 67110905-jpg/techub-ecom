import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

/**
 * Footer Component - ส่วนท้ายของเว็บไซต์
 * แสดงข้อมูลติดต่อและ Social Media
 */
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">TecHub Ecom</h3>
            <p className="text-gray-400 mb-4">
              ศูนย์รวมอุปกรณ์คอมพิวเตอร์และเกมมิ่งคุณภาพสูง
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">เมนูลัด</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition">หน้าแรก</a></li>
              <li><a href="/products" className="hover:text-white transition">สินค้า</a></li>
              <li><a href="/contact" className="hover:text-white transition">ติดต่อ</a></li>
              <li><a href="/about" className="hover:text-white transition">เกี่ยวกับเรา</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">บริการลูกค้า</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/contact" className="hover:text-white transition">ติดต่อเราการคืนสินค้า</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ติดต่อเรา</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>02-123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>support@techubecom.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <span>มหาวิทยาลัยธุรกิจบัณฑิตย์ (DPU) ถนนประชาชื่น กรุงเทพมหานคร</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 TecHubEcom</p>
        </div>
      </div>
    </footer>
  );
}