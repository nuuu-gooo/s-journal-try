import { useState } from "react";
import { ChooseSubject } from "./components/ChooseSubject/ChooseSubject";
import { ChooseWeek } from "./components/ChooseWeek/ChooseWeek";
import { Table } from "./components/Table/Table";

function App() {
  return (
    <div className=" w-[80%] m-auto pt-[3rem]">
      <div className="flex  justify-between items-center">
        <div className="">
          <p>საგანი</p>
          <ChooseSubject />
        </div>
        <div className="">
          <p>ფილტრი</p>
          <ChooseWeek />
        </div>
      </div>
      <Table />
    </div>
  );
}

export default App;
