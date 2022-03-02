import _ from "lodash";

export const sayHello = () => "Hello";

export const asyncSayHello = async () => {
  return Promise.resolve("Whatever");
};

export const getA = (a) => {
  return _.get(a, "a");
};
