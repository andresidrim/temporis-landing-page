import Link from "next/link";
import Image from "next/image";

import ahLogo from "public/images/amazon-hacking-logo.png";
import { Links } from "@/enums/links";

export default function AmazonHackingButton() {
  return (
    <Link
      href={Links.Vote}
      target="_blank"
      className="fixed bottom-12 right-12 w-fit h-fit rounded-full ring-2 ring-white z-[99] shadow-temporis-header shadow-black/50"
    >
      <Image
        src={ahLogo}
        alt="Logo do botão do Amazon Hacking"
        className="w-full h-fit max-w-12 rounded-full crisp-image"
      />
    </Link>
  );
}
