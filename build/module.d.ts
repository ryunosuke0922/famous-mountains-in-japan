export declare type MountainsData = {
    no: number;
    name: string;
    kanaName: string;
    elevation: number;
    mountainSystem: string;
    prefectures: string;
    nameEn: string;
    prefecturesEn: string;
    longitude: number;
    latitude: number;
    remarks: string;
};
export declare const get100FamousMountainsInJapan: () => MountainsData[];
export declare const getChubuRegionMountains: () => MountainsData[];
export declare const getChugokuRegionMountains: () => MountainsData[];
export declare const getHokkaidoRegionMountains: () => MountainsData[];
export declare const getKansaiRegionMountains: () => MountainsData[];
export declare const getKantoRegionMountains: () => MountainsData[];
export declare const getKyushuokinawaRegionMountains: () => MountainsData[];
export declare const getShikokuRegionMountains: () => MountainsData[];
export declare const getTohokuRegionMountains: () => MountainsData[];
export declare const getMountainsByElevation: (minElevation: number) => MountainsData[];
