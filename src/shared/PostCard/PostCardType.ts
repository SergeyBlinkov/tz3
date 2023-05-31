import { Ref } from "react";

export type TPostCard = {
  id: number;
  title: string;
  text: string;
  img?: string;
  isLastElementRef?: null | Ref<HTMLDivElement>;
};
