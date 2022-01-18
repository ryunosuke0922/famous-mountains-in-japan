import { get100FamousMountainsInJapan, get100FamousMountainsInJapan_kansai } from "./module";

test("IamExported returns greeting", () => {
  expect(get100FamousMountainsInJapan().find((d) => d.no === 1)?.name).toBe(
    "利尻岳"
  );
});

test("IamExported returns greeting", () => {
  expect(get100FamousMountainsInJapan_kansai().find((d) => d.no === 4)?.name).toBe(
    "大峰山(八経ヶ岳)"
  );
});
