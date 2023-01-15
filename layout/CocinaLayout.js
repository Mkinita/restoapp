import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CocinaLayout({ children, pagina }) {
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Quosco Cafetería" />
      </Head>

      <div className="flex flex-col">
            <aside className="py-2 m-auto">
                <Image
                    width={300}
                    height={100}
                    src="/assets/img/logo.png"
                    alt="imagen logotipo"
                />
            </aside>

            <main className="h-screen m-auto">
                <div className="p-1">
                    {children}
                </div>
            </main>
      </div>
      <ToastContainer />
    </>
  );
}