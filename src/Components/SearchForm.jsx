import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  FormContainer,
  InputArea,
  Input,
  Label,
  Button,
} from "../Styles/SearchForm";

const SearchForm = ({ fetchTarefas }) => {
  const [titulo, setTitulo] = useState("");
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");

  const handleSearch = () => {
    if ((dataInicial && !dataFinal) || (!dataInicial && dataFinal)) {
      return toast.info("Por favor, insira ambas as datas inicial e final.");
    }

    if (dataInicial && dataFinal) {
      fetchTarefas(titulo.trim(), dataInicial, dataFinal);
    } else {
      fetchTarefas(titulo.trim());
    }
  };

  return (
    <FormContainer>
      <InputArea>
        <Label htmlFor="titulo-input">Título</Label>
        <Input
          id="titulo-input"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </InputArea>

      <InputArea>
        <Label htmlFor="data-inicial-input">Data Inicial</Label>
        <Input
          id="data-inicial-input"
          type="date"
          value={dataInicial}
          onChange={(e) => setDataInicial(e.target.value)}
        />
      </InputArea>

      <InputArea>
        <Label htmlFor="data-final-input">Data Final</Label>
        <Input
          id="data-final-input"
          type="date"
          value={dataFinal}
          onChange={(e) => setDataFinal(e.target.value)}
        />
      </InputArea>

      <Button type="button" onClick={handleSearch}>
        PESQUISAR
      </Button>
    </FormContainer>
  );
};

export default SearchForm;
