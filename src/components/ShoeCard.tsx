type bigShoe = {
  thumbnail: string;
  bigShoe: string;
};

type shoeCardProps = {
  imgUrl: bigShoe;
  changeBigShoeImage: (imgUrl: string) => void;
  bigShoeImage: string;
};

const ShoeCard = ({
  imgUrl,
  changeBigShoeImage,
  bigShoeImage,
}: shoeCardProps) => {
  // Function to change what image should appear in Hero Section.
  const handleClick = () => {
    if (bigShoeImage !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${bigShoeImage === imgUrl.bigShoe ? "border-coral-red" : "border transparent"} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          width={127}
          height={103}
          alt="Shoe Collection"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
