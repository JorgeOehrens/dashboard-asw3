import PriceChart from "../charts/PriceChart";
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
const Descriptions = () => {
  return (
    <div className="cls">
      <h6 className="text-2xl leading-[150%] font-bold text-[var(--color-gray-6)] dark:text-white">
        Descriptions
      </h6>
      <p className="text-[var(--color-gray-5)] dark:text-[var(--color-gray-73)] mt-3">
      This property represents 17.52 AC of vacant land as of the
effective date of valuation. It is approved for the development
of high-density multi-family uses comprised of 480 units
demonstrating an overall density of 27.4 units per acre.
Ultimately, this project is proposed for the development of one
and two bedroom apartment units, along with 432 storage units.
The apartment units range in size from 658 to 1,252 square feet
with an average size at 827 square feet. Storage units includes a
mix of 106-4’ x 8’ and 326 - 6’ x 8’ units. 
      </p>
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
      {/* <div className="mt-6 rounded-lg overflow-hidden">
        <div className="flex items-center flex-wrap justify-between gap-3 bg-white dark:bg-[var(--color-gray-7)] px-3 xl:px-6 pt-5 pb-7">
          <h6 className="text-2xl leading-[150%] font-bold text-[var(--color-gray-6)] dark:text-white -mt-1">
            Investment
          </h6>
          <div className="flex items-center justify-between border dark:border-[#3C4145] px-2 sm:px-5 py-1 sm:py-3 rounded-lg mt-3 dark:bg-[var(--color-gray-6)]">
            <div className="min-w-[113px] relative">
              Tokens
            </div>
            <div className="flex flex-1 flex-col items-end border-l dark:border-[#3C4145]">
              <input
                type={"text"}
                className="w-full text-lg leading-[150%] text-right outline-none bg-transparent text-[var(--color-gray-5)] dark:text-white placeholder:text-[var(--color-gray-5)] dark:placeholder:text-[var(--color-gray-3)]"
                placeholder="0.0"
              />
              <span className="text-base leading-[150%] text-right outline-none text-[var(--color-gray-4)]">
                $0.0
              </span>
            </div>
          </div>
          

          <div className="flex items-center flex-wrap gap-2 xl:gap-4">
            <button
              type={"button"}
              className="bg-[var(--color-primary)] p-2 rounded-lg text-white"
            >
              1 week
            </button>
            <button
              type={"button"}
              className="border text-[var(--color-gray-4)] border-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] dark:border-[var(--color-gray-3)] p-2 rounded-lg"
            >
              1 month
            </button>
            <button
              type={"button"}
              className="border text-[var(--color-gray-4)] border-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] dark:border-[var(--color-gray-3)] p-2 rounded-lg"
            >
              3 months
            </button>
            <button
              type={"button"}
              className="border text-[var(--color-gray-4)] border-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] dark:border-[var(--color-gray-3)] p-2 rounded-lg"
            >
              1 year
            </button>
            <button
              type={"button"}
              className="border text-[var(--color-gray-4)] border-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] dark:border-[var(--color-gray-3)] p-2 rounded-lg"
            >
              3 years
            </button>
          </div>
        </div>

        <PriceChart />
      </div> */}
    </div>
  );
};

export default Descriptions;
