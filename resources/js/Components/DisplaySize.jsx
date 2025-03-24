import { useSize } from "../Context/SizeContext";

const DisplaySize = ({ productId }) => {
    const { selectedSizes } = useSize();
    const selectedSize = selectedSizes[productId] || "-";

    return <span className="">{selectedSize}</span>;
};

export default DisplaySize;
