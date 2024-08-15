import Image from "next/image";
import Style from "@/styles/pages/index.module.scss";

export default function Home() {
  return (
    <>
      <div id="title" className={Style.title}>
        <h1>両者顔合わせのしおり</h1>
        <p>岡橋家 & 渡邊家</p>
        <p>顔合わせ食事会</p>
      </div>
      <div id="greeting" className={Style.greeting}>
        <h2>ごあいさつ</h2>
        <p>
          本日はご多用のところ 私たちふたりのためにお集まりいただき
          誠にありがとうございます 本日の食事会で両家の親睦を
          深める機会にできればと思っております
          本日はどうぞよろしくお願いいたします。
        </p>
      </div>
      <div className={Style.details}>
        <h2>当日の予定</h2>
        <div id="detailContents" className={Style.detailContents}>
          <div id="map" className={Style.map}>
            <h4>会場</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.8020347477354!2d139.62330547584577!3d35.45969514211189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185db755d1cfcb%3A0xb3d0979a6d6c0535!2sKT%20Zepp%20Yokohama!5e0!3m2!1sja!2sjp!4v1722234447709!5m2!1sja!2sjp"
              width="400"
              height="300"
              loading="lazy"
            ></iframe>
          </div>
          <div id="schedule" className={Style.schedule}>
            <h4>流れ</h4>
            <ul>
              <li>12:00 : 集合</li>
              <li>12:05 : 家族紹介</li>
              <li>12:10 : 乾杯、会食・歓談</li>
              <li>13:45 : 結びの挨拶</li>
              <li>14:00 : 記念撮影</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="profile" className={Style.profile}>
        <h2>プロフィール</h2>
        <div className={Style.profileContents}>
          <div>
            <Image
              src="/images/noimage.jpeg"
              width={300}
              height={300}
              alt=""
              id="profileImage"
              className={Style.profileImage}
            />
            <h4>岡橋一樹</h4>
          </div>
          <div>
            <Image
              src="/images/noimage.jpeg"
              width={300}
              height={300}
              alt=""
              id="profileImage"
              className={Style.profileImage}
            />
            <h4>渡邊優紀</h4>
          </div>
        </div>
      </div>
      <div id="familyProfile" className={Style.familyProfile}>
        <h2>家族紹介</h2>
        {/* @memo: この辺はカードを使用すると良さそう */}
      </div>
      <div id="contact" className={Style.contact}>
        <h2>ご連絡</h2>
        {/* @memo: LINEのQRコード貼る */}
      </div>
    </>
  );
}
