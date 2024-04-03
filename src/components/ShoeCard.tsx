import { Shoe } from "../types/service";

type shoeCardProps = {
  changeBigShoeImage: (shoe: Shoe) => void;
  bigShoeImage: string;
  shoe: Shoe;
};

const ShoeCard = ({
  changeBigShoeImage,
  bigShoeImage,
  shoe,
}: shoeCardProps) => {
  // Function to change what image should appear in Hero Section.
  const handleClick = () => {
    if (bigShoeImage !== shoe.bigShoe) {
      changeBigShoeImage(shoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${bigShoeImage === shoe.bigShoe ? "border-coral-red" : "border transparent"} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={shoe.thumbnail}
          width={127}
          height={103}
          alt="Shoe Collection"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
