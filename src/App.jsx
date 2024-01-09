import { FormattedMessage } from "react-intl";
import { ChooseSubject } from "./components/ChooseSubject/ChooseSubject";
import { ChooseWeek } from "./components/ChooseWeek/ChooseWeek";
import { Table } from "./components/Table/Table";
import { useContext } from "react";
import { LanguageContext } from "./components/Context/LanguageContext/LanguageContext";
function App() {
  const { toggleLanguage } = useContext(LanguageContext);
  return (
    <div className=" w-[80%] m-auto pt-[3rem]">
      <div className="flex  justify-between items-center">
        <div className="left">
          <FormattedMessage id="subject" />

          <ChooseSubject />
        </div>

        <button onClick={toggleLanguage}>
          <FormattedMessage id="btn-language" />
        </button>
        <div className="">
          <FormattedMessage id="filter" />
          <ChooseWeek />
        </div>
      </div>
      <Table />
    </div>
  );
}

export default App;
