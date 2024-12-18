import {
  ArrowUpRight,
  Compass,
  FlameKindling,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";

import { pariwisata, seniBudaya } from "../data";
import Product from "../components/Product";
import { getUMKM } from "../API";

function Beranda() {
  const { produk, loading } = getUMKM();

  return (
    <>
      <div className="min-h-screen w-full flex flex-col bg-white text-primary pt-[100px]">
        {/* Hero */}
        <div
          id="hero"
          className="hero-1 w-full h-[calc(100vh-100px)] flex flex-col justify-center px-4 md:px-[10%] lg:px-[15%] xl:px-[25%]"
        >
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl z-[5] font-extrabold italic">
            <span className="font-medium not-italic">Wisata</span> Alas Watu
            Kebonan
          </h1>
          <p className="text-white text-opacity-80 z-[5] text-sm md:text-lg lg:text-xl font-medium text-justify my-2 md:my-3 lg:my-4">
            Desa Kebonan, Karanggede, memiliki destinasi wisata yang menarik dan
            unik yang sering dikenal dengan singkatan AWK (Aku Wong Kebonan).
            Alas Watu Kebonan, demikian pula namanya, adalah tempat yang
            menawarkan keajaiban alam yang luar biasa. Di sini, kita akan
            menemukan berbagai batuan dengan beragam ukuran dan bentuk.
          </p>
          <div className="flex w-full md:flex-row flex-col flex-wrap justify-end items-end gap-x-3 gap-y-2 z-[5]">
            <button
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById("hero").scrollHeight,
                  behavior: "smooth",
                  offset: -100,
                });
              }}
              className="w-fit bg-green-500 flex items-center gap-3 font-semibold text-sm md:text-base text-white px-4 py-2 rounded-2xl hover:bg-green-600 transition-all duration-300 ease-in-out"
            >
              <Compass size={19} /> Jelajahi AWK
            </button>
            <button
              onClick={() => {
                window.scrollTo({
                  // scroll past all id hero, pariwisata, and seni and offset 100
                  top:
                    document.getElementById("pariwisata").scrollHeight +
                    document.getElementById("seni").scrollHeight +
                    document.getElementById("hero").scrollHeight,
                  behavior: "smooth",
                  offset: -100,
                });
              }}
              className="w-fit bg-gray-100 flex items-center gap-3 font-semibold text-sm md:text-base text-gray-800 px-4 py-2 rounded-2xl hover:bg-gray-200 transition-all duration-300 ease-in-out"
            >
              <ShoppingCart size={19} /> Lihat UMKM
            </button>
          </div>
        </div>
        {/* Pariwisata */}
        <div
          id="pariwisata"
          className="w-full min-h-[calc(100vh-100px)] flex flex-col justify-center items-center py-10 text-center px-8 bg-white"
        >
          <p className="text-xs md:text-sm font-semibold text-opacity-60 text-primary uppercase">
            Mau ngapain?
          </p>
          <h1 className="md:text-3xl text-2xl font-bold text-primary">
            Destinasi Eduwisata
          </h1>
          <div className="flex my-6 md:my-8 gap-4 flex-wrap items-center justify-center">
            {pariwisata.map((pariwisata, index) => (
              <div
                key={index}
                className="w-full max-w-[400px] h-[300px] md:w-[300px] md:h-[300px] object-cover shadow-cust relative"
              >
                <img
                  src={pariwisata.url}
                  alt={`Foto ${pariwisata.nama}`}
                  className="w-full h-full object-cover darken-filter"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 flex justify-center items-end py-8 px-6">
                  <p className="text-white text-base md:text-lg font-bold transition-all duration-300 ease-in-out">
                    {pariwisata.nama}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/pariwisata"
            className="w-fit px-4 py-2 border-2 rounded-2xl flex gap-3 items-center shadow-none hover:shadow-md duration-300 transition-all ease-in-out"
          >
            <FlameKindling size={20} className="text-amber-500" />
            <p className="md:text-base text-sm font-semibold">
              Destinasi Lengkap
            </p>
          </Link>
        </div>
        {/* Seni Budaya */}
        <div
          id="seni"
          className="w-full h-fit flex flex-col justify-center lg:justify-start items-center text-center py-14 px-4 md:px-[8%] bg-topo"
        >
          <div className="flex flex-wrap-reverse w-full lg:my-auto justify-center gap-8 lg:gap-8">
            <div className="flex flex-col text-left lg:w-1/2 max-w-[500px] lg:max-w-none">
              <p className="text-xs md:text-sm font-semibold text-opacity-60 text-primary uppercase text-center md:text-left">
                Galeri dan Sejarah
              </p>
              <h1 className="md:text-3xl text-2xl font-bold text-primary text-center md:text-left">
                Temukan Pesona Wisata Edukasi AWK
              </h1>
              <p className="text-justify my-2 text-sm md:text-base font-medium">
                Alas Watu Kebonan memberikan pengalaman dan variasi wisata yang
                berbeda dari biasanya. Di sini, kita bisa menikmati keindahan
                alam, belajar tentang sejarah, dan menikmati seni budaya yang
                khas. Alas Watu Kebonan juga menyediakan fasilitas yang lengkap
                untuk memudahkan wisatawan dalam menjelajahi tiap-tiap destinasi
                wisata.
              </p>
              <Link
                to="/seni-budaya"
                className="w-fit mt-auto px-4 py-2 bg-primary hover:bg-green-500 duration-300 transition-all ease-in-out text-white rounded-2xl flex flex-row-reverse gap-3 items-center self-end"
              >
                <ChevronRight size={18} />
                <p className="md:text-base text-sm font-semibold">
                  Lihat Semua
                </p>
              </Link>
            </div>
            <div className="grid w-[500px] h-[300px] grid-cols-2 grid-rows-2 gap-4">
              {seniBudaya.map((seni, index) => (
                <div
                  key={index}
                  className="w-full h-full relative group cursor-pointer"
                >
                  <img
                    src={seni.url}
                    alt={`Seni Budaya ${index}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
                    <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                      {seni.nama}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* UMKM */}
        <div
          id="umkm"
          className="w-full min-h-[calc(100vh-100px)] flex flex-col justify-center items-center py-10 text-center px-4 md:px-8 bg-white"
        >
          <div className="flex flex-col w-full">
            <p className="text-xs md:text-sm font-semibold text-opacity-60 text-primary uppercase text-center">
              Ayo Belanja
            </p>
            <h1 className="md:text-3xl text-2xl font-bold text-primary text-center">
              Produk UMKM Alas Watu Kebonan
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 my-6 items-center justify-center w-full max-w-[1000px] duration-0 h-fit">
            {loading ? (
              <div className="flex justify-center items-center xl:col-start-2 my-12 xl:col-span-1 md:col-start-1 md:col-span-2">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : (
              produk.map((product) => (
                <Product product={product} key={product.id} />
              ))
            )}
          </div>
          <div className="flex w-full max-w-[930px] justify-center lg:justify-end">
            <Link
              to="/umkm"
              className="px-3 py-2 group duration-300 transition-all ease-in-out text-primary flex gap-3 items-center self-end"
            >
              <p className="uppercase font-semibold">Lebih Banyak</p>
              <div className="p-2 bg-green-500 rounded-full rotate-45 group-hover:rotate-0">
                <ArrowUpRight size={24} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Beranda;
