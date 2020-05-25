import React, { useState } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Table,
} from "react-bootstrap";

function Todo() {
  const [todoVal, newTodoVal] = useState("");
  const [dataList, setDataList] = useState([]);
  const finalData = localStorage.getItem("1");
  const datas = JSON.parse(finalData);

  function handleTodoChange(e) {
    newTodoVal(e.target.value);
  }

  function handleTodoSubmit(e) {
    e.preventDefault();
    newTodoVal("");
    dataList.push(todoVal);
    setDataList(dataList);
    localStorage.setItem("1", JSON.stringify(dataList));
  }

  function handleSplice(e, i) {
    e.preventDefault();
    const val = [...dataList];
    val.splice(i, 1);
    setDataList(val);
    localStorage.setItem("1", JSON.stringify(val));
  }
  const items = datas.map((dataItem, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{dataItem}</td>
        <td>
          <Button
            variant="btn btn-danger"
            onClick={(e) => handleSplice(e, index)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });
  return (
    <React.Fragment>
      <section>
        <Container style={{ marginTop: 40 }}>
          <form>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter ToDo"
                value={todoVal}
                onChange={(e) => handleTodoChange(e)}
              />
              <InputGroup.Append>
                <Button
                  variant="outline-secondary"
                  type="submit"
                  onClick={(e) => handleTodoSubmit(e)}
                >
                  ADD
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </form>
          <Table>
            <thead>
              <tr>
                <th>Sr.no</th>
                <th>List</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{items}</tbody>
          </Table>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Todo;
