import Pagination from "@/components/Pagination/Pagination";
import Search from "@/components/Search/Search";
export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="flex w-full flex-col gap-4 md:gap-8">
        <Search />
        <div className="mt-4 md:mt-8">
          <Pagination />
        </div>
      </div>
    </main>
  );
}
