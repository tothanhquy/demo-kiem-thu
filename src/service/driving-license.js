

const provinceMap = new Map([
    ['01', 'Hà Nội'],
    ['02', 'Hà Giang'],
    ['04', 'Cao Bằng'],
    ['06', 'Bắc Kạn'],
    ['08', 'Tuyên Quang'],
    ['10', 'Lào Cai'],
    ['11', 'Điện Biên'],
    ['12', 'Lai Châu'],
    ['14', 'Sơn La'],
    ['15', 'Yên Bái'],
    ['17', 'Hòa Bình'],
    ['19', 'Thái Nguyên'],
    ['20', 'Lạng Sơn'],
    ['22', 'Quảng Ninh'],
    ['24', 'Bắc Giang'],
    ['25', 'Phú Thọ'],
    ['26', 'Vĩnh Phúc'],
    ['27', 'Bắc Ninh'],
    ['30', 'Hải Dương'],
    ['31', 'Hải Phòng'],
    ['33', 'Hưng Yên'],
    ['34', 'Thái Bình'],
    ['35', 'Hà Nam'],
    ['36', 'Nam Định'],
    ['37', 'Ninh Bình'],
    ['38', 'Thanh Hóa'],
    ['40', 'Nghệ An'],
    ['42', 'Hà Tĩnh'],
    ['44', 'Quảng Bình'],
    ['45', 'Quảng Trị'],
    ['46', 'Thừa Thiên Huế'],
    ['48', 'Đà Nẵng'],
    ['49', 'Quảng Nam'],
    ['51', 'Quảng Ngãi'],
    ['52', 'Bình Định'],
    ['54', 'Phú Yên'],
    ['56', 'Khánh Hòa'],
    ['58', 'Ninh Thuận'],
    ['60', 'Bình Thuận'],
    ['62', 'Kon Tum'],
    ['64', 'Gia Lai'],
    ['66', 'Đắk Lắk'],
    ['67', 'Đắk Nông'],
    ['68', 'Lâm Đồng'],
    ['70', 'Bình Phước'],
    ['72', 'Tây Ninh'],
    ['74', 'Bình Dương'],
    ['75', 'Đồng Nai'],
    ['77', 'Bà Rịa - Vũng Tàu'],
    ['79', 'Hồ Chí Minh'],
    ['80', 'Long An'],
    ['82', 'Tiền Giang'],
    ['83', 'Bến Tre'],
    ['84', 'Trà Vinh'],
    ['86', 'Vĩnh Long'],
    ['87', 'Đồng Tháp'],
    ['89', 'An Giang'],
    ['91', 'Kiên Giang'],
    ['92', 'Cần Thơ'],
    ['93', 'Hậu Giang'],
    ['94', 'Sóc Trăng'],
    ['95', 'Bạc Liêu'],
    ['96', 'Cà Mau']
]);

const DrivingLicense = function(number){
    let provinceCode = number.substring(0, 2);
    let province = provinceMap.get(provinceCode);
    if(province===undefined){
        province = "Không xác định";
    }

    let genderCode = number.substring(2,3);
    let yearOfCertification = number.substring(3,5);
    let centuryOfBirth = "";
    let gender = "";
    switch (genderCode) {
        case "0":{
            gender = "Nam";
            centuryOfBirth="20";
            break;
        }
        case "1":{
            gender = "Nữ";
            centuryOfBirth="20";
            break;
        }
        case "2":{
            gender = "Nam";
            centuryOfBirth="21";
            break;
        }
        case "3":{
            gender = "Nữ";
            centuryOfBirth="21";
            break;
        }
        default:{
            gender = "Không xác định";
            centuryOfBirth="Không xác định";
            break;
        }
    }

    let res = {province: province, centuryOfBirth: centuryOfBirth, gender: gender,yearOfCertification:yearOfCertification}

    return res;
};

export default DrivingLicense;