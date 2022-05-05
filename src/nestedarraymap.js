import React, { useState } from "react";
const ArrData = [
  {
    title: "Home & Utilities",
    list: [
      {
        SubCategoryID: 1,
        SubCategoryName: "Mortgage & rent",
      },
      {
        SubCategoryID: 2,
        SubCategoryName: "Body corporate fees",
      },
    ],
  },
  {
    title: "Groceries",
    list: [
      {
        SubCategoryID: 26,
        SubCategoryName: "Supermarket",
      },
      {
        SubCategoryID: 27,
        SubCategoryName: "Butcher",
      },
    ],
  },
  {
    title: "Personal & Medical",
    list: [
      {
        SubCategoryID: 33,
        SubCategoryName: "Cosmetics & toiletries",
      },
      {
        SubCategoryID: 34,
        SubCategoryName: "Hair & beauty",
      },
    ],
  },
  {
    title: "Entertainment & Eat-out",
    list: [
      {
        SubCategoryID: 47,
        SubCategoryName: "Coffee & tea",
      },
      {
        SubCategoryID: 48,
        SubCategoryName: "Lunches - bought",
      },
    ],
  },
  {
    title: "Transport & Auto",
    list: [
      {
        SubCategoryID: 60,
        SubCategoryName: "Bus & train & ferry",
      },
      {
        SubCategoryID: 61,
        SubCategoryName: "Petrol",
      },
    ],
  },
];
export const NestedArray = () => {
  const [list, setList] = useState(ArrData);

  return (
    <>
      <h2>Nested array with map</h2>
      {list.map((item, index) => {
        return (
          <ul>
            <li key={index}>{item.title}</li>
            <ul>
              {item.list.map((option) => (
                <li key={index}>
                  {option.SubCategoryID}. {option.SubCategoryName}
                </li>
              ))}
            </ul>
          </ul>
        );
      })}
    </>
  );
};
