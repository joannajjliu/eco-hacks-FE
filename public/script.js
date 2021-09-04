/*global chrome*/
const PRODUCT_DETAILS_TABLE_NAME = "productDetails_techSpec_section_1";

// returns product model number
const findProductModelNumber = (id) => {
  const productDetailsTable = document.getElementById(id);
  for (var i = 0, row; (row = productDetailsTable.rows[i]); i++) {
    const subTitle = row.cells[0].textContent;

    // subtitle in table matching the title "Item model number"
    if (subTitle.includes("model")) {
      return row.cells[1].textContent;
    }
  }
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.getProductModelNumber)
    sendResponse({
      productModelNumber: findProductModelNumber(PRODUCT_DETAILS_TABLE_NAME),
    });
});
