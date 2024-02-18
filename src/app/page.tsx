import ContentHome from "./_components/ContentHome";
import SideBar from "./_components/SideBar";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-between">
      <div className="flex items-center justify-center h-full w-full">
        <SideBar />
        <ContentHome />
      </div>
    </main>
  );
}
