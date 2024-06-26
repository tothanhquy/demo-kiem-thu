

const provinceMap = new Map([
    ['001', 'Hà Nội'],
    ['002', 'Hà Giang'],
    ['004', 'Cao Bằng'],
    ['006', 'Bắc Kạn'],
    ['008', 'Tuyên Quang'],
    ['010', 'Lào Cai'],
    ['011', 'Điện Biên'],
    ['012', 'Lai Châu'],
    ['014', 'Sơn La'],
    ['015', 'Yên Bái'],
    ['017', 'Hòa Bình'],
    ['019', 'Thái Nguyên'],
    ['020', 'Lạng Sơn'],
    ['022', 'Quảng Ninh'],
    ['024', 'Bắc Giang'],
    ['025', 'Phú Thọ'],
    ['026', 'Vĩnh Phúc'],
    ['027', 'Bắc Ninh'],
    ['030', 'Hải Dương'],
    ['031', 'Hải Phòng'],
    ['033', 'Hưng Yên'],
    ['034', 'Thái Bình'],
    ['035', 'Hà Nam'],
    ['036', 'Nam Định'],
    ['037', 'Ninh Bình'],
    ['038', 'Thanh Hóa'],
    ['040', 'Nghệ An'],
    ['042', 'Hà Tĩnh'],
    ['044', 'Quảng Bình'],
    ['045', 'Quảng Trị'],
    ['046', 'Thừa Thiên Huế'],
    ['048', 'Đà Nẵng'],
    ['049', 'Quảng Nam'],
    ['051', 'Quảng Ngãi'],
    ['052', 'Bình Định'],
    ['054', 'Phú Yên'],
    ['056', 'Khánh Hòa'],
    ['058', 'Ninh Thuận'],
    ['060', 'Bình Thuận'],
    ['062', 'Kon Tum'],
    ['064', 'Gia Lai'],
    ['066', 'Đắk Lắk'],
    ['067', 'Đắk Nông'],
    ['068', 'Lâm Đồng'],
    ['070', 'Bình Phước'],
    ['072', 'Tây Ninh'],
    ['074', 'Bình Dương'],
    ['075', 'Đồng Nai'],
    ['077', 'Bà Rịa - Vũng Tàu'],
    ['079', 'Hồ Chí Minh'],
    ['080', 'Long An'],
    ['082', 'Tiền Giang'],
    ['083', 'Bến Tre'],
    ['084', 'Trà Vinh'],
    ['086', 'Vĩnh Long'],
    ['087', 'Đồng Tháp'],
    ['089', 'An Giang'],
    ['091', 'Kiên Giang'],
    ['092', 'Cần Thơ'],
    ['093', 'Hậu Giang'],
    ['094', 'Sóc Trăng'],
    ['095', 'Bạc Liêu'],
    ['096', 'Cà Mau']
]);

const countryMap = new Map([
    ['101', 'Afghanistan'],
    ['102', 'Ai Cập'],
    ['103', 'Albania'],
    ['104', 'Algérie (An-giê-ri)'],
    ['105', 'Andorra (An-đô-ra)'],
    ['106', 'Angola (Ăng-gô-la)'],
    ['107', 'Vương quốc Liên hiệp Anh và Bắc Ireland'],
    ['108', 'Antigua và Barbuda (An-ti-goa và Bác-bu-da)'],
    ['109', 'Áo'],
    ['110', 'Ả Rập Saudi (Ả Rập Xê-út)'],
    ['111', 'Argentina'],
    ['112', 'Armenia (Ác-mê-ni-a)'],
    ['113', 'Azerbaijan (A-giéc-bai-gian)'],
    ['114', 'Cộng hòa Azerbaijan'],
    ['115', 'Cộng hòa Ấn Độ'],
    ['116', 'Bahamas (Ba-ha-mát)'],
    ['117', 'Bahrain (Ba-ranh)'],
    ['118', 'Ba Lan'],
    ['119', 'Bangladesh (Băng-la-đét)'],
    ['120', 'Barbados (Bác-ba-đốt)'],
    ['121', 'Belarus (Bê-la-rút)'],
    ['122', 'Belize (Bê-li-xê)'],
    ['123', 'Benin (Bê-nanh)'],
    ['124', 'Bhutan (Bu-tan)'],
    ['125', 'Bỉ'],
    ['126', 'Bolivia (Bô-li-vi-a)'],
    ['127', 'Bosna và Hercegovina (Bốt-xni-a và Héc-dê-gô-vi-na)'],
    ['128', 'Botswana'],
    ['129', 'Bồ Đào Nha'],
    ['130', 'Bờ Biển Ngà (Cốt-đi-voa)'],
    ['131', 'Brasil (Bra-xin)'],
    ['132', 'Brunei (Bru-nây)'],
    ['133', 'Bulgaria (Bungari)'],
    ['134', 'Burkina Faso (Buốc-ki-na Pha-xô)'],
    ['135', 'Burundi'],
    ['136', 'Cabo Verde (Cáp Ve)'],
    ['137', 'Các Tiểu Vương quốc Ả Rập Thống nhất'],
    ['138', 'Cameroon (Ca-mơ-run)'],
    ['139', 'Campuchia'],
    ['140', 'Canada (Ca-na-đa; Gia Nã Đại)'],
    ['141', 'Chile (Chi-lê)'],
    ['142', 'Colombia (Cô-lôm-bi-a)'],
    ['143', 'Comoros (Cô-mo)'],
    ['144', 'Cộng hòa Congo (Công-gô; Congo-Brazzaville)'],
    ['145', 'Cộng hòa Dân chủ Congo (Congo-Kinshasa)'],
    ['146', 'Costa Rica (Cốt-xta Ri-ca)'],
    ['147', 'Croatia (Crô-a-ti-a)'],
    ['148', 'Cộng hòa Croatia'],
    ['149', 'Cuba (Cu-ba)'],
    ['150', 'Djibouti (Gi-bu-ti)'],
    ['151', 'Dominica (Đô-mi-ni-ca)'],
    ['152', 'Cộng hòa Dominicana (Đô-mi-ni-ca-na)'],
    ['153', 'Đan Mạch'],
    ['154', 'Đông Timor (Ti-mo Lex-te)'],
    ['155', 'Đức'],
    ['156', 'Ecuador (Ê-cu-a-đo)'],
    ['157', 'El Salvador (En Xan-va-đo)'],
    ['158', 'Eritrea (Ê-ri-tơ-ri-a)'],
    ['159', 'Estonia (E-xtô-ni-a)'],
    ['160', 'Ethiopia (Ê-t(h)i-ô-pi-a)'],
    ['161', 'Fiji (Phi-gi)'],
    ['162', 'Gabon (Ga-bông)'],
    ['163', 'Gambia (Găm-bi-a)'],
    ['164', 'Ghana (Ga-na)'],
    ['165', 'Grenada (Grê-na-đa)'],
    ['166', 'Gruzia (Gru-di-a)'],
    ['167', 'Guatemala (Goa-tê-ma-la)'],
    ['168', 'Guinea-Bissau (Ghi-nê Bít-xao)'],
    ['169', 'Guinea Xích Đạo (Ghi-nê Xích Đạo)'],
    ['170', 'Guinea (Ghi-nê)'],
    ['171', 'Guyana (Gai-a-na)'],
    ['172', 'Haiti (Ha-i-ti)'],
    ['173', 'Hà Lan (Hòa Lan)'],
    ['174', 'Hàn Quốc (Nam Hàn)'],
    ['175', 'Hoa Kỳ (Mỹ)'],
    ['176', 'Honduras (Hôn-đu-rát) (Ôn-đu-rát)'],
    ['177', 'Hungary (Hung-ga-ri)'],
    ['178', 'Hy Lạp'],
    ['179', 'Iceland (Ai xơ len)'],
    ['180', 'Indonesia (In-đô-nê-xi-a)'],
    ['181', 'Iran'],
    ['182', 'Iraq (I-rắc)'],
    ['183', 'Ireland (Ai-len)'],
    ['184', 'Israel (I-xra-en)'],
    ['185', 'Jamaica (Gia-mai-ca)'],
    ['186', 'Jordan (Gioóc-đan-ni)'],
    ['187', 'Kazakhstan (Ca-dắc-xtan)'],
    ['188', 'Kenya (Kê-nhi-a)'],
    ['189', 'Kiribati'],
    ['190', 'Kuwait (Cô-oét)'],
    ['191', 'Síp'],
    ['192', 'Kyrgyzstan (Cư-rơ-gư-xtan)'],
    ['193', 'Lào'],
    ['194', 'Latvia (Lat-vi-a)'],
    ['195', 'Lesotho (Lê-xô-thô)'],
    ['196', 'Li ban (Li-băng)'],
    ['197', 'Liberia (Li-bê-ri-a)'],
    ['198', 'Libya (Li-bi)'],
    ['199', 'Liechtenstein (Lích-ten-xtai)'],
    ['200', 'Litva (Lít-va)'],
    ['201', 'Luxembourg (Lúc-xem-bua)'],
    ['202', 'Macedonia (Mã Cơ Đốn) (Ma-xê-đô-ni-a)'],
    ['203', 'Madagascar'],
    ['204', 'Malawi (Ma-la-uy)'],
    ['205', 'Malaysia (Mã Lai Tây Á) (Ma-lay-xi-a)'],
    ['206', 'Maldives (Man-di-vơ)'],
    ['207', 'Mali'],
    ['208', 'Malta (Man-ta)'],
    ['209', 'Maroc'],
    ['210', 'Quần đảo Marshall'],
    ['211', 'Mauritanie (Mô-ri-ta-ni)'],
    ['212', 'Mauritius (Mô-ri-xơ)'],
    ['213', 'Mexico (Mê-hi-cô)'],
    ['214', 'Micronesia (Mi-crô-nê-di)'],
    ['215', 'Moldova (Môn-đô-va)'],
    ['216', 'Monaco (Mô-na-cô)'],
    ['217', 'Mông Cổ'],
    ['218', 'Montenegro (Môn-tê-nê-grô)'],
    ['219', 'Mozambique (Mô-dăm-bích)'],
    ['220', 'Myanma (Mi-an-ma)'],
    ['221', 'Namibia (Na-mi-bi-a)'],
    ['222', 'Nam Sudan'],
    ['223', 'Nam Phi'],
    ['224', 'Nauru (Nau-ru)'],
    ['225', 'Na Uy'],
    ['226', 'Nepal (Nê-pan)'],
    ['227', 'New Zealand (Niu Di-lân) (Tân Tây Lan)'],
    ['228', 'Nicaragua (Ni-ca-ra-goa)'],
    ['229', 'Niger (Ni-giê)'],
    ['230', 'Nigeria (Ni-giê-ri-a)'],
    ['231', 'Nga'],
    ['232', 'Nhật Bản'],
    ['233', 'Oman (Ô-man)'],
    ['234', 'Pakistan (Pa-kít-xtan)'],
    ['235', 'Palau (Pa-lau)'],
    ['236', 'Panama (Pa-na-ma)'],
    ['237', 'Papua New Guinea (Pa-pua Niu Ghi-nê)'],
    ['238', 'Paraguay (Pa-ra-goay)'],
    ['239', 'Peru (Pê-ru)'],
    ['240', 'Pháp (Pháp Lan Tây)'],
    ['241', 'Phần Lan'],
    ['242', 'Philippines (Phi-líp-pin)'],
    ['243', 'Qatar (Ca-ta)'],
    ['244', 'Romania (Ru-ma-ni, Lỗ Ma Ni)'],
    ['245', 'Rwanda (Ru-an-đa)'],
    ['246', 'Saint Kitts và Nevis (Xanh Kít và Nê-vít)'],
    ['247', 'Saint Lucia (San-ta Lu-xi-a)'],
    ['248', 'Saint Vincent và Grenadines (Xanh Vin-xen và Grê-na-din)'],
    ['249', 'Samoa (Xa-moa)'],
    ['250', 'San Marino (San Ma-ri-nô)'],
    ['251', 'São Tomé và Príncipe (Sao Tô-mê và Prin-xi-pê)'],
    ['252', 'Séc (Tiệp)'],
    ['253', 'Sénégal (Xê-nê-gan)'],
    ['254', 'Serbia (Xéc-bi-a)'],
    ['255', 'Seychelles (Xây-sen)'],
    ['256', 'Sierra Leone (Xi-ê-ra Lê-ôn)'],
    ['257', 'Singapore (Xinh-ga-po)'],
    ['258', 'Slovakia (Xlô-va-ki-a)'],
    ['259', 'Slovenia (Xlô-ven-ni-a)'],
    ['260', 'Solomon (Xô-lô-môn)'],
    ['261', 'Somalia (Xô-ma-li)'],
    ['262', 'Sri Lanka (Xri Lan-ca)'],
    ['263', 'Sudan (Xu-đăng)'],
    ['264', 'Suriname (Xu-ri-nam)'],
    ['265', 'Swaziland (Xoa-di-len)'],
    ['266', 'Syria (Xi-ri)'],
    ['267', 'Tajikistan (Tát-gi-kít-xtan)'],
    ['268', 'Tanzania (Tan-da-ni-a)'],
    ['269', 'Tây Ban Nha'],
    ['270', 'Tchad (Sát)'],
    ['271', 'Thái Lan'],
    ['272', 'Thổ Nhĩ Kỳ'],
    ['273', 'Thụy Điển'],
    ['274', 'Thụy Sĩ (Thụy Sỹ)'],
    ['275', 'Togo (Tô-gô)'],
    ['276', 'Tonga (Tông-ga)'],
    ['277', 'Triều Tiên'],
    ['278', 'Trinidad và Tobago (Tri-ni-đát và Tô-ba-gô)'],
    ['279', 'Trung Quốc'],
    ['280', 'Trung Phi'],
    ['281', 'Tunisia (Tuy-ni-di)'],
    ['282', 'Turkmenistan (Tuốc-mê-ni-xtan)'],
    ['283', 'Tuvalu'],
    ['284', 'Úc (Ốt-xrây-li-a)'],
    ['285', 'Uganda (U-gan-đa)'],
    ['286', 'Ukraina (U-crai-na)'],
    ['287', 'Uruguay (U-ru-goay)'],
    ['288', 'Uzbekistan (U-dơ-bê-kít-xtan)'],
    ['289', 'Vanuatu (Va-nu-a-tu)'],
    ['0', 'Việt Nam'],
    ['290', 'Thành Vatican (Va-ti-căng)/Tòa Thánh'],
    ['291', 'Venezuela (Vê-nê-xu(y)-ê-la)'],
    ['292', 'Ý (I-ta-li-a)'],
    ['293', 'Yemen (Y-ê-men)'],
    ['294', 'Zambia (Dăm-bi-a)'],
    ['295', 'Zimbabwe (Dim-ba-bu-ê)']
]);



const CitizenIdentificationCard = function(number){
    let countryCode = number.substring(0, 3);
    let country = countryMap.get(countryCode);
    if(country===undefined){
        country = provinceMap.get(countryCode);
        if(country===undefined){
            country = "Không xác định";
        }
    }

    let genderCode = number.substring(3,4);
    let dateOfBirthCode = number.substring(4,6);
    let dateOfBirth = "";
    let gender = "";
    switch (genderCode) {
        case "0":{
            gender = "Nam";
            dateOfBirth="19"+dateOfBirthCode;
            break;
        }
        case "1":{
            gender = "Nữ";
            dateOfBirth="19"+dateOfBirthCode;
            break;
        }
        case "2":{
            gender = "Nam";
            dateOfBirth="20"+dateOfBirthCode;
            break;
        }
        case "3":{
            gender = "Nữ";
            dateOfBirth="20"+dateOfBirthCode;
            break;
        }
        case "4":{
            gender = "Nam";
            dateOfBirth="21"+dateOfBirthCode;
            break;
        }
        case "5":{
            gender = "Nữ";
            dateOfBirth="21"+dateOfBirthCode;
            break;
        }
        case "6":{
            gender = "Nam";
            dateOfBirth="22"+dateOfBirthCode;
            break;
        }
        case "7":{
            gender = "Nữ";
            dateOfBirth="22"+dateOfBirthCode;
            break;
        }
        case "8":{
            gender = "Nam";
            dateOfBirth="23"+dateOfBirthCode;
            break;
        }
        case "9":{
            gender = "Nữ";
            dateOfBirth="23"+dateOfBirthCode;
            break;
        }
        default:{
            break;
        }
    }

    let res = {country: country, dateOfBirth: dateOfBirth, gender: gender}

    return res;
};

export default CitizenIdentificationCard;