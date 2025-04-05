
import Products from "../Products";
import styles from "./Home.module.scss"

function Home() {
  const dailyWearProduct = [
     {
      "id": 1,
      "name": "Quần dài kaki ECC Pants",
      "image": "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/December2024/quan-dai-kaki-ecc-pants-den_(1).jpg",
      "price": "539.000đ",
      "category": "daily"
    },

    {
      "id": 2,
      "name": "Áo Sơ Mi Dài Tay Essentials Cotton",
      "image": "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/November2024/24CMCW.QD004__Navy_4.jpg",
      "price": "359.000đ",
      "category": "daily"
    },
    {
      "id": 3,
      "name": "Áo Thun Nam Cotton 220GSM",
      "image": "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/AT.220.NAU.1.jpg",
      "price": "161.000đ",
      "category": "daily"

    },
    {
      "id": 4,
      "name": "Áo Polo Nam Pique Cotton",
      "image": "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/December2024/polo-pique-basic-cotton-103-nau-dam_(7).png",
      "price": "254.000đ",
      "category": "daily"
    },
    {
      "id": 5,
      "name": "Quần shorts ECC Ripstop",
      "image": "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2024/Xam_Sang_1.jpg",
      "price": "249.000đ",
      "category": "daily"
    },
  ]
  const runningWearProduct = [
    {
      "id": 6,
      "name": "Áo thun nữ chạy bộ Core Tee Slimfit",
      "image": "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2025/ao-thun-nu-chay-bo-core-tee-slimfit-11872-tim_85.jpg",
      "price": "179.000đ",
      "category": "running"
    },

    {
      "id": 7,
      "name": "Áo thun chạy bộ Advanced Vent Tech",
      "image": "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/July2024/24CMAW.AT027.20_40.jpg",
      "price": "176.000đ",
      "category": "running"
    },
    {
      "id": 8,
      "name": "Quần Shorts chạy bộ Advanced Vent Tech",
      "image": "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/July2024/24CMAW.QS025.40_66.jpg",
      "price": "180.000đ",
      "category": "running"

    },
    {
      "id": 9,
      "name": "Áo Singlet nữ chạy bộ Core Tank",
      "image": "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2025/ao-singlet-nu-chay-bo-core-tee-sieu-nhe-0--hong-lotus_68.jpg",
      "price": "170.000đ",
      "category": "running"
    },
    {
      "id": 10,
      "name": "Áo Singlet Chạy Bộ Graphic Special",
      "image": "https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/January2024/23CMAW.TT004.1.jpg",
      "price": "142.000đ",
      "category": "running"
    },
  ]
  return (
    <div className={styles.wrapper}> 
      <section className= {styles.dailyWearProduct}>
         <img src="https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2025/Mac_hang_ngay_-_Homepage_-_Desktop.jpg" alt="" />
         <h1>SẢN PHẨM MẶC HẰNG NGÀY</h1>
      </section>
      <Products products = {dailyWearProduct}/>
      <section className= {styles.runningWearProduct}>
        <img src="https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2025/Do_chay_bo_-_Homepage_-_Desktop.jpg" alt="" />
        <h1>SẢN PHẨM CHẠY BỘ</h1>
      </section >
      <Products products = {runningWearProduct}/>
    </div>
  );
}

export default Home;
