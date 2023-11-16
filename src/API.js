import { useState, useEffect } from "react";
import { request } from "graphql-request";

// Fetching produks from Hygraph GQL API
const getUMKM = () => {
  const [produk, setProduk] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = `
  query Produks {
    produks {
      createdAt
      deskripsi
      id
      nama
      publishedAt
      updatedAt
      url
      foto {
        url
      }
    }
  }
  `;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await request(
          "https://api-ap-northeast-1.hygraph.com/v2/clp18ipsf0qig01um8boad5lt/master",
          query
        );
        setProduk(data.produks);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  return { produk, loading };
};

// Fetching artikels from Hygraph GQL API
const getArtikel = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = `
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
    `;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await request(
          "https://api-ap-northeast-1.hygraph.com/v2/clp18ipsf0qig01um8boad5lt/master",
          query
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

  return { blog, loading };
};

export { getUMKM, getArtikel };
