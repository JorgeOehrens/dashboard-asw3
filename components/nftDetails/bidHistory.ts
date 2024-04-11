import user_1 from "/public/images/logo.png";
import img1 from "/public/images/nft/logo.jpg"
import icon1 from "/public/images/asset_digital_sm2.png";
import icon2 from "/public/images/icon/ethereum.png";
import img2 from "/public/images/nft/Diversion-Royale-2.png"

const MarketData = [
  {
    id: 1,
    img: img1,
    icon: icon1,
    name: "Venture Capiltal",
    symbol: "VC1",
    price: 50,
    price_etc: 0.014,

    maxSupply: 5,
    adress_token: "0x2dD2Ea614f9817F25f0A6B3865308F1ff85E884E",
    adress_parity: "0xe670B1255d67BC53e68b78A9dC39811Ae3ee1DE6",
    adress_sales: "0x49031C4FA9A24EaD0E335556B5b1070EB5B3C7F3",

    description:"This property represents 17.52 AC of vacant land as of the effective date of valuation. It is approved for the development of high-density multi-family uses comprised of 480 units demonstrating an overall density of 27.4 units per acre. Ultimately, this project is proposed for the development of one and two bedroom apartment units, along with 432 storage units. The apartment units range in size from 658 to 1,252 square feet with an average size at 827 square feet. Storage units includes a mix of 106-4’ x 8’ and 326 - 6’ x 8’ units. ",
    documData:[
      {
        id: "doc1",
        title: "Appraisal",
        url: "https://www.assetsweb3.com/assets/doc1-a6439719.pdf",
      },
      {
        id: "doc2",
        title: "Rules of Procedure",
        url: "https://www.assetsweb3.com/assets/doc2-f9347f43.pdf",
      },
      {
        id: "doc3",
        title: "Closing Instructions",
        url: "https://www.assetsweb3.com/assets/doc3-35f79f0c.pdf",
      },]
  },
  {
    id: 2,
    img: img2,
    icon: icon2,
    name: "TEST TOKEN",
    symbol: "TESTT1",
    price: 2,
    price_etc: 0.0005,

    maxSupply: 90,
    adress_token: "0xC1028Bd8A96242e719fA7601784584EcbFde0E13",
    adress_parity: "0xe670B1255d67BC53e68b78A9dC39811Ae3ee1DE6",
    adress_sales: "0x29B27c2F7D76a880899a416f7047D0E285d06592",

    description:"Description token test",
    documData:[
      {
        id: "doc1",
        title: "DOCUMENTO 1",
        url: "https://www.assetsweb3.com/assets/doc1-a6439719.pdf",
      }]
  }
];

export default MarketData;
