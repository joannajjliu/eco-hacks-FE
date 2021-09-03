import React, { useState, useEffect } from 'react';
const PRODUCT_DETAILS_TABLE_NAME = "productDetails_techSpec_section_1";
const MOCK_PRODUCT = "20E1H"

function Home() {

    const [currentProductData, setCurrentProductData] = useState()

    // later if needed
    // myHeaders = new Headers({
    //   Authorization: "Token " + process.env.API_TOKEN,
    //   "Content-Type": "application/x-www-form-urlencoded",
    // });

    // returns product model number
    const findProductModelNumber = (id) => {
        console.log(id)
        const productDetailsTable = document.getElementById(id);
        console.log("product table", productDetailsTable);
        for (var i = 0, row; (row = productDetailsTable.rows[i]); i++) {
            const subTitle = row.cells[0].textContent;

            // subtitle in table matching the title "Item model number"
            if (subTitle.includes("model")) {
                return row.cells[1].textContent;
            }
        }
    };

    // search product model number with Energy Star API
    const searchModelEnergyStarData = async (model) => {
        const cleanedModel = model.trim().replace(/[^\x00-\x7F]/g, ""); // clean model number for use in API
        const URL = `https://data.energystar.gov/resource/qbg3-d468.json?model_name=${cleanedModel}`;
        await fetch(URL)
        let response = await fetch(URL)
        response = await response.json()

        return response[0]
    };


    useEffect(() => {

        if (process.env.REACT_APP_USE_MOCK) {
            const getCurrentProductData = async () => {
                const productData = await searchModelEnergyStarData(MOCK_PRODUCT)
                setCurrentProductData(productData)
            }
            getCurrentProductData()

        } else {
            // const getCurrentProductData = async () => {
            //     const productModelNumber = findProductModelNumber(PRODUCT_DETAILS_TABLE_NAME);
            //     const productData = await searchModelEnergyStarData(productModelNumber)
            //     setCurrentProductData(productData)
            // }
            // getCurrentProductData()
            // setCurrentProductData(data)
        }
    }, [])


    return (
        <>{JSON.stringify(currentProductData)}</>
    );
}

export default Home;
