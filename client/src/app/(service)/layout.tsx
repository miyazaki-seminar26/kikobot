import { Logo } from "@/ui/svg/Logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="h-[10vh] p-5 flex justify-center items-center bg-zinc-400">
        <Logo />
      </div>
      <main>
        <div className="items-center  bg-zinc-900 text-white">{children}</div>
      </main>
    </div>
  );
}
