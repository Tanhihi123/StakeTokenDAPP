import React, { useEffect } from "react";

const Menu = ({ toggle }) => {
  function copyToClipboard() {
    /* Chuỗi cần sao chép */
    var textToCopy = "ădawlkmdlkmlk132";

    /* Tạo một phần tử textarea tạm thời để có thể chọn và sao chép nó */
    var textarea = document.createElement("textarea");
    textarea.value = textToCopy;

    /* Thêm phần tử textarea vào DOM */
    document.body.appendChild(textarea);
    /* Chọn toàn bộ nội dung của textarea */
    textarea.select();
    /* Sử dụng API Clipboard để sao chép nội dung vào bảng nhớ */
    document.execCommand("copy");
    /* Xóa phần tử textarea tạm thời */
    document.body.removeChild(textarea);
    /* Thông báo hoặc xử lý sau khi sao chép thành công (tuỳ thuộc vào yêu cầu của bạn) */
    alert("Đã sao chép vào bảng nhớ: " + textToCopy);
  }
  return (
    <div
      className={`input1 flex animate-once animate-duration-300 animate-ease-in-out ${
        toggle == true ? "animate-jump-in   " : " animate-jump-out "
      }`}
    >
      <button className="value1 justify-center">Copy Address</button>
      <button className="value1 justify-center">Change Wallet</button>
      <button className="value1 justify-center">Disconnect</button>
    </div>
  );
};

export default Menu;
