import * as moment from "moment";
import { useCallback, useState } from "react";
import { FILTER_DATE_PICKERS } from "../../../consts";
import { DatePick } from "../../DatePick";
import "./styles.css";

export const FilterSection = ({ setFilterField }) => {
  const createdLte = useState(new Date());
  const createdGte = useState(new Date());
  const completedLte = useState(new Date());
  const completedGte = useState(new Date());

  const getFilterState = useCallback(
    (name) => {
      switch (name) {
        case "create_lte":
          return createdLte;
        case "create_gte":
          return createdGte;
        case "complete_lte":
          return completedLte;
        case "complete_gte":
          return completedGte;
        default:
          return null;
      }
    },
    [createdLte, createdGte, completedLte, completedGte]
  );

  return (
    <div className="filter-section">
      {FILTER_DATE_PICKERS.map((pickerData, index) => {
        const [date, setDate] = getFilterState(pickerData.value);

        return (
          <div key={index}>
            <p>{pickerData.label}</p>
            <DatePick
              startDate={date}
              setStartDate={(date) => {
                setDate(date);
                setFilterField([
                  pickerData.value,
                  moment(date).format("YYYY-MM-DD"),
                ]);
              }}
              name={pickerData.value}
            />
            <button
              onClick={() => {
                setDate(new Date());
                setFilterField([pickerData.value, ""]);
              }}
            >
              Reset
            </button>
          </div>
        );
      })}
    </div>
  );
};
