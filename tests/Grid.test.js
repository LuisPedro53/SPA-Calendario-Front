import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios"; // Corrigir esta linha
import Form from "../src/Components/Form";

jest.mock("axios");

test("submitting form with valid data calls createAluno function", async () => {
  axios.post.mockResolvedValueOnce({ data: {} });

  const fetchUsers = jest.fn();
  const { getByLabelText, getByText } = render(
    <Form fetchUsers={fetchUsers} />
  );

  fireEvent.change(getByLabelText("Nome"), { target: { value: "Teste" } });
  fireEvent.change(getByLabelText("E-mail"), {
    target: { value: "teste@example.com" },
  });
  fireEvent.change(getByLabelText("CPF"), {
    target: { value: "123.456.789-00" },
  });

  fireEvent.click(getByText("SALVAR"));

  await waitFor(() => {
    expect(axios.post).toHaveBeenCalledWith("http://localhost:8080/graphql", {
      query: expect.any(String),
      variables: {
        nmAluno: "Teste",
        cpfAluno: "12345678900",
        emailAluno: "teste@example.com",
      },
    });
    expect(fetchUsers).toHaveBeenCalled();
  });
});
