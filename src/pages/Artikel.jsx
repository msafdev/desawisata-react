import { useState, useEffect } from "react";
import { request } from "graphql-request";
import { Link } from "react-router-dom";

export default function Artikel() {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState([]);

  // Hygraph GQL API
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const headers = {
          Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTg2OTYxNjMsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aGVhc3QtMi5oeWdyYXBoLmNvbS92Mi9jbG9jeTBrMGhxZnNxMDF1aGY5NTQzMWJtL21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiIzMjIxNmQ0ZC03YmJlLTRmYzQtYjk2My05MzY3MzZkMzM0OGMiLCJqdGkiOiJjbG9kYnU0YjdzMnNrMDF0ZDNleHczNnhxIn0.eeUtrd_Gdvun3DrkH4frV5tuJKkDknrfF5wDiSCg74m_hcn9KvGBqzFe65tjcAsF-1KkeJlfXIhlVP9MUsPwQ-uE970fXixFHuCks45t0v_SeP4VVN2rlLUpNTwn3bgWiAosOpYfz2mOofml08jdu3WFI8Y7-aZYjJ0IvFtoy51bC9bykEe9mW5Tak8wjZGVlEvUvbR2pLEGJbk8Z82e-0myFJ0FibBm8LPIerPbg3n5abZbM6wf6eiMMPs3w9lly6OkbpTZCdjm7Nmp9bfq3BlKhSFYtv4u9Bxs7Im0z1HrFASrwFxqa78srWTLFbUTT_FYvUhZH00FbWjxHm9V8Ymx291mXH47su2kmuVAztpGrfwjncmqKTn7cUk_0sIVmKpzUWr-ZBTzUQZWf4443hKIy8SRIeRKMvkZJTamwaQAVZyid7ejl8UrPl9CaK59qGjUBoTPDvAJCd7YpSH686bk0NcwzTj0d93-wGAIh1cU_ewYF7jvSMkvo2BqyV3jSDK6RJlMQuVIudj2QD6vZLz4mO8sH76_d9u31CY9DJNVpUaBVoh2ou2Npt_PSX362ipwrEnbZIoLPQ6_0gsZzgn4Py9bBqcK6EnXR4FHxBPqTOMC-vhsA52jgbu4J4USixKn53MsDZnEg9GGHQpQXEIgwubweapv3rr4k8BqQZM`,
        };

        const data = await request(
          "https://ap-southeast-2.cdn.hygraph.com/content/clocy0k0hqfsq01uhf95431bm/master",
          `
          query Artikels {
            artikels {
              createdAt
              deskripsi
              id
              judul
              publishedAt
              slug
              tanggal
              updatedAt
              konten {
                raw
              }
              thumbnail {
                url
              }
              kategorirefs {
                nama
                slug
              }
              penulisrefs {
                penulis
                avatar {
                  url
                }
              }
            }
          }
        `,
          { headers }
        );

        setBlog(data.artikels);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchBlog();
  }, []);

  function formatTanggal(inputTanggal) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(inputTanggal);
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <div className="w-full flex flex-col bg-white text-primary pt-[100px]">
      {/* Hero */}
      <div className="w-full bg-black h-fit md:py-16 py-8 flex flex-col lg:flex-col justify-center px-[6%] md:px-[10%] lg:px-[15%] xl:px-[25%]">
        <h1 className="text-white text-4xl md:text-5xl z-[5] font-extrabold italic">
          Artikel
        </h1>
        <p className="text-white text-opacity-80 z-[5] text-sm md:text-lg lg:text-xl font-medium text-justify my-2 md:my-3 lg:my-4">
          Berikut adalah artikel-artikel yang telah kami buat untuk Anda.
          Artikel-artikel ini berisi informasi-informasi yang dapat Anda gunakan
          untuk menambah wawasan Anda, juga dapat Anda gunakan sebagai referensi
          untuk menentukan tujuan wisata Anda di AWK.
        </p>
      </div>
      {/* Artikel */}
      <div className="flex flex-col gap-6 py-8 md:py-12 items-center">
        <h1 className="uppercase font-semibold text-center mb-0 text-lg md:text-2xl">
          Macam-macam Produk UMKM AWK
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-fit mx-auto gap-x-12 gap-y-8">
          {loading ? (
            <div className="flex justify-center items-center xl:col-start-2 xl:col-span-1 md:col-start-1 md:col-span-2">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            blog.map((article) => (
              <Link
                to={`/artikel/${article.slug}`}
                key={article.id}
                state={{ article: article }}
                className="w-[300px]"
              >
                <img
                  src={article.thumbnail.url}
                  alt={article.judul}
                  className="w-full h-[180px] object-cover rounded-2xl"
                />
                <div className="flex gap-2 flex-wrap">
                  {article.kategorirefs.map((kategori) => (
                    <p
                      key={kategori.slug}
                      className="text-sm text-green-500 font-semibold py-2"
                    >
                      {kategori.nama}
                    </p>
                  ))}
                </div>
                <h2 className="font-semibold text-xl pb-2">{article.judul}</h2>
                <p className="text-sm text-gray-500">
                  {formatTanggal(article.tanggal)}
                </p>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
