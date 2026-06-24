import { Label } from "@heroui/react";

const Amenities = ({ selectedAmenities = [], handleAmenityChange }) => {
  const amenities = [
    "whiteboard",
    "wifi",
    "ac",
    "projector",
    "quiet-zone",
  ];

  return (
    <div>
      <p className="font-semibold p-2">Amenities: </p>
      <div className="grid grid-cols-2 gap-4">
      
      {amenities.map((item) => (
        <label key={item} className="flex items-center gap-1.5">

          <input
            type="checkbox"
            value={item}
            checked={selectedAmenities.includes(item)}
            onChange={(e) =>
              handleAmenityChange(item, e.target.checked)
            }
          />
          {item}
        </label>
      ))}
    </div>
    </div>
  );
};

export default Amenities;






