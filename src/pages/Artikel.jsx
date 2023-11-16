import { Link } from "react-router-dom";

import { getArtikel } from "../API";

export default function Artikel() {
  const {blog, loading} = getArtikel();

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
            <div className="flex justify-center items-center xl:col-start-2 my-12 xl:col-span-1 md:col-start-1 md:col-span-2">
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
