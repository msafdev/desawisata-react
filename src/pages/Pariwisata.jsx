import { useState, useEffect } from "react";
import { MoveDownRight } from "lucide-react";
import request from "graphql-request";

export default function Pariwisata() {
  const [paket, setPaket] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPaket = async () => {
      try {
        const headers = {
          Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTg2OTYxNjMsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aGVhc3QtMi5oeWdyYXBoLmNvbS92Mi9jbG9jeTBrMGhxZnNxMDF1aGY5NTQzMWJtL21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiIzMjIxNmQ0ZC03YmJlLTRmYzQtYjk2My05MzY3MzZkMzM0OGMiLCJqdGkiOiJjbG9kYnU0YjdzMnNrMDF0ZDNleHczNnhxIn0.eeUtrd_Gdvun3DrkH4frV5tuJKkDknrfF5wDiSCg74m_hcn9KvGBqzFe65tjcAsF-1KkeJlfXIhlVP9MUsPwQ-uE970fXixFHuCks45t0v_SeP4VVN2rlLUpNTwn3bgWiAosOpYfz2mOofml08jdu3WFI8Y7-aZYjJ0IvFtoy51bC9bykEe9mW5Tak8wjZGVlEvUvbR2pLEGJbk8Z82e-0myFJ0FibBm8LPIerPbg3n5abZbM6wf6eiMMPs3w9lly6OkbpTZCdjm7Nmp9bfq3BlKhSFYtv4u9Bxs7Im0z1HrFASrwFxqa78srWTLFbUTT_FYvUhZH00FbWjxHm9V8Ymx291mXH47su2kmuVAztpGrfwjncmqKTn7cUk_0sIVmKpzUWr-ZBTzUQZWf4443hKIy8SRIeRKMvkZJTamwaQAVZyid7ejl8UrPl9CaK59qGjUBoTPDvAJCd7YpSH686bk0NcwzTj0d93-wGAIh1cU_ewYF7jvSMkvo2BqyV3jSDK6RJlMQuVIudj2QD6vZLz4mO8sH76_d9u31CY9DJNVpUaBVoh2ou2Npt_PSX362ipwrEnbZIoLPQ6_0gsZzgn4Py9bBqcK6EnXR4FHxBPqTOMC-vhsA52jgbu4J4USixKn53MsDZnEg9GGHQpQXEIgwubweapv3rr4k8BqQZM`,
        };

        const data = await request(
          "https://ap-southeast-2.cdn.hygraph.com/content/clocy0k0hqfsq01uhf95431bm/master",
          `
          query Paket {
            pakets {
              id
              nama
              deskripsi
              harga
              foto {
                url
              }
            }
          }
        `,
          { headers }
        );
        setPaket(data.pakets);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchPaket();
  }, []);

  console.log(paket);

  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-primary pt-[100px]">
      {/* Hero */}
      <div
        id="hero"
        className="hero-2 w-full h-[calc(100vh-100px)] flex flex-col justify-center px-4 md:px-[10%] lg:px-[15%] xl:px-[25%]"
      >
        <p className="text-xs md:text-sm font-semibold text-opacity-80 text-white z-[5] uppercase">
          #Pariwisata
        </p>
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl z-[5] font-extrabold italic">
          <span className="font-bold not-italic">Jelajahi</span>{" "}
          <span className="font-medium not-italic">Keindahan Eduwisata </span>
          Alas Watu Kebonan
        </h1>
        <p className="text-white text-opacity-80 z-[5] text-sm md:text-lg lg:text-xl font-medium text-justify my-2 md:my-3 lg:my-4">
          AWK menawarkan bermacam-macam wahana wisata yang dapat dinikmati oleh
          semua kalangan, mulai dari anak-anak, remaja, hingga dewasa. Dengan
          harga tiket yang terjangkau, Anda dapat menikmati berbagai wahana
          wisata yang ada di AWK.
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
      {/* Detail */}
      <div className="w-full flex flex-col justify-center items-center py-8 gap-y-6 md:py-12 text-center bg-white">
        <h1 className="uppercase font-semibold text-center md:mb-2 text-lg md:text-2xl lg:px-[25%] md:px-[15%] px-4">
          Variasi Paket di Alas Watu Kebonan
        </h1>
        {/* Pariwisata Cards */}
        {paket.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row gap-y-4 md:w-full md:max-w-none max-w-[400px] gap-x-6 lg:px-[20%] md:px-[5%] px-4 justify-center"
          >
            <div className="md:w-[300px] md:h-auto md:max-h-[250px] h-[200px] bg-gray-300">
              <img
                src={item.foto.url}
                alt={`Pariwisata ${item.nama}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col md:w-[500px]">
              <h1 className="text-left font-semibold md:text-xl text-lg">
                {item.nama}
              </h1>
              <p className="text-justify md:text-lg text-base my-2">
                {item.deskripsi}
              </p>
              <div className="w-fit flex items-center gap-3 font-semibold text-sm text-white bg-primary px-4 py-2 rounded-full mt-auto ml-auto group">
                {item.harga
                  .toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })
                  .replace(",00", "")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
