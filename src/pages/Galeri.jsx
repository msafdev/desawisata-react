import { MoveDownRight } from "lucide-react";
import { galeri } from "../data";

export default function Galeri() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-primary pt-[100px]">
      {/* Hero */}
      <div id="hero" className="hero-4 w-full h-[calc(100vh-100px)] flex flex-col justify-center px-4 md:px-[10%] lg:px-[15%] xl:px-[25%]">
        <p className="text-xs md:text-sm font-semibold text-opacity-80 text-white z-[5] uppercase">
          #Galeri dan Sejarah
        </p>
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl z-[5] font-extrabold italic">
          <span className="font-medium not-italic">
            Mengenal <span className="font-bold">Sejarah</span> dan{" "}
            <span className="font-bold">Keindahan</span>{" "}
          </span>
          Alas Watu Kebonan
        </h1>
        <p className="text-white text-opacity-80 z-[5] text-sm md:text-lg lg:text-xl font-medium text-justify my-2 md:my-3 lg:my-4">
          Mari kenali lebih dekat tentang sejarah dan keindahan Alas Watu
          Kebonan, desa pariwisata yang berada di Kecamatan Karanggede,
          Kabupaten Boyolali.
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
            className="w-fit flex items-center gap-3 font-semibold text-sm text-white px-4 uppercase group"
          >
            Selengkapnya
            <div className="p-3 bg-green-500 rounded-full">
              <MoveDownRight
                size={18}
                className="group-hover:rotate-45 duration-300 transition-all ease-in-out"
              />
            </div>
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="w-full flex flex-col justify-center items-center py-8 md:py-12 text-center lg:px-[25%] md:px-[15%] px-4 bg-white">
        <h1 className="uppercase font-semibold text-center mb-4 text-lg md:text-2xl">
          Sejarah
        </h1>
        <p className="text-justify">
          Alas Watu Kebonan (AWK) adalah sebuah destinasi wisata yang berlokasi
          di desa Kebonan. AWK diinisiasi oleh pihak desa dengan tujuan
          mengembangkan potensi alam daerah tersebut serta meningkatkan
          kesejahteraan masyarakat. Sejarah terbentuknya AWK dimulai saat pihak
          desa menjelajahi potensi desa mereka, termasuk menemukan berbagai
          potensi alam seperti bebatuan besar dan bentuk-bentuk alam yang unik
          selama penjelajahan sungai Serang.
          <div className="py-2" />
          Selama perjalanan ini, mereka menemukan sebuah perbukitan yang awalnya
          merupakan lahan kosong yang ditumbuhi alang-alang dan batu-batu besar
          yang membentuk perbukitan tersebut. Pihak desa Kebonan melihat potensi
          dalam batuan-batuan ini dan memiliki gagasan untuk mengembangkan lahan
          tersebut menjadi wisata.
          <div className="py-2" />
          Mengganti nama lahan tersebut dari "Gowok," yang berasal dari kata
          "mengo lan nguwok" yang berarti terbuka dan berlubang, mengacu pada
          sebuah batu berlubang yang diyakini memiliki makna mistis. Sebelum
          mengubahnya menjadi tempat wisata, pihak desa melakukan sosialisasi
          kepada masyarakat untuk meyakinkan mereka tentang manfaat dan prospek
          positif perubahan ini. Melalui pendekatan yang berkelanjutan,
          masyarakat mulai mendukung gagasan pihak desa Kebonan dalam mengubah
          Gowok menjadi Alas Watu Kebonan (AWK).
          <div className="py-2" />
          AWK akhirnya menjadi destinasi wisata yang menarik, memberikan dampak
          positif bagi masyarakat desa Kebonan, seperti peningkatan lapangan
          kerja, pengembangan UMKM, dan menarik kunjungan wisatawan dari luar.
          Sebagai hasilnya, AWK menjadi tempat yang selalu diingat dan ingin
          dikunjungi kembali oleh pengunjung, terutama kaum milenial.
        </p>
        <h1 className="uppercase font-semibold text-center mb-4 mt-6 md:mt-12 text-lg md:text-2xl">
          Galeri
        </h1>
        <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-6 gap-4 row">
          {galeri.map((item, index) => (
            <div
              key={item.id}
              className={`bg-gray-300 aspect-square md:aspect-auto lg:aspect-square h-auto ${
                index === 0 && "md:col-span-2 lg:col-span-1"
              }`}
            >
              <img
                src={item.url}
                alt={`Foto ${item.id}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
