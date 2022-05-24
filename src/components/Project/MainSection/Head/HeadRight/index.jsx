import { useState } from "react";
import { Button, Input } from "reactstrap";
import { SORT_FIELDS } from "../../../../../consts";
import { SharedModal } from "../../../../../shared/SharedModal";
import "./styles.css";

const SortSelect = ({ handleSort }) => {
  return (
    <Input name="sort" type="select" onChange={handleSort}>
      {SORT_FIELDS.map(({ value, label }) => {
        return (
          <option value={value} key={label}>
            {label}
          </option>
        );
      })}
    </Input>
  );
};

const SearchInput = ({ handleSearch }) => {
  return (
    <Input
      type="search"
      placeholder="Search"
      name="search"
      onChange={handleSearch}
    ></Input>
  );
};

export const HeadRight = ({ setTasks, setFilterField }) => {
  const [isShowAddTaskModal, setIsShowAddTaskModal] = useState(false);
  const handleBtnClick = () => {
    if (isShowAddTaskModal) {
      setIsShowAddTaskModal(false);
    } else {
      setIsShowAddTaskModal(true);
    }
  };

  const handleSort = (event) => {
    const { value } = event.target;
    // ['sort' , 'creation_date_oldest']
    setFilterField(["sort", value]);
  };
  const handleSearch = (event) => {
    const { value } = event.target;
    setFilterField(["search", value]);
  };

  return (
    <div className="main-section-head-right">
      <Button
        color="primary"
        outline
        style={{ width: "100%" }}
        onClick={handleBtnClick}
      >
        Add New Task
      </Button>
      <SortSelect handleSort={handleSort} />
      <SearchInput handleSearch={handleSearch} />
      {isShowAddTaskModal && (
        <SharedModal
          onClose={() => {
            setIsShowAddTaskModal(false);
          }}
          setTasks={setTasks}
        />
      )}
    </div>
  );
};
