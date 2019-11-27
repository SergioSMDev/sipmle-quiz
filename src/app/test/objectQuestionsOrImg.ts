export interface ObjectQuestionsOrImg {
  isUrl: boolean;
  strQ: string;
  imgUrl: string;
}
export function build(isU: boolean, strQuest: string, imgU: string): ObjectQuestionsOrImg {

  return { isUrl: isU, strQ: strQuest, imgUrl: imgU };
}
