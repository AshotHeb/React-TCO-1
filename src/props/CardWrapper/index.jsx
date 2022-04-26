import { Card } from "./Card";
import "./styles.css";

export const CardWrapper = () => {
  const imgUrl1 = "https://onex.am/img/pages/export/export_usa.jpg";
  const takiText1 = "Արտահանում ՀՀ-ից դեպի ԱՄՆ";

  const imgUrl2 = "https://onex.am/img/pages/export/export_rus.jpg";
  const takiText2 = "Արտահանում ՀՀ-ից դեպի Ռուսաստան";

  const imgUrl3 = "https://onex.am/img/docs.svg";
  const takiText3 = "Փաստաթղթերի առաքում ՀՀ-ից";

  return (
    <div className="card-wrapper">
      <Card imgUrl={imgUrl1} text={takiText1} />
      <Card imgUrl={imgUrl2} text={takiText2} />
      <Card imgUrl={imgUrl3} text={takiText3} />
    </div>
  );
};
