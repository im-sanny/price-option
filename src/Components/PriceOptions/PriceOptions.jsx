import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: "$29.99/month",
      features: [
        "Access to gym facilities",
        "Limited group fitness classes",
        "No access to personal trainers",
        "24/7 access to gym",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: "$49.99/month",
      features: [
        "Access to gym facilities",
        "Unlimited group fitness classes",
        "Limited access to personal trainers",
        "Discounts on gym merchandise",
        "Access to sauna",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: "$79.99/month",
      features: [
        "Access to gym facilities",
        "Unlimited group fitness classes",
        "Full access to personal trainers",
        "Access to spa facilities",
        "Nutritional counseling sessions",
        "Free towel service",
      ],
    },
  ];

  return (
    <div className="mx-10 text-center">
      <h1 className="text-5xl my-5 font-bold">Best Price in the town</h1>
      <div className="lg:grid grid-cols-3 gap-5">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
