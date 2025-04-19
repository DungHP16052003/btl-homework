import styles from "./Story.module.scss";

function Story() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.recruitment_story}>
        <div className={styles.story_content}>
          <div className={styles.story_img}>
            <img
              src="https://mcdn.coolmate.me/uploads/April2022/1-8_14.jpg"
              alt="image"
            />
          </div>
          <div className={styles.story_text}>
            <h2>Câu chuyện dịch vụ khách hàng của Coolmate</h2>
            <div className={styles.story_description}>
            <p>
              Theo một khảo sát gần đây nhất của Coolmate tự thực hiện thì có
              tới 51% khách hàng quyết định mua sắm ở Coolmate vì ấn tượng với
              dịch vụ khách hàng. 94% khách hàng sẵn sàng giới thiệu Coolmate
              với những người khác.
            </p>
            <p>
              Ở Coolmate, chúng tôi tin rằng việc bán một gói hàng đó là bán cả
              một trải nghiệm mua sắm. Coolmate có kỳ vọng trở thành một thương
              hiệu điển hình về việc hướng tới khách hàng một cách sâu sắc tại
              Việt Nam. Với mong muốn góp một phần nhỏ thay đổi nhận thức của
              các doanh nghiệp trong việc mang tới những trải nghiêm tốt hơn cho
              khách hàng, đặc biệt trong lĩnh vực Thương Mại Điện Tử.
            </p>
            <p>
              Coolmate là thương hiệu đầu tiên và hiện tại vẫn là duy nhất có
              chính sách đổi trả MIỄN PHÍ và lên tới 60 ngày với bất cứ lý do
              gì. Chúng tôi đã xây dựng được việc đổi hàng và lấy hàng trả về
              tận nhà khách hàng, thậm chí chúng tôi thường xuyên gửi sản phẩm
              mới cho khách hàng trước khi cần thu hồi sản phẩm cũ về. Và điều
              vui mừng đó là gần đây đã có nhiều hơn các đơn vị vận chuyển chào
              dịch vụ này và phổ biến hơn ở các bạn bán hàng Online.
            </p>
            <p>
              Việc đóng gói một hộp đồ với “Double Box” cũng được Coolmate đi
              tiên phong từ cách đây 2 năm, và trở thành phổ biến nhiều hơn ở
              các thương hiệu khác.
            </p>
            <p>
              Nếu bạn thử hỏi CSKH Coolmate một tiệm Pizza ngon quanh khu vực
              của bạn thì chắc các bạn ấy cũng sẽ cố gắng tìm và gửi cho bạn một
              địa chỉ phù hợp đó!
            </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
