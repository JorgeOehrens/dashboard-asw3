import MarketData from "../nftDetails/bidHistory"; // Asegúrate de que la ruta es correcta
import NftCard from "../cards/NftCard"; // Verifica esta ruta también

const ExploreNftsMain = () => {
  return (
    <section className="w-full">
      <div className="flex items-center flex-wrap gap-6 justify-between">
        <h3 className="text-[32px] leading-[120%] font-semibold text-[var(--color-gray-7)] dark:text-white">
          Explore Digital Assets
        </h3>
      </div>
      <div className="grid grid-cols-1 min-[567px]:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-6 mt-6 w-full">
        {MarketData.map((item) => (
          <NftCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default ExploreNftsMain;
