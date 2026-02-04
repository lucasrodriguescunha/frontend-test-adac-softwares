import GpsLocationIcon from '../../assets/icons/gps.svg';
import SmarthphoneIcon from '../../assets/icons/smarthphone.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import LinkedinIcon from '../../assets/icons/linkedin.svg';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="flex items-center justify-center bg-dark pt-[80px] pb-[80px]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-20 max-w-screen-xl w-full">
          <div className="grid grid-cols-1 gap-25 sm:grid-cols-3">
            <nav aria-labelledby="fingertips-heading">
              <h3 className="text-white text-xl mb-6 pb-10">Fingertipe</h3>
              <ul className="flex flex-col gap-6">
                <li><a href="#" className="text-white">Home</a></li>
                <li><a href="#" className="text-white">Examples</a></li>
                <li><a href="#" className="text-white">Pricing</a></li>
                <li><a href="#" className="text-white">Updates</a></li>
              </ul>
            </nav>

            <nav aria-labelledby="resources-heading">
              <h3 className="text-white text-xl mb-6 pb-10">Resources</h3>
              <ul className="flex flex-col gap-6">
                <li><a href="#" className="text-white">Home</a></li>
                <li><a href="#" className="text-white">Examples</a></li>
                <li><a href="#" className="text-white">Pricing</a></li>
                <li><a href="#" className="text-white">Updates</a></li>
              </ul>
            </nav>

            <nav aria-labelledby="about-heading">
              <h3 className="text-white text-xl mb-6 pb-10">About</h3>
              <ul className="flex flex-col gap-6">
                <li><a href="#" className="text-white">Home</a></li>
                <li><a href="#" className="text-white">Examples</a></li>
                <li><a href="#" className="text-white">Pricing</a></li>
                <li><a href="#" className="text-white">Updates</a></li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <address className="not-italic flex items-center gap-3">
              <img src={GpsLocationIcon} alt="" />
              <span className="text-white">
                7480 Mockingbird Hill undefined
              </span>
            </address>

            <div className="flex items-center gap-3">
              <img src={SmarthphoneIcon} alt="Ícone de um Smarthphone" />
              <a href="tel:+12395550108" className="text-white">
                (239) 555-0108
              </a>
            </div>

            <div className="flex items-center gap-6">
              <img src={TwitterIcon} alt="Ícone do Twitter" />
              <img src={FacebookIcon} alt="Ícone do Facebook" />
              <img src={LinkedinIcon} alt="Ícone do Linkedin" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}