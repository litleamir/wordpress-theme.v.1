import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'

interface Product {
  id: number;
  title: string;
  excerpt: string;
  featured_media: number;
}

interface Service {
  id: number;
  title: string;
  excerpt: string;
  featured_media: number;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  featured_media: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Home component mounted');
    console.log('wpSettings:', window.wpSettings);

    const fetchData = async () => {
      try {
        console.log('Fetching data...');
        
        // دریافت محصولات
        const productsRes = await fetch('/api/products');
        console.log('Products response:', productsRes);
        const productsData = await productsRes.json();
        console.log('Products data:', productsData);
        setProducts(productsData.slice(0, 3));

        // دریافت خدمات
        const servicesRes = await fetch('/api/services');
        console.log('Services response:', servicesRes);
        const servicesData = await servicesRes.json();
        console.log('Services data:', servicesData);
        setServices(servicesData.slice(0, 3));

        // دریافت پست‌های وبلاگ
        const blogRes = await fetch('/api/blog');
        console.log('Blog response:', blogRes);
        const blogData = await blogRes.json();
        console.log('Blog data:', blogData);
        setBlogPosts(blogData.slice(0, 3));

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error instanceof Error ? error.message : 'Unknown error occurred');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <Layout>
        <div className="text-center py-12">
          <div className="text-red-500">Error: {error}</div>
        </div>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EE7C5F] mx-auto"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>SPA Shop</title>
        <meta name="description" content="Welcome to SPA Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="bg-white rounded-3xl shadow-md p-8 mb-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#EE7C5F] mb-4">به فروشگاه SPA خوش آمدید</h1>
          <p className="text-xl text-gray-600 mb-8">بهترین محصولات و خدمات آرایشی و بهداشتی را از ما بخواهید</p>
          <Link href="/products" className="bg-[#EE7C5F] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors">
            مشاهده محصولات
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#EE7C5F] mb-6">محصولات ویژه</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-3xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-600">{product.excerpt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#EE7C5F] mb-6">خدمات ما</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(service => (
            <div key={service.id} className="bg-white rounded-3xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.excerpt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section>
        <h2 className="text-3xl font-bold text-[#EE7C5F] mb-6">آخرین مطالب وبلاگ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-3xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
