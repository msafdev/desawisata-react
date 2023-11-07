export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className="text-white bg-primary md:px-10 px-4 py-10 flex lg:flex-row flex-col gap-4 md:gap-6 lg:gap-10 lg:text-left text-center">
        <h1 className="font-bold text-2xl">Desa Wisata</h1>
        <div className="flex flex-col lg:ml-auto">
          <h1 className="font-semibold text-lg">Kunjungi Kami</h1>
          <div className="flex flex-col mt-4 gap-1 text-opacity-90 text-white">
            <h1 className="font-semibold text-xs md:text-sm lg:text-base">
              Google Maps
            </h1>
            <h1 className="font-normal text-xs md:text-sm lg:text-base w-[200px] md:w-[300px] self-center">
              Jl. Desa Wisata No. 1, Desa Wisata, Kec. Wisata, Kota Semarang,
              Jawa Tengah.
            </h1>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg">Hubungi Kami</h1>
          <div className="flex flex-col mt-4 gap-1 text-opacity-90 text-white">
            <h1 className="font-normal text-xs md:text-sm lg:text-base">
              desapariwisata@gmail.com
            </h1>
            <h1 className="font-normal text-xs md:text-sm lg:text-base">
              0812-3456-7890
            </h1>
          </div>
        </div>
      </div>
      <p className="text-center bg-primary text-white text-xs uppercase pt-2 pb-4 text-opacity-75">
        © 2023 Desa Wisata Kebonan. All rights reserved.
      </p>
    </div>
  );
}
