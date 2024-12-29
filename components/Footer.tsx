import facebookIcon from "@/public/icons/facebook-icon.svg";
import twitterIcon from "@/public/icons/twitter-icon.svg";
import instagramIcon from "@/public/icons/instagram-icon.svg";
import linkedinIcon from "@/public/icons/linkedin-icon.svg";

import Image from "next/image";
export function Footer() {
  return (
    <footer className="py-16 bg-zinc-200 flex flex-col relative gap-3 items-center">
      <div className="flex items-center gap-1">
        <span className="text-2xl font-bold">My</span>
        <span className="text-2xl font-bold text-orange-600">Portfolio</span>
      </div>
      <div className="flex gap-2 items-center w-full justify-center">
        <Image src={facebookIcon} alt="Facebook" width={20} height={20} />
        <Image src={twitterIcon} alt="Twitter" width={20} height={20} />
        <Image src={instagramIcon} alt="Instagram" width={20} height={20} />
        <Image src={linkedinIcon} alt="Linkedin" width={20} height={20} />
      </div>
      <div className="flex justify-center p-3 w-full bg-zinc-300 absolute bottom-0">
        <p className="text-muted-foreground text-xs text-center">
          © 2021 My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
