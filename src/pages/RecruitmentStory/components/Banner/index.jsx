import { Link } from "react-router-dom";
import styles from "./Banner1.module.scss";
import config from "@/config";
function Banner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.recruitment_banner}>
        <div className={styles.recruitment_img}>
          <img
            src="https://mcdn.coolmate.me/image/December2023/mceclip0_81.jpg"
            alt="Images"
          />
        </div>
        <div className={styles.recruitment_content}>
          <h1>Câu Chuyện Về Coolmate</h1>
          <h3>
            Đây là chuyên mục giúp các bạn biết được Coolmate đã hình thành ra
            sao và chúng tôi muốn xây dựng một công ty như thế nào!
          </h3>
        </div>
        <div className={styles.recruitment_tab}>
          <Link to={config.routes.recruitmentStory}>
            <a href="">
              <div className={styles.story}>
                <div className={styles.tab_img}>
                  <img
                    src="https://mcdn.coolmate.me/image/October2023/mceclip2_97.png"
                    alt=""
                  />
                </div>
                <div className={styles.tab_content}>
                  <p>Câu chuyện</p>
                  <p>về Coolmate</p>
                </div>
                <div className={styles.tab_btn}>
                  <img
                    src="https://mcdn.coolmate.me/image/September2023/mceclip0_76.png"
                    alt=""
                  />
                </div>
              </div>
            </a>
          </Link>

          <Link to={config.routes.recruitment}>
            {" "}
            <a href="">
              <div className={styles.coolmate}>
                <div className={styles.tab_img}>
                  <img
                    src="https://mcdn.coolmate.me/image/October2023/mceclip6_55.png"
                    alt=""
                  ></img>
                </div>
                <div className={styles.tab_content}>
                  <p>Coolmate</p>
                  <p>101</p>
                </div>
                <div className={styles.tab_btn}>
                  <img
                    src="https://mcdn.coolmate.me/image/September2023/mceclip0_76.png"
                    alt=""
                  />
                </div>
              </div>
            </a>
          </Link>
          <Link to={config.routes.RecruitmentExcellent}>
            <a href="">
              <div className={styles.display}>
                <div className={styles.tab_img}>
                  <img
                    src="https://mcdn.coolmate.me/image/October2023/mceclip4_93.png"
                    alt=""
                  />
                </div>
                <div className={styles.tab_content}>
                  <p>DVKH</p>
                  <p>Xuất sắc</p>
                </div>
                <div className={styles.tab_btn}>
                  <img
                    src="https://mcdn.coolmate.me/image/September2023/mceclip0_76.png"
                    alt=""
                  />
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
