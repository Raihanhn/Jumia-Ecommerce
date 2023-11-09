import React from "react";
import Elementthree from "./Elementthree";
import { useRouter } from "next/router";
import { ShoppingCart } from "@mui/icons-material";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <div className="bg-orange-500  mb-3">
        <div className=" mx-auto w-full align-middle  md:max-w-7xl ">
          <img
            src="https://ng.jumia.is/cms/0-1-cpr/2023/new-top-strip/free-delivery-top-strip_1.gif"
            alt="navimage"
          />
        </div>
      </div>

      <div className="bg-white align-middle">
        <div className="md:max-w-7xl mx-auto flex py-3 flex-row justify-between space-x-2 ">
          <span className="flex space-x-2">
            <Elementthree />
            <img
              src="/jumia.png"
              className="h-[40px] pt-3 cursor-pointer"
              alt="logo"
              onClick={() => router.push("/")}
            />
          </span>

          <input
            type="text"
            placeholder="SEARCH"
            className="input input-bordered input-warning w-full outline-none max-w-md  my-auto hidden lg:inline"
          />

          <span className="hidden md:inline">
            <button className="btn btn-outline btn-warning">
              LOGIN/ SIGN UP
            </button>
          </span>
          <ShoppingCart />
        </div>
      </div>
    </>
  );
}
