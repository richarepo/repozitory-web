export const onScroll = (firstSide: string, secondSide: string, scrollTime: number) => {
  let side1: any = document.getElementById(firstSide);
  let side2: any = document.getElementById(secondSide);

  if (window.pageYOffset > scrollTime) {
    const offset = window.pageYOffset - scrollTime;
    side1.style.left = offset + "px";
    side2.style.left = -offset + "px";
  } else {
    side1.style.left = 0;
    side2.style.left = 0;
  }
};