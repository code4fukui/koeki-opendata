import { sleep } from "https://js.sabae.cc/sleep.js";
import { CSV } from "https://js.sabae.cc/CSV.js";
import { parseDetail } from "./parseDetail.js";
import { fetchDetail } from "./fetchDetail.js";

const fn = "koeki-corps-details.csv";
const list = await CSV.fetchJSON(fn, []);
//const start = 29947; // 2025-01-18
//const start = 29949; // 2025-01-27
//const start = 29975; // 2025-05-01 + 1
//const end = 30000; // 9999

//const start = 29916; // 2025-05-01 + 1
//const end = 29916; // 9999

const start = 29976; // 2025-05-02
const end = 29999; // 

const updateCSV = async (fn, list) => {
  const res = [];
  for (let i = list.length - 1; i >= 0; i--) {
    const item = list[i];
    if (res.find(i => i.seqCorp == item.seqCorp)) continue;
    res.push(item);
  }
  res.reverse();
  await Deno.writeTextFile(fn, CSV.stringify(res));
};

for (let i = start; i <= end; i++) {
  const html = await fetchDetail(i);
  const data = parseDetail(html);
  console.log(data);
  data.seqCorp = i;
  list.push(data);
  //await updateCSV(fn, list);
  await Deno.writeTextFile(fn, CSV.stringify(list));
  await sleep(Math.random() * 100 + 100);
}
