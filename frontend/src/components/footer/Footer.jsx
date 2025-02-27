import { footerCategories } from "../../utils/footerCategories";
import { socialLinks } from "../../utils/socialLinks";
import Logo from "../header/Logo";
import Categories from "./Categories";
import CorporateOfficeInfo from "./CorporateOfficeInfo";
import RecentPost from "./RecentPost";
import SocialMediaLink from "./SocialMediaLink";

function Footer() {
  return (
    <footer className="bg-[#0F1012] ">
      <div className="grid grid-cols-4 max-w-7xl m-auto py-20 gap-10  ">
        <div className="flex flex-col items-start gap-6">
          <Logo />
          <p className="text-main-gray">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
            hic? Porro alias dolorem dolore voluptate laboriosam suscipit
            debitis, deleniti magnam dolores laborum.
          </p>
          <div className="flex space-x-2">
            {socialLinks.map(({ id, link, icon }) => (
              <SocialMediaLink key={id} link={link} icon={icon} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold text-2xl">Categories</h3>
          <hr class="border-t-2 border-main-red my-4 w-10" />
          {footerCategories.map((item) => (
            <Categories key={item.id} item={item} />
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold text-2xl">Recent Post</h3>
          <hr class="border-t-2 border-main-red my-4 w-10" />
          <RecentPost />
        </div>
        <div>
          <h3 className="text-white font-bold text-2xl">Corporate Office</h3>
          <hr class="border-t-2 border-main-red my-4 w-10" />
          <CorporateOfficeInfo />
        </div>
      </div>
      <div className="border-t-[0.5px] border-gray-600 flex justify-center py-6 ">
        <p className="text-main-gray font-semibold text-center max-w-7xl tracking-wider">
          © {new Date().getFullYear()}. All Rights Reserved by{" "}
          <a href="/">GameGrid</a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
