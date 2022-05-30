import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { ChevronLeft, ChevronRightTwoTone } from "@mui/icons-material";

export default function Customer({ data }) {
  const [open, setOpen] = useState(false);
  const { name, img, comment, rating } = data;
  return (
    <div className="border rounded-lg p-4 my-4 w-full">
      <div className="user-info flex items-center">
        <img src={img} alt="user" className="h-20 w-20 rounded-full border-2" />
        <div className="user-info">
          <h2 className="ml-4 text-xl font-semibold text-gray-500">{name}</h2>
          <div className="rating w-8">
            <Stack spacing={1}>
              {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
              <Rating
                name="half-rating-read"
                defaultValue={rating}
                precision={0.5}
                readOnly
              />
            </Stack>
          </div>
        </div>
      </div>
      <div className="comment-container mt-3 ">
        <hr />
        <button
          className="py-1 mt-2 px-2 rounded-lg hover:bg-gray-100 border text-gray-500"
          onClick={() => setOpen(!open)}
        >
          Comment{" "}
          <ChevronRightTwoTone
            className="rotate-1"
            style={{ transform: open ? "rotate(-90deg)" : "rotate(90deg)" }}
          />{" "}
        </button>
        <div className="text-sm text-gray-500 mt-4">
          <p className={`  ${open ? "visible" : " invisible"}`}>{comment}</p>
        </div>
      </div>
    </div>
  );
}
