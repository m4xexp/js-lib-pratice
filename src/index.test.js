import { sayHello, asyncSayHello, getA } from "./index";

it("should say hello", function () {
  expect(sayHello()).toBe("Hello");
});

it("should async say hello", async function () {
  await expect(asyncSayHello()).resolves.toEqual("Whatever");
});

it("should get A", function () {
  expect(
    getA({
      a: "test",
    })
  ).toBe("test");
});
