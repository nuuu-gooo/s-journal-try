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
          <p>
            <FormattedMessage id="subject" />
          </p>

          <ChooseSubject />
        </div>

        <button
          className="p-3 w-[10%] bg-[transparent] border-solid rounded-2xl cursor-pointer hover:opacity-50"
          onClick={toggleLanguage}
        >
          <FormattedMessage id="btn-language" />
        </button>
        <div className="">
          <p>
            <FormattedMessage id="filter" />
          </p>
          <ChooseWeek />
        </div>
      </div>
      <Table />
    </div>
  );
}

export default App;
