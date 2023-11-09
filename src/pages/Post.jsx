import { useLocation } from "react-router-dom";
import { RichText } from "@graphcms/rich-text-react-renderer";

export default function Post() {
  const location = useLocation();
  const article = location.state?.article;

  const customRenderers = {
    h1: ({ children }) => (
      <h1 className="text-4xl font-medium mb-4 self-start">{children}</h1>
    ),
    p: ({ children }) => (
      <p className="text-justify py-2">
        <span className="inline-block w-10" />
        {children}
      </p>
    ),
    img: ({ src, alt }) => (
      <img src={src} alt={alt} className="w-full h-[400px] object-cover my-4" />
    ),
  };

  function formatTanggal(inputTanggal) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(inputTanggal);
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <>
      <div
        className="relative h-fit w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${article.thumbnail.url})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 flex flex-col justify-center items-center text-white h-[400px] md:h-[700px] pt-[100px]">
          {article.kategorirefs.map((kategori) => (
            <p
              key={kategori.slug}
              className="text-sm md:text-xl text-green-500 font-semibold uppercase px-2"
            >
              {kategori.nama}
            </p>
          ))}
          <h1 className="text-4xl md:text-5xl font-bold text-center py-4">
            {article.judul}
          </h1>
          <div className="flex md:flex-row flex-col md:justify-around w-full px-[10%]">
            <div className="flex gap-4 items-center justify-center">
              <img
                src={article.penulisrefs.avatar.url}
                alt="Avatar"
                className="w-6 h-6 rounded-fullp object-cover rounded-full"
              />
              <p className="text-base md:text-lg font-medium text-opacity-80 text-white text-center my-2 md:my-3 lg:my-4 ">
                {article.penulisrefs.penulis}
              </p>
            </div>
            <p className="text-base md:text-lg font-medium text-opacity-80 text-white text-center self-center">
              {formatTanggal(article.tanggal)}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col justify-center items-center py-4 md:py-8 lg:px-[25%] md:px-[10%] text-center px-4 bg-white">
        <RichText content={article.konten.raw} renderers={customRenderers} />
      </div>
    </>
  );
}
