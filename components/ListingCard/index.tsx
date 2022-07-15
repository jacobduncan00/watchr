import { EbayResult } from "../../types/EbayResult";

type Props = {
  ebayResult: EbayResult;
};

export const ListingCard = ({ ebayResult }: Props) => {
  const parseTimeLeft = (timeLeft: string) => {
    const [left, right] = timeLeft.split("H");
    const [left2, hours] = left.split("DT");
    const [_, days] = left2.split("P");
    const [min, right2] = right.split("M");
    const [seconds, __] = right2.split("S");
    const formattedTimeLeft = `${days}d ${hours}h ${min}m ${seconds}s`;
    return formattedTimeLeft;
  };

  const convertEbayImageURL = (imageURL: string) => {
    const [_, right] = imageURL.split("g/");
    const [imageID, __] = right.split("/s");
    const newImageURL = `https://i.ebayimg.com/images/g/${imageID}/s-l500.jpg`;
    return newImageURL;
  };

  return (
    <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
      <a href={ebayResult.viewItemURL}>
        <img
          src={convertEbayImageURL(ebayResult.galleryURL)}
          loading="lazy"
          alt={ebayResult.title}
          className="w-[169px] h-[225px] rounded-t-md block ml-auto mr-auto py-2"
        />
        <div className="pt-3 ml-4 mr-2 mb-3">
          <h3 className="text-xl text-gray-900">{ebayResult.title}</h3>
          <p className="text-gray-400 text-sm mt-1 font-bold">
            {ebayResult.sellingStatus.bidCount > 0
              ? `$${ebayResult.sellingStatus.convertedCurrentPrice.value} with ${ebayResult.sellingStatus.bidCount} bids`
              : `$${ebayResult.sellingStatus.convertedCurrentPrice.value}`}
          </p>
          <p className="text-gray-400 text-sm mt-1">
            {parseTimeLeft(ebayResult.sellingStatus.timeLeft)}
          </p>
        </div>
      </a>
    </article>
  );
};
