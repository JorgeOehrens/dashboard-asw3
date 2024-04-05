import MarketData from "../nftDetails/bidHistory";

type PropsType = {
  tokenAddress: string;

};
const documentData = [
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
  },
];
const Descriptions = ({tokenAddress}:PropsType) => {
  const indice_token = MarketData.findIndex(token => token.adress_token === tokenAddress);
  const description = MarketData[indice_token].description;
  const documents_data = MarketData[indice_token].documData;

  return (
    <div className="cls">
      <h6 className="text-2xl leading-[150%] font-bold text-[var(--color-gray-6)] dark:text-white">
        Descriptions
      </h6>
      <p className="text-[var(--color-gray-5)] dark:text-[var(--color-gray-73)] mt-3">
     {description}
      </p>
      <h6 className="text-2xl leading-[150%] font-bold text-[var(--color-gray-6)] dark:text-white ">
        Documents
      </h6>
      <div className="mt-5 flex flex-col gap-5">
          {documents_data.map((file) => (
            <a
              key={file.id}
              href={file.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
            >
                    <span className="material-symbols-outlined">
                    file_download
                    </span>
              <span className="text-[var(--color-gray-7)] dark:text-white">{file.title}</span>
            </a>
          ))}
        </div>
          
    </div>
  );
};

export default Descriptions;
