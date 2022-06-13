import {
  get100FamousMountainsInJapan, 
} from "./module";

test("IamExported returns greeting", () => {
  expect(get100FamousMountainsInJapan().find((d) => d.no === 1)?.name).toBe(
    "利尻岳"
  );
});
