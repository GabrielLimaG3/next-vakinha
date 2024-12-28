import { CardComponent } from "@/components/cardComponent";
import { BannerComponent } from "@/components/bannerComponent";
export default function Home() {
  return (
    <div>
      <div className="flex items-center gap-56 my-12">
        <BannerComponent/>
        <CardComponent/>
      </div>
    </div>
  );
}
