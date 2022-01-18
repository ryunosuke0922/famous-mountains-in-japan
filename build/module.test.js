import { get100FamousMountainsInJapan, get100FamousMountainsInJapan_kansai } from "./module";
test("IamExported returns greeting", () => {
    var _a;
    expect((_a = get100FamousMountainsInJapan().find((d) => d.no === 1)) === null || _a === void 0 ? void 0 : _a.name).toBe("利尻岳");
});
test("IamExported returns greeting", () => {
    var _a;
    expect((_a = get100FamousMountainsInJapan_kansai().find((d) => d.no === 4)) === null || _a === void 0 ? void 0 : _a.name).toBe("大峰山(八経ヶ岳)");
});
