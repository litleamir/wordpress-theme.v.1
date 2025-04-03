import Head from 'next/head'
import Layout from '@/components/Layout'
import { useQuery } from '@tanstack/react-query'
import { fetchProducts, type Product } from '@/lib/api-queries'
import Image from 'next/image'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function Products() {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-[400px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-[400px] flex items-center justify-center">
          <div className="text-center text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-lg">خطا در دریافت اطلاعات</p>
            <p className="text-sm mt-2">لطفا دوباره تلاش کنید</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>محصولات - SPA Shop</title>
        <meta name="description" content="محصولات آرایشی و بهداشتی SPA Shop" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4 md:mb-0">محصولات ما</h1>
          <div className="flex space-x-4">
            <button className="btn-secondary">
              فیلتر محصولات
            </button>
            <button className="btn-primary">
              سبد خرید
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.map(product => (
            <div key={product.id} className="card group">
              <div className="relative h-64 overflow-hidden">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <ImagePlaceholder height={192} />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-primary mb-4">{product.title}</h2>
                <p className="text-gray-dark mb-4 line-clamp-2">{product.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">{product.price} تومان</span>
                  <button className="btn-primary">
                    افزودن به سبد
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
} 