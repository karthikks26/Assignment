import shoe from "../../assets/shoe.png";

const ShoePart = () => {
  return (
    <>
      <h2 className="text-sm font-bold">Arrives Thu, 14 Dec - Wed, 3 Jan </h2>
      <div className="flex my-4">
        <div>
          {" "}
          <img src={shoe} width="200px" />
        </div>

        <div>
          <p className="text-xs font-medium">
            {" "}
            Jordan Nu <br /> Retro 1 Low <br /> Men's Shoes
            <br />
          </p>{" "}
          <p className="text-xs text-gray-400">
            Qty 1<br /> Size UK 7.5
            <br /> ₹ 9 195.00
          </p>
        </div>
      </div>
    </>
  );
};

export default ShoePart;
