import React from 'react';
import './globals.css';
import Head from 'next/head';
import Image from 'next/image';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
      </Head>

      <div id="splash">
        <div id="splash_text"></div>
        {/* /splash */}
      </div>
      <div id="container">
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/hinahina-chips">
                    Git
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="mailto:hinahinachips4510&#64;gmail.com">
                    Mail
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    About
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#skills">
                      skill
                    </a>
                    <a className="dropdown-item" href="#works">
                      works
                    </a>
                    <a className="dropdown-item" href="#careers">
                      career
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://note.com/notes">
                    Note
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main className="w-100">
          <div>{children}</div>
        </main>
        <footer className="d-flex align-items-center justify-content-center">
          <div className="footer-introduce">
            <Image src="/images/footer/my_face.jpg" alt="My Face" width={150} height={150} className="rounded-pill" />
            <section className="text-white mt-5 ml-3">
              多趣味な大学院生です。
              <br />
              Noteに知識のアウトプットと論文の実装
              <br />
              趣味などを綴っています。
            </section>
          </div>
        </footer>
      </div>
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://rawgit.com/kimmobrunfeldt/progressbar.js/master/dist/progressbar.min.js"></script>
      <script src="/js/myscript.js"></script>
    </>
  );
}