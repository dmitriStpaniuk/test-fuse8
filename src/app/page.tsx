import Search from "@/components/Search/Search";
import Card from "@/components/Card/Card";
export default function Home() {
  return (
    <main className="h-screen ">
      <div className="flex flex-col items-center justify-center gap-8">
        <Search />
        <Card />
      </div>
    </main>
  );
}
