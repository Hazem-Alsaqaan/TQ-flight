import React from "react";
import { AirlinesCompaniesData } from "../../../staticData";

function AirlinesCompanies() {
  const airlinesCompanies = AirlinesCompaniesData;
  return (
    <div className="py-40 px-24 bg-linear-to-r from-30% from-white to-neutral-100">
      <h1 className=" capitalize py-5 text-3xl font-PoppinsBold">airlines</h1>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {airlinesCompanies.map((item) => (
          <div
            key={item.id}
            className="w-38 h-38 rounded-full cursor-pointer hover:scale-110 duration-300 overflow-hidden"
          >
            <img src={item.url} alt="company_pic" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AirlinesCompanies;
