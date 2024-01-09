import { useState } from "react";
import { ChooseSubject } from "./components/ChooseSubject/ChooseSubject";
import { ChooseWeek } from "./components/ChooseWeek/ChooseWeek";
import { Table } from "./components/Table/Table";
import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import { LanguageContext } from "./components/Context/LanguageContext/LanguageContext";

function App() {
  const { toggleLangauge } = useContext(LanguageContext);
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
      <FormattedMessage id="Welcome" />
      <button onClick={toggleLangauge}>Toggle Language</button>
    </div>
  );
}

export default App;
