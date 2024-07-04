import { ChevronRight } from "lucide-react";
import visa from "@/assets/images/visa.png";
import master from "@/assets/images/mastercard.png";
import paypal from "@/assets/images/paypal.png";
import electron from "@/assets/images/electron.png";

function titleGenerator(titleInfo: string[]) {
  return titleInfo.map((title, i) => {
    return (
      <div className="p-0.5 font-normal" key={i}>
        {title}
      </div>
    );
  });
}
const footerImages: string[] = [electron, paypal, master, visa];
const companyInfo: string[] = [
  "About Us",
  "Latest Posts",
  "Contact-Us",
  "Shop",
];

const helpLinks: string[] = [
  "Tracking",
  "Order Status",
  "Delivery",
  "Shipping Info",
  "FAQ",
];

const usefulLinks: string[] = [
  "Special Offer",
  "Gift Cards",
  "Advertising",
  "Terms of use",
];

function Footer() {
  return (
    <div className="bg-[#fbfbfb] p-12">
      <div className="md:grid md:grid-cols-4 sm:grid sm:justify-center sm:gap-y-6 ">
        <div>
          <p className={titleStyle}>COMPANY INFO</p>
          {titleGenerator(companyInfo)}
        </div>
        <div>
          <p className={titleStyle}>HELP LINKS</p>
          {titleGenerator(helpLinks)}
        </div>
        <div>
          <p className={titleStyle}>USEFUL LINKS</p>
          {titleGenerator(usefulLinks)}
        </div>
        <div>
          <p className={titleStyle}>GET IN THE KNOW</p>
          <div className="flex justify-start items-center gap-x-2">
            <input
              type="email"
              className="mt-2 bg-transparent pr-16 border-b border-black"
              placeholder="Enter email"
            />
            <button>
              <ChevronRight color="#555" />
            </button>
          </div>
        </div>
      </div>
      <div className="border border-[#f1f1f1] mt-14"></div>
      <div className="md:flex md:flex-row md:justify-between  sm:flex sm:flex-col sm:items-center mt-8">
        <div className="flex flex-col">
          <p>{`© ${new Date().getFullYear()} PoleStar eCommerce`}</p>
          <p>Privacy Policy Terms & Conditions</p>
        </div>
        <div className="flex flex-row-reverse gap-x-6">
          {footerImages.map((cardImg, i) => {
            return (
              <img key={i} src={cardImg} alt="cardImages" loading="lazy" />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const titleStyle = "text-lg font-medium mb-3";
export default Footer;
