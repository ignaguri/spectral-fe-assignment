import { deepFlatten, findNestedObj, extractMeasurements } from "../utils";
import measurementsMock from "@/mocks/measurements.json";

describe("Vuex store utils", () => {
  describe("deepFlatten", () => {
    it("should flatten an array to 1 level", () => {
      const arr = [1, [2], [[3], [4]]];
      const result = deepFlatten(arr);

      expect(result).toHaveLength(4);
      expect(result).toEqual([1, 2, 3, 4]);
    });
  });

  describe("findNestedObj", () => {
    it("should find an object deep nested", () => {
      const obj = [
        {
          label: "first",
          id: 1,
          children: [],
        },
        {
          label: "second",
          id: 2,
          children: [
            {
              label: "third",
              id: 3,
              children: [
                {
                  label: "fourth",
                  id: 4,
                  children: [],
                },
              ],
            },
          ],
        },
      ];

      const result = findNestedObj(obj, "id", 4);

      const expectedResult = {
        label: "fourth",
        id: 4,
        children: [],
      };
      expect(result).toEqual(expectedResult);
    });
  });

  describe("extractMeasurements", () => {
    it("should return the measurements corresponding to the given asset", () => {
      const asset = {
        id: 1,
        name: "Asset 1",
        children: [
          { id: 2, name: "Asset 2", children: [] },
          {
            id: 3,
            name: "Asset 3",
            children: [{ id: 4, name: "Asset 4", children: [] }],
          },
        ],
      };
      const result = extractMeasurements(asset, measurementsMock);

      expect(result).toHaveLength(2);
    });
  });
});
