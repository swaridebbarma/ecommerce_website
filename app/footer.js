import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub, FaMaxcdn } from 'react-icons/fa';

const Footer = () => {
    const containerStyle = { maxWidth: '100%' };
  return (
    <div className="container my-5 "style={containerStyle}>
      <footer className="bg-dark text-center text-white">
        <div className="container p-5 pb-0">
          <section className="mb-3">
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/profile.php?id=100090584140539&mibextid=ZbWKwL" role="button">
              <FaFacebookF />
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="https://x.com/debbarma_s72880?t=9c2f8VfxkYEyFZ7mtk3i9g&s=09" role="button">
              <FaTwitter />
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="chrome://newtab/" role="button">
              <FaGoogle />
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/swari1101?igshid=MmVlMjlkMTBhMg==" role="button">
              <FaInstagram />
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/swari-debbarma-631a5a237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" role="button">
              <FaLinkedinIn />
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/swaridebbarma" role="button">
              <FaGithub />
            </a>
          </section>
        </div>

        <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2024 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
