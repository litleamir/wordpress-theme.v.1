import Head from 'next/head'
import Layout from '@/components/Layout'
import { useQuery } from '@tanstack/react-query'
import { fetchBlogPosts, type BlogPost } from '@/lib/api-queries'

export default function Blog() {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EE7C5F] mx-auto"></div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-center py-12 text-red-600">
          خطا در دریافت اطلاعات. لطفا دوباره تلاش کنید.
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>وبلاگ - SPA Shop</title>
        <meta name="description" content="وبلاگ SPA Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#EE7C5F] mb-8">وبلاگ</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.map(post => (
            <div key={post.id} className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#EE7C5F] mb-4">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString('fa-IR')}</span>
                </div>
                <button className="mt-4 w-full bg-[#EE7C5F] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors">
                  ادامه مطلب
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
} 