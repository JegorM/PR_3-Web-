function getRow(firstRow, secondRow) {
  if (firstRow == "" || secondRow == "") {
    return null;
  }
  let firstRowCount = 0;
  let secondRowCount = 0;
  let str1 = firstRow.toLowerCase();
  let str2 = secondRow.toLowerCase();
  let diveiters = ["a", "а"];
  diveiters.forEach((element) => {
    for (let i = 0; i < firstRow.length; i++) {
      if (str1[i] == element) firstRowCount++;
    }
    for (let i = 0; i < secondRow.length; i++) {
      if (str2[i] == element) secondRowCount++;
    }
  });
  return firstRowCount >= secondRowCount ? firstRow : secondRow;
}
const firstRow = "мама мыла раму";
const secondRow = "собака друг человека";

describe("getRow", () => {
  it.each`
    firstValue          | secondValue               | result
    ${"мама мыла раму"} | ${"собака друг человека"} | ${"мама мыла раму"}
    ${"ааа"}            | ${"АААА"}                 | ${"АААА"}
    ${"АаАбвгд"}        | ${"абвгд"}                | ${"АаАбвгд"}
    ${""}               | ${"абвгд"}                | ${null}
    ${"абвгд"}          | ${""}                     | ${null}
    ${""}               | ${""}                     | ${null}
    ${"alphatestsfa"}   | ${"aalphaa"}              | ${"aalphaa"}
    ${"aalphaa"}        | ${"alphatestsfa"}         | ${"aalphaa"}
    ${"abaa"}           | ${"acaa"}                 | ${"abaa"}
    ${"aAlpha"}         | ${"alpha"}                | ${"aAlpha"}
  `(
    "getRow with firstValue = $firstValue and secondValue = $secondValue should return $result ",
    ({ firstValue, secondValue, result }) => {
      expect(getRow(firstValue, secondValue)).toBe(result);
    }
  );
});

function formattedPhone(phone) {
  try {
    if (phone.length !== 12 || typeof phone !== "string") {
      return "Invalid";
    }
    let a = phone.slice(0, 2);
    let b = phone.slice(2, 5);
    let c = phone.slice(5, 8);
    let d = phone.slice(8, 10);
    let e = phone.slice(10, 12);
    return `${a} (${b}) ${c}-${d}-${e}`;
  } catch (error) {
    console.log("error", error);
    return "Invalid";
  }
}

console.log(formattedPhone("+71234567890"));
