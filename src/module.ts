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
    name: "大峰山(八経ヶ岳)",
    kanaName: "おおみねさん(はっきょうがたけ)",
    elevation: 1915,
    mountainSystem: "大峰山脈",
    prefectures: "奈良県",
    longitude: 34.1720258,
    latitude: 135.8900616,
    remarks: "",
  },
];

export const get100FamousMountainsInJapan = (): MountainsData[] => {
  return data_100FamousMountainsInJapan;
};

export const get100FamousMountainsInJapan_hokkaido = (): MountainsData[] => {
  return data_100FamousMountainsInJapan.filter(d => d.no === 1 || 2 || 3);
};

export const get100FamousMountainsInJapan_kansai = (): MountainsData[] => {
  return data_100FamousMountainsInJapan.filter(d => d.no === 4);
};
