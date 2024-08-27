// import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";
import * as XLSX from "xlsx";

const filePath = "./amazon-mobile.txt";
const excelFilePath = "./scrapped-data.xlsx";

async function amazonScrapping() {
  try {
    // const response = await axios.get('https://www.amazon.in/s?k=mobile');
    // writeFile(filePath, response.data);

    const mobileInformation = [];
    const data = fs.readFileSync(filePath, "utf8");
    const $ = cheerio.load(data);

    $(".s-result-item").each((index, element) => {
      const price = $(element).find(".a-price-whole").text();
      const name = $(element)
        .find(".a-size-medium.a-color-base.a-text-normal")
        .text();
      const availability =
        $(element).find(".a-color-success").text() === ""
          ? "In Stock"
          : "Out of Stock";
      //   console.log(availability);

      const rating = $(element).find(".a-icon-alt").text();

      if (name) {
        mobileInformation.push({
          Name: name.trim(),
          Price: price.trim() || "Price not available",
          Availability: availability.trim(),
          Rating: rating.trim() || "Rating not available",
        });
      }
    });

    console.log(mobileInformation);
    saveToExcel(mobileInformation);
  } catch (error) {
    console.log(error);
  }
}

amazonScrapping();

function saveToExcel(data) {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Mobile Information");

  XLSX.writeFile(workbook, excelFilePath);
  console.log(`Data successfully saved to ${excelFilePath}`);
}

// function writeFile(filePath, data) {
//   fs.writeFile(filePath, data, (err) => {
//     if (err) {
//       console.error("Error writing to file", err);
//     } else {
//       console.log("File written successfully");
//     }
//   });
// }

// function readFile(filePath) {
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading file", err);
//     } else {
//       console.log("File content:", data);
//     }
//   });
// }
