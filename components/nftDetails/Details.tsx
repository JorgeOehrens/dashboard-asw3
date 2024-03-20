import Image from "next/image";
import bidHistoryData from "./bidHistory";
const documentData = [
  {
    id: "doc1",
    title: "APPRAISAL",
    url: "https://www.assetsweb3.com/assets/doc1-a6439719.pdf",
  },
  {
    id: "doc2",
    title: "REGLAMENTO INTERNO",
    url: "https://www.assetsweb3.com/assets/doc2-f9347f43.pdf",
  },
  {
    id: "doc3",
    title: "CLOSING INSTRUCTION",
    url: "https://www.assetsweb3.com/assets/doc3-35f79f0c.pdf",
  },
];

const Details = () => {
  return (
    <div className="clss">
      <h6 className="text-2xl leading-[150%] font-bold text-[var(--color-gray-6)] dark:text-white ">
        Documents
      </h6>
      <div className="mt-5 flex flex-col gap-5">
          {documentData.map((file) => (
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
      <div className="mt-6 bg-white dark:bg-[var(--color-gray-7)] px-2 xl:px-6 py-5 rounded-lg">
        <div className="flex items-center flex-wrap justify-between gap-3">
          <h6 className="text-2xl leading-[150%] font-bold text-[var(--color-gray-6)] dark:text-white -mt-1">
            Transactions
          </h6>
          
        </div>
        <div className="mt-5 sm:mt-[51px] flex flex-col gap-5 overflow-x-auto">
          {bidHistoryData.map((itm) => (
            <div
              key={itm.id}
              className="min-w-[350px] sm:min-w-[400px] flex items-center justify-between whitespace-nowrap"
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <Image
                  src={itm.img}
                  alt="user_1"
                  className="w-8 h-8 rounded-full flex-shrink-0"
                />
                <p className="text-[var(--color-gray-7)] dark:text-white">
                  {itm.title} by {itm.bidBy}
                </p>
              </div>
              <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
                {itm.data}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
