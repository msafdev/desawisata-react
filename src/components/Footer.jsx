import { PinIcon } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className="text-white bg-primary md:px-10 px-4 py-10 flex lg:flex-row flex-col gap-4 md:gap-6 lg:gap-10 lg:text-left text-center">
        <div className="w-full lg:max-w-[200px] flex flex-col">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">
            Alas Watu Kebonan
          </h1>
        </div>
        <div className="flex flex-col lg:ml-auto">
          <h1 className="font-semibold text-lg">Kunjungi Kami</h1>
          <div className="flex flex-col mt-4 gap-1 text-opacity-90 text-white">
            <a
              target="_blank"
              href=""
              className="font-semibold text-base md:text-lg underline"
            >
              Google Maps <PinIcon size={16} className="inline mx-1" />
            </a>
            <h1 className="font-normal text-base md:text-lg w-[200px] md:w-[300px] self-center">
              Pulutan, RT.06/RW.02, Kebonan, Kec. Karanggede, Kabupaten
              Boyolali, Jawa Tengah 57381
            </h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15828.013931021847!2d110.6363648!3d-7.3535036!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7564d49f51fd%3A0x12b9ba427bea6dea!2sAlas%20Watu!5e0!3m2!1sid!2sid!4v1699503631549!5m2!1sid!2sid"
              className="md:mt-6 md:mb-2 my-3"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg">Hubungi Kami</h1>
          <div className="flex flex-col mt-4 gap-1 text-opacity-90 text-white">
            <a
              target="_blank"
              href="https://www.instagram.com/alaswatukebonan/"
              className="font-normal text-base md:text-lg underline"
            >
              Instagram
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/people/AlasWatu-Kebonan/pfbid0S9CvQVvdyKDSgNrRNNeGgUJu9WfyR7MsD6LJjBfJ4ySi9fVYECQ6yVfbcQgorPFUl/?ref=xav_ig_profile_web"
              className="font-normal text-base md:text-lg underline"
            >
              Facebook
            </a>
            <a
              target="_blank"
              href="https://www.tiktok.com/@alaswatukebonan?_t=8XlRRdUnfVa&_r=1"
              className="font-normal text-base md:text-lg underline"
            >
              Tiktok
            </a>
          </div>
        </div>
      </div>
      <p className="text-center bg-primary text-white text-xs uppercase pt-2 pb-4 text-opacity-75">
        Program Iptek untuk Desa Binaan UNDIP (IDBU) 2023 Kerjasama
        FIB dan LPPM UNDIP
      </p>
    </div>
  );
}
