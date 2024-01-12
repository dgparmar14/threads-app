"use client";
// import { shareThread } from "@/app/redux/slices/Share-Slice";
// import { AppDispatch } from "@/app/redux/store";
import Image from "next/image";
import Link from "next/link";
// import { useDispatch } from "react-redux";

interface Params {
  threadId: string;
}

const ShareThread = ({ threadId }: Params) => {
  // const dispatch = useDispatch<AppDispatch>();

  // const shareThreadToAnotherUser = () => {
  //   dispatch(shareThread({ threadId }));
  // };

  return (
    <div>
      <Link href={`/shareThread/${threadId}`}>
        <Image
          src="/assets/share.svg"
          alt="share"
          width={24}
          height={24}
          className="cursor-pointer object-contain"
        />
      </Link>
    </div>
  );
};

export default ShareThread;
