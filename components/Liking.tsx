"use client";
import Image from "next/image";
import { useState } from "react";

import {
  addLikeToThreads,
  unLikeToThreads,
} from "@/lib/actions/thread.actions";

interface props {
  threadId: string;
  currentUserId: string;
  liked: boolean;
}

const Liking = ({ threadId, currentUserId, liked }: props) => {
  const [like, setLike] = useState(liked);

  //   if (user.likedPosts.length > 0) {
  //     setLike(true);
  //   }

  const addLikeToPost = async (threadId: string, currentUserId: string) => {
    if (liked) {
      const responese = await unLikeToThreads(threadId, currentUserId);
      if (responese) {
        setLike(false);
      }
    }

    const responese = await addLikeToThreads(threadId, currentUserId);

    if (responese) {
      setLike(!liked);
    }
  };
  return (
    <div>
      
      <Image
        src={like ? "/assets/heart-filled.svg" : "/assets/heart-gray.svg"}
        alt="heart"
        width={24}
        height={24}
        className="cursor-pointer object-contain"
        onClick={() => addLikeToPost(threadId, currentUserId)}
      />
    </div>
  );
};

export default Liking;
