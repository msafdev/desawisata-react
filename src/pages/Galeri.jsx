import { MoveDownRight } from "lucide-react";

export default function Galeri() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-primary pt-[100px]">
      {/* Hero */}
      <div className="hero-4 w-full h-[calc(100vh-100px)] flex flex-col justify-center px-4 md:px-[10%] lg:px-[15%] xl:px-[25%]">
        <p className="text-xs md:text-sm font-semibold text-opacity-80 text-white z-[5] uppercase">
          #Galeri
        </p>
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl z-[5] font-extrabold italic">
          <span className="font-medium not-italic">
            Mengenal <span className="font-bold">Karya</span> Seni Desa Wisata{" "}
          </span>
          Sambirejo
        </h1>
        <p className="text-white text-opacity-80 z-[5] text-sm md:text-lg lg:text-xl font-medium text-justify my-2 md:my-3 lg:my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          necessitatibus ducimus facere, eaque quas cumque excepturi sint!
          Assumenda.
        </p>
        <div className="flex w-full md:flex-row flex-col flex-wrap justify-end items-end gap-x-3 gap-y-2 z-[5]">
          <button className="w-fit flex items-center gap-3 font-semibold text-sm text-white px-4 uppercase group">
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
          Lorem ipsum dolor sit.
        </h1>
        <p className="text-justify">
          Di dusun Bajangan, desa Sambirejo, Kecamatan Bringin, Kabupaten
          Semarang, ada sebuah seni tari yang begitu khas dan menggugah hati,
          bernama Tari Ning Nong. Tarian ini seringkali menjadi sorotan dan
          dipersembahkan oleh anak-anak setiap ada kesempatan istimewa. Uniknya,
          Tari Ning Nong melibatkan baik anak perempuan maupun laki-laki,
          seiring makna dari nama “Ning” yang merujuk kepada perempuan dan
          “Nong” untuk laki-laki. Namun, jauh di balik arti nama itu terdapat
          makna mendalam yang sarat filosofi.
          <div className="py-2" />
          Tari Ning Nong menggambarkan perjalanan seorang anak dalam memasuki
          masa kedewasaan, menghadapi berbagai lika-liku kehidupan yang
          menantang. Hal ini mengajarkan nilai keselarasan dan pentingnya gotong
          royong dalam menghadapi perjalanan hidup yang tak terduga.
          <div className="py-2" />
          Sejarah Tari Ning Nong memiliki kisah yang menarik. Pada zaman dahulu,
          di dusun Bajangan desa Sambirejo, menjelang malam setelah masa panen
          raya, suara merdu gamelan sering terdengar namun asal suaranya tak
          pernah diketahui. Suara gamelan itu berasal dari sebuah tempat keramat
          yang dikenal sebagai Ngasinan, sebuah hutan di tengah dusun. Suatu
          malam, suara gamelan itu terdengar lagi, dan satu anak penasaran ingin
          mencari tahu siapa yang memainkannya.
          <div className="py-2" />
          Namun, sang anak dihalangi oleh bapaknya karena malam itu hujan deras.
          Untuk menghibur anaknya, sang bapak berjanji akan mengundang pemain
          gamelan saat musim panen tiba. Namun, suara gamelan itu terus mengiang
          di telinga sang anak, dan akhirnya, dia bersama teman-temannya mencoba
          menirukan suara gamelan dengan menggunakan alat-alat seadanya seperti
          batok kelapa, kentongan bambu, dan lesung.
        </p>
        <h1 className="uppercase font-semibold text-center mb-4 mt-6 md:mt-12 text-lg md:text-2xl">
          Galeri
        </h1>
        <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-6 gap-4">
          {Array(8)
            .fill()
            .map((_, i) => (
              <div
                key={i}
                className={`bg-gray-300 aspect-square ${
                  i === 0 && "md:col-span-2 lg:col-span-1 md:aspect-auto"
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
