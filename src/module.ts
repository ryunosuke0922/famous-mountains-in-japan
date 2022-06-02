export type MountainsData = {
  no: number;
  name: string;
  kanaName: string;
  elevation: number;
  mountainSystem: string;
  prefectures: string;
  longitude: number;
  latitude: number;
  remarks: string;
};

const data_100FamousMountainsInJapan: MountainsData[] = [
  {
    no: 1,
    name: "利尻岳",
    kanaName: "りしりだけ",
    elevation: 1721,
    mountainSystem: "利尻島",
    prefectures: "北海道",
    longitude: 45.1782689,
    latitude: 141.0884924,
    remarks: "",
  },
  {
    no: 2,
    name: "羅臼岳",
    kanaName: "らうすだけ",
    elevation: 1660,
    mountainSystem: "知床半島",
    prefectures: "北海道",
    longitude: 44.0757667,
    latitude: 145.1046053,
    remarks: "",
  },
  {
    no: 3,
    name: "斜里岳",
    kanaName: "しゃりだけ",
    elevation: 1547,
    mountainSystem: "知床半島",
    prefectures: "北海道",
    longitude: 43.7659236,
    latitude: 144.6999134,
    remarks: "",
  },
  {
    no: 4,
    name: "阿寒岳",
    kanaName: "あかんだけ",
    elevation: 1499,
    mountainSystem: "独立峰",
    prefectures: "北海道",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 5,
    name: "大雪山",
    kanaName: "たいせつざん",
    elevation: 2291,
    mountainSystem: "大雪山系",
    prefectures: "北海道",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 6,
    name: "トムラウシ",
    kanaName: "とむらうし",
    elevation: 2141,
    mountainSystem: "大雪山系",
    prefectures: "北海道",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 7,
    name: "十勝岳",
    kanaName: "とかちだけ",
    elevation: 2077,
    mountainSystem: "大雪山系",
    prefectures: "北海道",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 8,
    name: "幌尻岳",
    kanaName: "ぽろしりだけ",
    elevation: 2052,
    mountainSystem: "日高山脈",
    prefectures: "北海道",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 9,
    name: "後方羊蹄山",
    kanaName: "しりべしやま",
    elevation: 1898,
    mountainSystem: "独立峰",
    prefectures: "北海道",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 10,
    name: "岩木山",
    kanaName: "いわきさん",
    elevation: 1625,
    mountainSystem: "独立峰",
    prefectures: "青森県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 11,
    name: "八甲田山",
    kanaName: "はっこうださん",
    elevation: 1584,
    mountainSystem: "奥羽山脈",
    prefectures: "青森県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 12,
    name: "八幡平",
    kanaName: "はちまんたい",
    elevation: 1614,
    mountainSystem: "奥羽山脈",
    prefectures: "岩手県・秋田県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 13,
    name: "岩手山",
    kanaName: "いわてさん",
    elevation: 2038,
    mountainSystem: "奥羽山脈",
    prefectures: "岩手県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 14,
    name: "早池峰",
    kanaName: "はやちね",
    elevation: 1917,
    mountainSystem: "北上山地",
    prefectures: "岩手県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 15,
    name: "鳥海山",
    kanaName: "ちょうかいさん",
    elevation: 2236,
    mountainSystem: "出羽山地",
    prefectures: "秋田県・山形県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 16,
    name: "月山",
    kanaName: "がっさん",
    elevation: 1984,
    mountainSystem: "出羽山地",
    prefectures: "山形県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 17,
    name: "朝日岳",
    kanaName: "あさひだけ",
    elevation: 1870,
    mountainSystem: "朝日山地",
    prefectures: "山形県・新潟県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 18,
    name: "蔵王山",
    kanaName: "ざおうさん",
    elevation: 1841,
    mountainSystem: "奥羽山脈",
    prefectures: "宮城県・山形県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 19,
    name: "飯豊山",
    kanaName: "いいでさん",
    elevation: 2128,
    mountainSystem: "	飯豊山地",
    prefectures: "山形県・福島県・新潟県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 20,
    name: "吾妻山",
    kanaName: "あづまさん",
    elevation: 2035,
    mountainSystem: "	奥羽山脈	",
    prefectures: "山形県・福島県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 21,
    name: "安達太良山",
    kanaName: "あだたらやま",
    elevation: 1709,
    mountainSystem: "	奥羽山脈	",
    prefectures: "福島県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 22,
    name: "磐梯山",
    kanaName: "ばんだいさん",
    elevation: 1816,
    mountainSystem: "	奥羽山脈	",
    prefectures: "福島県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 23,
    name: "会津駒ヶ岳",
    kanaName: "あいづこまがだけ",
    elevation: 2133,
    mountainSystem: "	越後山脈	",
    prefectures: "福島県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 24,
    name: "那須岳",
    kanaName: "なすだけ",
    elevation: 1917,
    mountainSystem: "	那須連山	",
    prefectures: "福島県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 25,
    name: "魚沼駒ヶ岳",
    kanaName: "うおぬまこまがたけ",
    elevation: 2003,
    mountainSystem: "	越後山脈	",
    prefectures: "新潟県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 26,
    name: "平ヶ岳",
    kanaName: "ひらがたけ",
    elevation: 2141,
    mountainSystem: "	三国山脈	",
    prefectures: "新潟県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 26,
    name: "平ヶ岳",
    kanaName: "ひらがたけ",
    elevation: 2141,
    mountainSystem: "	三国山脈	",
    prefectures: "新潟県・群馬県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 27,
    name: "巻機山",
    kanaName: "まきはたやま",
    elevation: 1967,
    mountainSystem: "	三国山脈	",
    prefectures: "新潟県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 28,
    name: "燧岳",
    kanaName: "ひうちだけ",
    elevation: 2356,
    mountainSystem: "	越後山脈	",
    prefectures: "福島県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 29,
    name: "至仏山",
    kanaName: "しぶつさん",
    elevation: 2228,
    mountainSystem: "	越後山脈	",
    prefectures: "群馬県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 30,
    name: "谷川岳",
    kanaName: "たにがわだけ",
    elevation: 1977,
    mountainSystem: "	三国山脈	",
    prefectures: "新潟県・群馬県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 31,
    name: "雨飾山",
    kanaName: "あまかざりやま",
    elevation: 1963,
    mountainSystem: "	頸城山塊	",
    prefectures: "新潟県・長野県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 32,
    name: "苗場山",
    kanaName: "なえばさん",
    elevation: 2145,
    mountainSystem: "	三国山脈	",
    prefectures: "新潟県・長野県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 33,
    name: "妙高山",
    kanaName: "みょうこうさん",
    elevation: 2454,
    mountainSystem: "	頸城山塊	",
    prefectures: "新潟県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 34,
    name: "火打山",
    kanaName: "ひうちやま",
    elevation: 2462,
    mountainSystem: "	頸城山塊	",
    prefectures: "新潟県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 35,
    name: "高妻山",
    kanaName: "たかつまやま",
    elevation: 2353,
    mountainSystem: "	戸隠連峰	",
    prefectures: "新潟県・長野県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 36,
    name: "男体山",
    kanaName: "なんたいさん",
    elevation: 2486,
    mountainSystem: "	日光連山	",
    prefectures: "栃木県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 37,
    name: "奥白根山",
    kanaName: "おくしらねさん",
    elevation: 2578,
    mountainSystem: "	日光連山	",
    prefectures: "栃木県・群馬県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 38,
    name: "皇海山",
    kanaName: "すかいさん",
    elevation: 2144,
    mountainSystem: "	足尾山地	",
    prefectures: "栃木県・群馬県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 39,
    name: "武尊山",
    kanaName: "ほたかやま",
    elevation: 2158,
    mountainSystem: "	越後山脈	",
    prefectures: "群馬県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 40,
    name: "赤城山",
    kanaName: "あかぎやま",
    elevation: 1828,
    mountainSystem: "	独立峰	",
    prefectures: "群馬県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 41,
    name: "草津白根山",
    kanaName: "くさつしらねさん",
    elevation: 2171,
    mountainSystem: "	独立峰	",
    prefectures: "群馬県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 42,
    name: "四阿山",
    kanaName: "あずまやさん",
    elevation: 2354,
    mountainSystem: "	菅平高原	",
    prefectures: "群馬県・長野県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 43,
    name: "浅間山",
    kanaName: "あさまやま",
    elevation: 2568,
    mountainSystem: "	浅間山系	",
    prefectures: "群馬県・長野県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 44,
    name: "筑波山",
    kanaName: "つくばさん",
    elevation: 877,
    mountainSystem: "	八溝山地	",
    prefectures: "茨城県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 45,
    name: "白馬岳",
    kanaName: "しろうまだけ",
    elevation: 2932,
    mountainSystem: "	後立山連峰	",
    prefectures: "長野県・富山県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 46,
    name: "五竜岳",
    kanaName: "ごりゅうだけ",
    elevation: 2814,
    mountainSystem: "	後立山連峰	",
    prefectures: "長野県・富山県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 47,
    name: "鹿島槍岳",
    kanaName: "かしまやりだけ",
    elevation: 2889,
    mountainSystem: "	後立山連峰	",
    prefectures: "長野県・富山県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 48,
    name: "剱岳",
    kanaName: "つるぎだけ",
    elevation: 2999,
    mountainSystem: "	立山連峰	",
    prefectures: "富山県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 49,
    name: "立山",
    kanaName: "たてやま",
    elevation: 3015,
    mountainSystem: "	立山連峰	",
    prefectures: "富山県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 50,
    name: "薬師岳",
    kanaName: "やくしだけ",
    elevation: 2926,
    mountainSystem: "	飛騨山脈	",
    prefectures: "富山県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 51,
    name: "黒部五郎岳",
    kanaName: "くろべごろうだけ",
    elevation: 2840,
    mountainSystem: "	飛騨山脈	",
    prefectures: "富山県・岐阜県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 52,
    name: "黒岳",
    kanaName: "くろだけ",
    elevation: 2986,
    mountainSystem: "	飛騨山脈	",
    prefectures: "富山県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 53,
    name: "鷲羽岳",
    kanaName: "わしばだけ",
    elevation: 2924,
    mountainSystem: "	飛騨山脈	",
    prefectures: "長野県・富山県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 54,
    name: "槍ヶ岳",
    kanaName: "やりがたけ",
    elevation: 3180,
    mountainSystem: "	飛騨山脈	",
    prefectures: "長野県・岐阜県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 55,
    name: "穂高岳",
    kanaName: "ほたかだけ",
    elevation: 3190,
    mountainSystem: "	飛騨山脈	",
    prefectures: "長野県・岐阜県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 56,
    name: "常念岳",
    kanaName: "じょうねんだけ",
    elevation: 2857,
    mountainSystem: "	常念山脈	",
    prefectures: "長野県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 57,
    name: "笠ヶ岳",
    kanaName: "かさがだけ",
    elevation: 2897,
    mountainSystem: "	飛騨山脈	",
    prefectures: "岐阜県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 58,
    name: "焼岳",
    kanaName: "やけだけ",
    elevation: 2455,
    mountainSystem: "	飛騨山脈	",
    prefectures: "長野県・岐阜県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 59,
    name: "乗鞍岳",
    kanaName: "のりくらだけ",
    elevation: 3026,
    mountainSystem: "	飛騨山脈	",
    prefectures: "長野県・岐阜県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 60,
    name: "御嶽山",
    kanaName: "おんたけさん",
    elevation: 3067,
    mountainSystem: "	独立峰	",
    prefectures: "長野県・岐阜県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 61,
    name: "美ヶ原",
    kanaName: "うつくしがはら",
    elevation: 2034,
    mountainSystem: "	中信高原	",
    prefectures: "長野県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 61,
    name: "美ヶ原",
    kanaName: "うつくしがはら",
    elevation: 2034,
    mountainSystem: "	中信高原	",
    prefectures: "長野県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 62,
    name: "霧ヶ峰",
    kanaName: "きりがみね",
    elevation: 1925,
    mountainSystem: "	中信高原	",
    prefectures: "長野県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 63,
    name: "蓼科山",
    kanaName: "たてしなやま",
    elevation: 2530,
    mountainSystem: "	八ヶ岳連峰	",
    prefectures: "長野県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 64,
    name: "八ヶ岳",
    kanaName: "やつがたけ",
    elevation: 2899,
    mountainSystem: "	八ヶ岳連峰	",
    prefectures: "長野県・山梨県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 65,
    name: "両神山",
    kanaName: "りょうかみさん",
    elevation: 1723,
    mountainSystem: "	奥秩父山塊	",
    prefectures: "埼玉県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 66,
    name: "雲取山",
    kanaName: "くもとりやま",
    elevation: 2017,
    mountainSystem: "	奥秩父山塊	",
    prefectures: "埼玉県・東京都・山梨県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 67,
    name: "甲武信岳",
    kanaName: "こぶしだけ",
    elevation: 2475,
    mountainSystem: "	奥秩父山塊	",
    prefectures: "埼玉県・長野県・山梨県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 68,
    name: "金峰山",
    kanaName: "きんぷさん",
    elevation: 2599,
    mountainSystem: "	奥秩父山塊	",
    prefectures: "長野県・山梨県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 69,
    name: "瑞牆山",
    kanaName: "みずがきやま",
    elevation: 2230,
    mountainSystem: "	奥秩父山塊	",
    prefectures: "山梨県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 70,
    name: "大菩薩岳",
    kanaName: "だいぼさつだけ",
    elevation: 2057,
    mountainSystem: "	奥秩父山塊	",
    prefectures: "山梨県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 71,
    name: "丹沢山",
    kanaName: "たんざわさん",
    elevation: 1673,
    mountainSystem: "	丹沢山地	",
    prefectures: "神奈川県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 72,
    name: "富士山",
    kanaName: "ふじさん",
    elevation: 3776,
    mountainSystem: "	独立峰	",
    prefectures: "山梨県・静岡県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 73,
    name: "天城山",
    kanaName: "あまぎさん",
    elevation: 1405,
    mountainSystem: "	伊豆半島	",
    prefectures: "静岡県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 74,
    name: "木曽駒ヶ岳",
    kanaName: "きそこまがたけ",
    elevation: 2956,
    mountainSystem: "	木曽山脈	",
    prefectures: "長野県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 75,
    name: "空木岳",
    kanaName: "うつぎだけ",
    elevation: 2864,
    mountainSystem: "	木曽山脈	",
    prefectures: "長野県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 76,
    name: "恵那山",
    kanaName: "えなさん",
    elevation: 2191,
    mountainSystem: "	木曽山脈	",
    prefectures: "長野県・岐阜県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 77,
    name: "甲斐駒ヶ岳",
    kanaName: "かいこまがたけ",
    elevation: 2967,
    mountainSystem: "	赤石山脈	",
    prefectures: "山梨県・長野県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 78,
    name: "仙丈岳",
    kanaName: "せんじょうだけ",
    elevation: 3033,
    mountainSystem: "	赤石山脈	",
    prefectures: "山梨県・長野県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 79,
    name: "鳳凰山",
    kanaName: "ほうおうざん",
    elevation: 2840,
    mountainSystem: "	赤石山脈	",
    prefectures: "山梨県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 80,
    name: "北岳",
    kanaName: "きただけ",
    elevation: 3193,
    mountainSystem: "	赤石山脈	",
    prefectures: "山梨県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 81,
    name: "間ノ岳",
    kanaName: "あいのだけ",
    elevation: 3190,
    mountainSystem: "	赤石山脈	",
    prefectures: "山梨県・静岡県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 82,
    name: "塩見岳",
    kanaName: "しおみだけ",
    elevation: 3052,
    mountainSystem: "	赤石山脈	",
    prefectures: "長野県・静岡県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 83,
    name: "悪沢岳",
    kanaName: "わるさわだけ",
    elevation: 3141,
    mountainSystem: "	赤石山脈	",
    prefectures: "長野県・静岡県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 84,
    name: "赤石岳",
    kanaName: "あかいしだけ",
    elevation: 3120,
    mountainSystem: "	赤石山脈	",
    prefectures: "長野県・静岡県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 85,
    name: "聖岳",
    kanaName: "ひじりだけ",
    elevation: 3013,
    mountainSystem: "	赤石山脈	",
    prefectures: "長野県・静岡県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 86,
    name: "光岳",
    kanaName: "てかりだけ",
    elevation: 2591,
    mountainSystem: "	赤石山脈	",
    prefectures: "長野県・静岡県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 87,
    name: "白山",
    kanaName: "はくさん",
    elevation: 2702,
    mountainSystem: "	両白山地	",
    prefectures: "岐阜県・石川県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 88,
    name: "荒島岳",
    kanaName: "あらしまだけ",
    elevation: 1523,
    mountainSystem: "	越美山地	",
    prefectures: "福井県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 89,
    name: "伊吹山",
    kanaName: "いぶきやま",
    elevation: 1377,
    mountainSystem: "	伊吹山地	",
    prefectures: "岐阜県・滋賀県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 90,
    name: "大台ヶ原山",
    kanaName: "おおだいがはらやま",
    elevation: 1695,
    mountainSystem: "	台高山脈	",
    prefectures: "三重県・奈良県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 91,
    name: "大峰山",
    kanaName: "おおみねさん",
    elevation: 1915,
    mountainSystem: "	紀伊山地	",
    prefectures: "奈良県",
    longitude: 34.1720258,
    latitude: 135.8900616,
    remarks: "",
  },
  {
    no: 92,
    name: "大山",
    kanaName: "だいせん",
    elevation: 1729,
    mountainSystem: "	中国山地	",
    prefectures: "鳥取県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 93,
    name: "剣山",
    kanaName: "つるぎさん",
    elevation: 1955,
    mountainSystem: "	四国山地	",
    prefectures: "徳島県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 94,
    name: "石鎚山",
    kanaName: "いしづちさん",
    elevation: 1982,
    mountainSystem: "	四国山地	",
    prefectures: "愛媛県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 95,
    name: "九重山",
    kanaName: "くじゅうさん",
    elevation: 1791,
    mountainSystem: "	九重火山群	",
    prefectures: "大分県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 96,
    name: "祖母山",
    kanaName: "そぼさん",
    elevation: 1756,
    mountainSystem: "	九州山地	",
    prefectures: "大分県・宮崎県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 97,
    name: "阿蘇山",
    kanaName: "あそさん",
    elevation: 1592,
    mountainSystem: "	阿蘇カルデラ	",
    prefectures: "熊本県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 98,
    name: "霧島山",
    kanaName: "きりしまやま",
    elevation: 1700,
    mountainSystem: "	えびの高原	",
    prefectures: "宮崎県・鹿児島県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 99,
    name: "開聞岳",
    kanaName: "かいもんだけ",
    elevation: 924,
    mountainSystem: "	南薩火山群	",
    prefectures: "鹿児島県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
  {
    no: 100,
    name: "宮ノ浦岳",
    kanaName: "みやのうらだけ",
    elevation: 1936,
    mountainSystem: "	屋久島	",
    prefectures: "鹿児島県",
    longitude: 0,
    latitude: 0,
    remarks: "",
  },
];

export const get100FamousMountainsInJapan = (): MountainsData[] => {
  return data_100FamousMountainsInJapan;
};
