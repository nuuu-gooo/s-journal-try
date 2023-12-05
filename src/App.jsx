import { useState } from "react";
import { ChooseSubject } from "./components/ChooseSubject/ChooseSubject";
import { ChooseWeek } from "./components/ChooseWeek/ChooseWeek";
import { Table } from "./components/Table/Table";

function App() {
  return (
    <div className=" w-[70%] m-auto pt-[3rem]">
      <div className="flex justify-between items-center">
        <div className="">
          <ChooseSubject />
        </div>
        <div className="">
          <ChooseWeek />
        </div>
      </div>
      <Table />
    </div>
  );
}

export default App;
