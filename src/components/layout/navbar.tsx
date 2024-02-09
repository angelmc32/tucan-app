"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLogin, useLogout, usePrivy } from "@privy-io/react-auth";

import { museoModernoFont } from "@/lib/fonts";

import { Button } from "@/components/ui/button";
import HamburgerMenu from "./hamburgerMenu";
import DaoDropdownMenu from "./daoDropdownButton";

export default function Navbar() {
  const router = useRouter();
  const { authenticated } = usePrivy();
  const { login } = useLogin({
    onComplete: () => {
      router.push("/cuenta");
    },
    onError: (error) => {
      console.log(error);
      // Any logic you'd like to execute after a user exits the login flow or there is an error
    },
  });
  const { logout } = useLogout({
    onSuccess: () => {
      router.push("/");
    },
  });

  return (
    <nav className="sticky top-0 h-16 bg-background">
      <div className="mx-auto flex h-full max-w-7xl justify-between px-4">
        <div className="flex items-center space-x-0 md:space-x-4">
          <Link
            href="/"
            className="flex items-center gap-1 px-2 text-black hover:text-primary"
          >
            <div className="flex items-center">
              <Image
                src="/icons/tucan-logo-512x512.png"
                alt="toucan logo"
                height={48}
                width={48}
              />
            </div>
            <span
              className={`${museoModernoFont.className} text-4xl font-semibold tracking-tighter`}
            >
              tucan
            </span>
          </Link>
        </div>

        {/* Primary Navbar items */}
        <div
          className={`${museoModernoFont.className} hidden items-center space-x-4 lg:flex`}
        >
          <DaoDropdownMenu />
          <Link href="#">
            <Button
              variant="outline"
              size="sm"
              className={`${museoModernoFont.className} text-md`}
            >
              comunidad
            </Button>
          </Link>
          <Link href="#">
            <Button
              variant="outline"
              size="sm"
              className={`${museoModernoFont.className} text-md`}
            >
              recursos
            </Button>
          </Link>
          <Button
            variant={authenticated ? "outline" : "default"}
            size="sm"
            className={`${museoModernoFont.className} text-md`}
            onClick={authenticated ? logout : login}
          >
            {authenticated ? "salir" : "entrar"}
          </Button>
        </div>

        <div className="flex items-center lg:hidden">
          <HamburgerMenu
            authenticated={authenticated}
            login={login}
            logout={logout}
          />
        </div>
      </div>
    </nav>
  );
}
