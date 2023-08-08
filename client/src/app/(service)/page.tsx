import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center h-[90vh] justify-center">
      <div className="border-dotted border-2 p-3 mx-3">
        Hello, My Name is Kiiko. <br />I suggest kiko.
      </div>
      <Image src="/kiko3.svg" alt="kiiko" width={300} height={300} />
      <div className="mt-2">
        <Link href="/suggest" className="border-4 bg-indigo-600 p-3">
          start
        </Link>
      </div>
    </div>
  );
};

export default Page;
