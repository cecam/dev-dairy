import { CardHeader } from "@/components/common/atoms/CardHeader/CardHeader";
import { CardHeaderType } from "@/components/common/atoms/CardHeader/CardHeader.types";

export default function Home() {
  return (
    <main className="bg-white">
      <h1 className="text-4xl font-bold text-center">
        Welcome to your Next.js app
      </h1>
      <div className="w-1/3">
        <CardHeader title="hola" link="/" type={CardHeaderType.CARD} />
      </div>
    </main>
  );
}
