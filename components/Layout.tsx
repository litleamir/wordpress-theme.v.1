import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md rounded-b-3xl">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-[#EE7C5F]">
              SPA Shop
            </Link>
            <div className="space-x-6">
              <Link href="/products" className="text-gray-600 hover:text-[#EE7C5F] transition-colors">
                محصولات
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-[#EE7C5F] transition-colors">
                خدمات
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-[#EE7C5F] transition-colors">
                وبلاگ
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md rounded-t-3xl">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#EE7C5F] mb-4">درباره ما</h3>
              <p className="text-gray-600">
                فروشگاه SPA شما، ارائه دهنده بهترین محصولات و خدمات آرایشی و بهداشتی
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#EE7C5F] mb-4">دسترسی سریع</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/products" className="text-gray-600 hover:text-[#EE7C5F] transition-colors">
                    محصولات
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-[#EE7C5F] transition-colors">
                    خدمات
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-[#EE7C5F] transition-colors">
                    وبلاگ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#EE7C5F] mb-4">تماس با ما</h3>
              <ul className="space-y-2 text-gray-600">
                <li>آدرس: تهران، خیابان ولیعصر</li>
                <li>تلفن: 021-12345678</li>
                <li>ایمیل: info@spashop.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>تمامی حقوق محفوظ است © {new Date().getFullYear()} SPA Shop</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 