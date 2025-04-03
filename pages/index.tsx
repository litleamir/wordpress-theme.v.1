import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, EffectCube, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: '/images/slide1.jpg',
    title: 'بهترین محصولات آرایشی',
    description: 'مجموعه کامل محصولات آرایشی با کیفیت برتر',
    link: '/products'
  },
  {
    id: 2,
    image: '/images/slide2.jpg',
    title: 'پیشنهادات ویژه',
    description: 'تخفیف‌های ویژه برای محصولات پرفروش',
    link: '/products'
  },
  {
    id: 3,
    image: '/images/slide3.jpg',
    title: 'مقالات تخصصی',
    description: 'آخرین مقالات و آموزش‌های تخصصی',
    link: '/blog'
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>صفحه اصلی | SPA Shop</title>
        <meta name="description" content="فروشگاه تخصصی محصولات آرایشی و بهداشتی" />
      </Head>

      {/* Hero Slider */}
      <section className="relative h-[600px]">
        <Swiper
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white max-w-2xl px-4">
                    <h1 className="text-5xl font-bold mb-6 animate-fade-in">{slide.title}</h1>
                    <p className="text-xl mb-8 animate-slide-up">{slide.description}</p>
                    <Link href={slide.link} className="btn-primary animate-slide-up">
                      مشاهده بیشتر
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title">محصولات ویژه</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="card group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={`/images/product-${item}.jpg`}
                    alt={`محصول ${item}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">محصول {item}</h3>
                  <p className="text-gray-dark mb-4">توضیحات کوتاه درباره محصول</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">150,000 تومان</span>
                    <button className="btn-primary">
                      افزودن به سبد
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cube Slider Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">گالری محصولات</h2>
          <div className="h-[400px]">
            <Swiper
              effect="cube"
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              modules={[EffectCube]}
              className="h-full"
            >
              {[1, 2, 3, 4].map((item) => (
                <SwiperSlide key={item}>
                  <div className="relative h-full">
                    <Image
                      src={`/images/gallery-${item}.jpg`}
                      alt={`گالری ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title">آخرین مقالات</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <article key={post} className="card group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={`/images/blog-${post}.jpg`}
                    alt={`مقاله ${post}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">عنوان مقاله {post}</h3>
                  <p className="text-gray-dark mb-4">خلاصه کوتاه از محتوای مقاله...</p>
                  <Link href="/blog" className="text-primary hover:text-primary-hover transition-colors">
                    ادامه مطلب →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">آماده خرید هستید؟</h2>
          <p className="text-xl mb-8">با ما تماس بگیرید و از مشاوره رایگان بهره‌مند شوید</p>
          <Link href="/contact" className="btn-secondary">
            تماس با ما
          </Link>
        </div>
      </section>
    </>
  );
} 