
// - Biển số nền màu xanh, chữ và số màu trắng, seri biển số sử dụng lần lượt một trong 11 chữ cái sau đây: A, B, C, D, E, F, G, H, K, L, M cấp cho xe của các cơ quan của Đảng; Văn phòng Chủ tịch nước; Văn phòng Quốc hội và các cơ quan của Quốc hội; Văn phòng Đoàn đại biểu Quốc hội, Hội đồng nhân dân các cấp; các Ban chỉ đạo Trung ương; Công an nhân dân, Tòa án nhân dân, Viện kiểm sát nhân dân; các bộ, cơ quan ngang bộ, cơ quan thuộc Chính phủ; Ủy ban An toàn giao thông quốc gia; Ủy ban nhân dân các cấp và các cơ quan chuyên môn thuộc Ủy ban nhân dân cấp tỉnh, cấp huyện; tổ chức chính trị - xã hội (Mặt trận Tổ quốc Việt Nam, Công đoàn Việt Nam, Đoàn thanh niên Cộng sản Hồ Chí Minh, Hội liên hiệp phụ nữ Việt Nam, Hội cựu chiến binh Việt Nam, Hội nông dân Việt Nam); đơn vị sự nghiệp công lập, trừ Trung tâm đào tạo sát hạch lái xe công lập; Ban quản lý dự án có chức năng quản lý nhà nước.

// - Biển số nền màu xanh, chữ và số màu trắng có ký hiệu "CD" cấp cho xe máy chuyên dùng của lực lượng công an nhân dân sử dụng vào mục đích an ninh.

// - Biển số nền màu trắng, chữ và số màu đen, seri biển số sử dụng lần lượt một trong 20 chữ cái sau đây: A, B, C, D, E, F, G, H, K, L, M, N, P, S, T, U, V, X, Y, Z cấp cho xe của doanh nghiệp (kể cả doanh nghiệp cổ phần của công an, quân đội), Ban quản lý dự án thuộc doanh nghiệp, các tổ chức xã hội, xã hội - nghề nghiệp, xe của đơn vị sự nghiệp ngoài công lập, xe của Trung tâm đào tạo sát hạch lái xe công lập, xe của cá nhân.

// - Biển số nền màu vàng, chữ và số màu đỏ, có ký hiệu địa phương đăng ký và hai chữ cái viết tắt của khu kinh tế - thương mại đặc biệt, khu kinh tế cửa khẩu quốc tế, cấp cho xe của khu kinh tế - thương mại đặc biệt hoặc khu kinh tế cửa khẩu quốc tế theo quy định của Chính phủ.

// - Biển số nền màu vàng, chữ và số màu đen sêri biển số sử dụng lần lượt một trong 20 chữ cái sau đây: A, B, C, D, E, F, G, H, K, L, M, N, P, S, T, U, V, X, Y, Z cấp cho xe hoạt động kinh doanh vận tải.


const LicensePlatesColorValid = function(bgColor,textColor){
    if(bgColor==="blue"){
        if(textColor==="white"){
            return true;
        }else{
            return false;
        }
    }else if(bgColor==="white"){
        if(textColor==="black"){
            return true;
        }else{
            return false;
        }
    }else if(bgColor==="yellow"){
        if(textColor==="red"||textColor==="black"){
            return true;
        }else{
            return false;
        }
    }
    return false;
}


// export default LicensePlatesColorValid;
module.exports = LicensePlatesColorValid;