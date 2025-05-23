import styles from "./TopBar.module.scss";
function TopBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topBar}>
        <ul>
          <li>
            <a href="/lp/coolmate-101?itm_source=navbar">VỀ COOLMATE</a>
          </li>
          <li>
            <a href="/84rising?itm_source=navbar">84RISING*</a>
          </li>
          <li>
            <a href="">COOLXPRINT</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/page/coolclub-chuong-trinh-khach-hang-than-thiet-cua-coolmate?itm_source=navbar">
              CoolClub
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.15861 1.30996C8.55219 0.697193 9.44781 0.697195 9.84139 1.30996L12.1986 4.97987C12.334 5.19071 12.5436 5.34302 12.786 5.40666L17.0047 6.51442C17.7091 6.69938 17.9859 7.55117 17.5247 8.11484L14.7628 11.4907C14.6042 11.6847 14.5241 11.9311 14.5385 12.1813L14.7886 16.5358C14.8303 17.2629 14.1058 17.7893 13.4272 17.5249L9.36304 15.9415C9.12956 15.8505 8.87044 15.8505 8.63696 15.9415L4.57282 17.5249C3.89423 17.7893 3.16966 17.2629 3.21142 16.5358L3.46153 12.1813C3.4759 11.9311 3.39582 11.6847 3.23716 11.4907L0.475274 8.11484C0.0141246 7.55117 0.290888 6.69938 0.995283 6.51442L5.21399 5.40666C5.45636 5.34302 5.66599 5.19071 5.80141 4.97987L8.15861 1.30996Z"
                  fill="#D1D1D1"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Trung tâm CSKH</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;
