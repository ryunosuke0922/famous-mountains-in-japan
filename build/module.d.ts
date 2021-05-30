export declare type MountainsData = {
    no: number;
    name: string;
    kanaName: string;
    elevation: number;
    mountainSystem: string;
    prefectures: string;
    remarks: string;
};
export declare const get100FamousMountainsInJapan: () => MountainsData[];
