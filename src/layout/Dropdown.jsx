import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import BaseURL from "../api/BaseURL";

const Dropdown = ({ playlist = [] }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      {playlist.map((list) => {
        return (
          <div>
            <div
              onClick={() => {
                setClicked(!clicked);
              }}
              className={`${
                clicked ? "bg-primary400" : "bg-white"
              } flex border border-neutral-400 mb-1 py-4 px-12 rounded-full cursor-pointer`}
            >
              <div className="flex justify-between items-center text-sm w-full">
                <div className="flex gap-4 w-fit items-center">
                  {clicked ? (
                    <IoMdArrowDropup className="text-xl xl:text-3xl" />
                  ) : (
                    <IoMdArrowDropdown className="text-xl xl:text-3xl" />
                  )}
                  <p className="p1">{list.Nama}</p>
                </div>
                <p className="p2 hidden md:block">{list.durasi}</p>
              </div>
            </div>
            <div className={`mt-1 p-4 ${clicked ? "flex" : "hidden"} flex-col`}>
              <div className="flex flex-col gap-2 border-2 border-neutral-100 bg-neutral-100 rounded-3xl p-4 shadow-xl">
                {list.Video.map((vid) => {
                  return (
                    <div className="flex justify-between bg-neutral-50 py-2 px-4 shadow-md rounded-lg">
                      <p className="p1 text-neutral-700">{vid.judul}</p>
                      <p className="p1">{vid.durasi}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Dropdown;
{
  /* <p className="p1 text-neutral-700">Pemgenalan</p>
<p className="p1 text-neutral-700">HTML dasar : tag</p>
<p className="p1 text-neutral-700">HTML dasar : paragraf</p>
<p className="p1 text-neutral-700">HTML dasar : heading</p>
<p className="p1 text-neutral-700">HTML dasar : list</p> */
}
