import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { copyToClipboard } from "@/utils/string";
import { type ConnectedWallet } from "@privy-io/react-auth";

import { Copy, ExternalLink, MoreVertical } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

type AccountInfoModalProps = {
  wallet: ConnectedWallet;
};

export function AccountInfoModal({ wallet }: AccountInfoModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:text-primary">
          <MoreVertical className="h-5 w-5" />
        </button>
      </DialogTrigger>
      <DialogContent className="xs:px-3">
        <DialogHeader className="px-4">
          <DialogTitle>detalle de cuenta</DialogTitle>
          <DialogDescription className="text-left">
            esta es una cuenta web3 que firma tx y maneja activos digitales
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col space-y-1">
            <Label
              htmlFor="walletAddress"
              className="flex w-full justify-between px-4"
            >
              <span className="flex items-center">
                dirección pública
                <Link
                  href={`https://sepolia.arbiscan.io/address/${wallet?.address}`}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center"
                >
                  <button>
                    <ExternalLink className="mb-0.5 ml-2 h-4 w-4" />
                  </button>
                </Link>
              </span>
              <button
                onClick={() => {
                  copyToClipboard(wallet.address);
                  toast.info("dirección copiada");
                }}
              >
                <Copy className="h-4 w-4" />
              </button>
            </Label>
            <Input
              id="walletAddress"
              value={wallet.address}
              className="border-0 px-0 text-center font-mono font-black"
              disabled
            />
          </div>
          <div className="flex flex-col space-y-1.5 px-2">
            <Label
              htmlFor="walletAlias"
              className="flex w-full justify-between px-2"
            >
              alias
            </Label>
            <Input
              id="walletAlias"
              value={wallet.walletClientType as string}
              disabled
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose className="px-2">
            <Button className="w-full" variant="outline">
              cerrar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
