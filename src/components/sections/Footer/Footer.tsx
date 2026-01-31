import GpsLocationIcon from '../../../assets/icons/gps.svg';
import SmarthphoneIcon from '../../../assets/icons/smarthphone.svg';
import TwitterIcon from '../../../assets/icons/twitter.svg';
import FacebookIcon from '../../../assets/icons/facebook.svg';
import LinkedinIcon from '../../../assets/icons/linkedin.svg';

export function Footer() {
  return (
    <footer className="flex items-center justify-center bg-dark pt-[80px] pb-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-[repeat(3,auto)_1fr] gap-12 md:gap-30 max-w-screen-xl">
        <nav aria-labelledby="fingertips-heading">
          <h3 
            id="fingertips-heading"
            className="text-white text-xl font-normal mb-6 pb-6"
          >
            Fingertipe
          </h3>
          <ul className="flex flex-col gap-6">
            <li>
              <a href="#" className="text-white text-base font-normal hover:text-gray-300 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-base font-normal hover:text-gray-300 transition-colors">
                Examples
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-base font-normal hover:text-gray-300 transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-base font-normal hover:text-gray-300 transition-colors">
                Updates
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-labelledby="resources-heading">
          <h3 
            id="resources-heading"
            className="text-white text-xl font-normal mb-6 pb-6"
          >
            Resources
          </h3>
          <ul className="flex flex-col gap-6">
            <li>
              <a href="#" className="text-white text-base font-normal hover:text-gray-300 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-base font-normal hover:text-gray-300 transition-colors">
                Examples
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-base font-normal hover:text-gray-300 transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-base font-normal hover:text-gray-300 transition-colors">
                Updates
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-labelledby="about-heading">
          <h3 
            id="about-heading"
            className="text-white text-xl font-normal mb-6 pb-6"
          >
            About
          </h3>
          <ul className="flex flex-col gap-6">
            <li>
              <a href="#" className="text-white text-base font-normal hover:text-gray-300 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-base font-normal hover:text-gray-300 transition-colors">
                Examples
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-base font-normal hover:text-gray-300 transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-base font-normal hover:text-gray-300 transition-colors">
                Updates
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-6">
          <address className="not-italic flex items-center gap-3">
            <img
              src={GpsLocationIcon}
              alt=""
              className="mt-1"
            />
            <span className="text-white text-base font-normal">
              7480 Mockingbird Hill undefined
            </span>
          </address>

          <div className="flex items-center gap-3">
            <img
              src={SmarthphoneIcon}
              alt=""
            />
            <a 
              href="tel:+12395550108"
              className="text-white text-base font-normal hover:text-gray-300 transition-colors"
            >
              (239) 555-0108
            </a>
          </div>

          <div className="flex items-center gap-6" role="list">
            <a 
              href="#" 
              aria-label="Twitter"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={TwitterIcon} alt="" />
            </a>
            <a 
              href="#" 
              aria-label="Facebook"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={FacebookIcon} alt="" />
            </a>
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={LinkedinIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}