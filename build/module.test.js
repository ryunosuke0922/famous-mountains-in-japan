import { get100FamousMountainsInJapan, getKansaiRegionMountains, getMountainsByElevation, } from "./module";
test("Check if the first mountain is Rishiri", () => {
    var _a;
    expect((_a = get100FamousMountainsInJapan().find((d) => d.no === 1)) === null || _a === void 0 ? void 0 : _a.name).toBe("利尻岳");
});
test("Check if the second mountain is Rausu", () => {
    var _a;
    expect((_a = get100FamousMountainsInJapan().find((d) => d.no === 2)) === null || _a === void 0 ? void 0 : _a.name).toBe("羅臼岳");
});
test("Check if the third mountain is Shari", () => {
    var _a;
    expect((_a = get100FamousMountainsInJapan().find((d) => d.no === 3)) === null || _a === void 0 ? void 0 : _a.name).toBe("斜里岳");
});
test("Check the length of the list of famous mountains", () => {
    const mountains = get100FamousMountainsInJapan();
    expect(mountains.length).toBe(100);
});
test("Check if all mountains have unique numbers", () => {
    const mountains = get100FamousMountainsInJapan();
    const uniqueMountainNumbers = new Set(mountains.map((mountain) => mountain.no));
    expect(uniqueMountainNumbers.size).toBe(100);
});
test("Check if the Kansai region mountains are correctly retrieved", () => {
    const kansaiRegionMountains = getKansaiRegionMountains();
    expect(kansaiRegionMountains.length).toBe(3);
    expect(kansaiRegionMountains[0].name).toBe("伊吹山");
    expect(kansaiRegionMountains[0].no).toBe(89);
    expect(kansaiRegionMountains[1].name).toBe("大台ヶ原山");
    expect(kansaiRegionMountains[1].no).toBe(90);
    expect(kansaiRegionMountains[2].name).toBe("大峰山");
    expect(kansaiRegionMountains[2].no).toBe(91);
});
describe("getMountainsByElevation", () => {
    test("returns an array that includes no.59 when the minimum elevation is 3000", () => {
        const filteredMountains = getMountainsByElevation(3000);
        const no59Mountain = filteredMountains.find((mountain) => mountain.no === 59);
        expect(no59Mountain).toBeTruthy();
    });
});
