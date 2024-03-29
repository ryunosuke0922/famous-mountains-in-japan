import fs from "fs";
import path from "path";
const load100FamousMountainsInJapan = () => {
    const filePath = path.join(__dirname, "./100-famous-mountains-in-japan.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(jsonData);
};
export const get100FamousMountainsInJapan = () => {
    return load100FamousMountainsInJapan();
};
export const getChubuRegionMountains = () => {
    const allMountains = load100FamousMountainsInJapan();
    const kansaiRegionIds = [
        17, 19, 25, 26, 27, 30, 31, 32, 33, 34, 35, 42, 43, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 66, 67, 68, 69, 70,
        72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 1,
    ];
    return allMountains.filter((mountain) => kansaiRegionIds.includes(mountain.no));
};
export const getChugokuRegionMountains = () => {
    const allMountains = load100FamousMountainsInJapan();
    const kansaiRegionIds = [92];
    return allMountains.filter((mountain) => kansaiRegionIds.includes(mountain.no));
};
export const getHokkaidoRegionMountains = () => {
    const allMountains = load100FamousMountainsInJapan();
    const kansaiRegionIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return allMountains.filter((mountain) => kansaiRegionIds.includes(mountain.no));
};
export const getKansaiRegionMountains = () => {
    const allMountains = load100FamousMountainsInJapan();
    const kansaiRegionIds = [89, 90, 91];
    return allMountains.filter((mountain) => kansaiRegionIds.includes(mountain.no));
};
export const getKantoRegionMountains = () => {
    const allMountains = load100FamousMountainsInJapan();
    const kansaiRegionIds = [
        26, 29, 30, 36, 37, 38, 39, 40, 41, 42, 43, 44, 64, 65, 66, 67, 68, 69, 70,
        71, 72, 77, 78, 79, 80, 81,
    ];
    return allMountains.filter((mountain) => kansaiRegionIds.includes(mountain.no));
};
export const getKyushuokinawaRegionMountains = () => {
    const allMountains = load100FamousMountainsInJapan();
    const kansaiRegionIds = [95, 96, 97, 98, 99, 100];
    return allMountains.filter((mountain) => kansaiRegionIds.includes(mountain.no));
};
export const getShikokuRegionMountains = () => {
    const allMountains = load100FamousMountainsInJapan();
    const kansaiRegionIds = [93, 94];
    return allMountains.filter((mountain) => kansaiRegionIds.includes(mountain.no));
};
export const getTohokuRegionMountains = () => {
    const allMountains = load100FamousMountainsInJapan();
    const kansaiRegionIds = [
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 28,
    ];
    return allMountains.filter((mountain) => kansaiRegionIds.includes(mountain.no));
};
export const getMountainsByElevation = (minElevation) => {
    return load100FamousMountainsInJapan().filter((mountain) => mountain.elevation >= minElevation);
};
