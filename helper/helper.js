import {
  MdHome,
  MdDirectionsCar,
  MdDevices,
  MdKitchen,
  MdBuild,
  MdWatch,
  MdSportsEsports,
  MdGroup,
  MdPrecisionManufacturing,
  MdWork,
} from 'react-icons/md';

// all categories
export const categories = [
  { id: 1, name: 'املاک', icon: MdHome },
  { id: 2, name: 'وسایل نقلیه', icon: MdDirectionsCar },
  { id: 3, name: 'کالای دیجیتال', icon: MdDevices },
  { id: 4, name: 'خانه و آشپزخانه', icon: MdKitchen },
  { id: 5, name: 'خدمات', icon: MdBuild },
  { id: 6, name: 'وسایل شخصی', icon: MdWatch },
  { id: 7, name: 'سرگرمی و فراغت', icon: MdSportsEsports },
  { id: 8, name: 'اجتماعی', icon: MdGroup },
  { id: 9, name: 'تجهیزات و صنعتی', icon: MdPrecisionManufacturing },
  { id: 10, name: 'استخدام و کاریابی', icon: MdWork },
];

// all provinces
export const iranProvinces = [
  { id: 1, name: 'آذربایجان شرقی' },
  { id: 2, name: 'آذربایجان غربی' },
  { id: 3, name: 'اردبیل' },
  { id: 4, name: 'اصفهان' },
  { id: 5, name: 'البرز' },
  { id: 6, name: 'ایلام' },
  { id: 7, name: 'بوشهر' },
  { id: 8, name: 'تهران' },
  { id: 9, name: 'چهارمحال و بختیاری' },
  { id: 10, name: 'خراسان جنوبی' },
  { id: 11, name: 'خراسان رضوی' },
  { id: 12, name: 'خراسان شمالی' },
  { id: 13, name: 'خوزستان' },
  { id: 14, name: 'زنجان' },
  { id: 15, name: 'سمنان' },
  { id: 16, name: 'سیستان و بلوچستان' },
  { id: 17, name: 'فارس' },
  { id: 18, name: 'قزوین' },
  { id: 19, name: 'قم' },
  { id: 20, name: 'کردستان' },
  { id: 21, name: 'کرمان' },
  { id: 22, name: 'کرمانشاه' },
  { id: 23, name: 'کهگیلویه و بویراحمد' },
  { id: 24, name: 'گلستان' },
  { id: 25, name: 'گیلان' },
  { id: 26, name: 'لرستان' },
  { id: 27, name: 'مازندران' },
  { id: 28, name: 'مرکزی' },
  { id: 29, name: 'هرمزگان' },
  { id: 30, name: 'همدان' },
  { id: 31, name: 'یزد' },
];

// calculating past time to present
export function timeSince(date) {
  const now = new Date();
  const timestamp = new Date(date).getTime();

  const diffInSeconds = Math.floor((now - timestamp) / 1000);

  const isOverOneYear = diffInSeconds > 31622400;
  const isOverOneMonth = diffInSeconds > 2629746;
  const isOverOneWeek = diffInSeconds > 604800;
  const isOverOneDay = diffInSeconds > 86400;
  const isOverOneHour = diffInSeconds > 3600;

  let result = 'دقایقی پیش';

  if (isOverOneYear) {
    result = 'بیش از یک سال پیش';
  } else if (isOverOneMonth) {
    result = 'بیش از یک ماه پیش';
  } else if (isOverOneWeek) {
    result = 'بیش از یک هفته پیش';
  } else if (isOverOneDay) {
    result = 'بیش از یک روز پیش';
  } else if (isOverOneHour) {
    result = 'بیش از یک ساعت پیش';
  }

  return result;
}
