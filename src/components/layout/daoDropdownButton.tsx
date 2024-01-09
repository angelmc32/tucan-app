import { ChevronDown, ExternalLink } from "lucide-react";

import { museoModernoFont } from "@/lib/fonts";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function DaoDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={`${museoModernoFont.className} border-primary/25 pl-2 pr-1.5`}
          variant="outline"
          size="sm"
        >
          <span className="mr-1.5 text-[16px]">frutero club</span>
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={`${museoModernoFont.className} mt-1 border-2 border-primary/25 bg-background px-2 py-1.5`}
      >
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link
              href="https://frutero.club"
              target="_blank"
              rel="noopener noreferrer"
              className="flex"
            >
              <span className="mr-2">sitio web</span>
              <ExternalLink size={16} className="mt-0.5" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="#">
              <span>dework</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="#">
              <span>notion</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="#">
              <span>miembros</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="#">
              <span>multisig</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
