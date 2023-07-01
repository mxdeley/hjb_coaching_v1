import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";

import { AlbumArtwork } from "@/components/album-artwork";
import { listenNowAlbums } from "@/data/albums";
import "../globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog",
  description: "Example music app using the components.",
};

export default function MusicPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/music-light.png"
          width={1280}
          height={1114}
          alt="Music"
          className="block dark:hidden"
        />
        <Image
          src="/examples/music-dark.png"
          width={1280}
          height={1114}
          alt="Music"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden md:block">
        <div className="bg-gray-800 mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-50 py-4">
                The Blog
              </h2>
              <p className="text-sm text-muted-foreground text-gray-200">
                Check out my latest blogs.
              </p>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="grid grid-cols-4 space-x-4 pb-4 mx-auto items-center">
            {listenNowAlbums.map((album) => (
              <AlbumArtwork
                key={album.name}
                album={album}
                className="w-[250px]"
                aspectRatio="portrait"
                width={250}
                height={330}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
