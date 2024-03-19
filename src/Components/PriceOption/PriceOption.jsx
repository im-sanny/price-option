import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 text-white rounded-xl p-5 flex flex-col">
      <h2>
        <span className="text-4xl text-center font-bold">{price}</span>
        <span className="text-2xl"></span>
      </h2>
      <h4 className="text-3xl">{name}</h4>
      <div className="pl-5 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="btn w-full mt-3 hover:bg-green-500 font-bold">
        Buy now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
