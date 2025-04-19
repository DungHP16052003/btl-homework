import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Thanks.module.scss";
// import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
function Thanks() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.recruitment_thanks}>
        <div className={styles.thanks_content}>
          <h2>
            Trong cuộc sống có quá nhiều sự lựa chọn, cảm ơn bạn đã lựa chọn
            Coolmate!
          </h2>
          <span style={{ fontSize: "60px", color: "#fff" }}>
  <FontAwesomeIcon icon={faQuoteLeft} />
</span>

        </div>
      </div>
    </div>
  );
}

export default Thanks;
