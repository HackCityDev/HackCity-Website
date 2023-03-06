import Image from "next/image";

export default function Loader() {
  return (
    <div className={"PageLoadingModal"}>
      <div className={"internalLoadingModal"}>
        <Image src="/preloader.gif" width="100px" height="100px" />
      </div>
    </div>
  );
}
