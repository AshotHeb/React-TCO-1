import { useRef, useState } from "react";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { isRequired, maxLength20, minLength3 } from "../../helpers/validations";
import { DatePick } from "../../components/DatePick";
import * as moment from "moment";
import { connect } from "react-redux";
import { addNewTaskThunk } from "../../redux/actions/task-actions";

const ConnectedAddTaskForm = ({ onSubmitCallback, addNewTask }) => {
  const titleInputRef = useRef(null);
  const descriptionInputRef = useRef(null);

  const [inputsData, setInputsData] = useState({
    title: {
      value: "",
      error: undefined,
      validations: [isRequired, minLength3, maxLength20],
    },
    description: {
      value: "",
      error: undefined,
      validations: [isRequired, minLength3, maxLength20],
    },
  });

  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      title: { value: title },
      description: { value: description },
    } = inputsData;

    const formData = {
      title,
      description,
      date: moment(startDate).format("YYYY-MM-DD"),
    };

    addNewTask(formData, onSubmitCallback);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    const { validations } = inputsData[name];

    let error;

    for (let i = 0; i < validations.length; i++) {
      const validation = validations[i];
      const errorMessage = validation(value);

      if (errorMessage) {
        error = errorMessage;
        break;
      }
    }

    setInputsData((prev) => {
      return {
        ...prev,
        [name]: {
          ...prev[name],
          value,
          error,
        },
      };
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for="titleId">Title</Label>
        <Input
          id="titleId"
          name="title"
          placeholder="Task title"
          type="text"
          innerRef={titleInputRef}
          onChange={handleChange}
          invalid={!!inputsData.title.error}
        />
        {!!inputsData.title.error && (
          <FormFeedback>{inputsData.title.error}</FormFeedback>
        )}
      </FormGroup>
      <FormGroup>
        <Label for="descriptionId">Description</Label>
        <Input
          id="descriptionId"
          name="description"
          placeholder="Task descriptionId"
          type="text"
          innerRef={descriptionInputRef}
          onChange={handleChange}
          invalid={!!inputsData.description.error}
        />
        {!!inputsData.description.error && (
          <FormFeedback>{inputsData.description.error}</FormFeedback>
        )}
      </FormGroup>
      <FormGroup>
        <DatePick startDate={startDate} setStartDate={setStartDate} />
      </FormGroup>
      <Button color="primary" onClick={onSubmit}>
        Add Task
      </Button>{" "}
      <Button color="primary">Clear</Button>{" "}
    </Form>
  );
};

export const AddTaskForm = connect(null, {
  addNewTask: addNewTaskThunk,
})(ConnectedAddTaskForm);

export const SharedModal = ({ onClose }) => {
  return (
    <Modal toggle={onClose} isOpen={true}>
      <ModalHeader toggle={onClose}>Modal title</ModalHeader>
      <ModalBody>
        <AddTaskForm onSubmitCallback={onClose} />
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};
