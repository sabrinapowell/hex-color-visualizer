import DeveloperTag from "@/components/layout/developer-tag";
import DisplayRows from "@/components/layout/display-rows";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-screen h-screen px-12 py-6">
      <div className="flex flex-col gap-6 min-w-[840px] max-w-[840px] mx-auto">
        <Header />
        <DisplayRows />
        <div className="fixed top-0 right-4 bg-brand-hover hover:bg-brand-hover-secondary text-white rounded-full">
          <DeveloperTag />
        </div>
      </div>
    </div>
  );
}
