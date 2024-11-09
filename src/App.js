import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`

*{
  margin : 0 ;
  padding: 0;
  box-sizing: border-box;
  }
`;

export const Main = styled.main`
  background-image: url("https://i.pinimg.com/474x/23/be/4c/23be4cf6d4717f179ab45bb109f8078c.jpg");

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const H1 = styled.h1`
  color: white;
  font-size: 5vh;
  align-items: center;
`;

export const Input = styled.input`
  width: 30vh;
  border: 1 px solid;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  border-color: darkblue;
`;

export const Button = styled.button`
border: none
padding: 11px 14px;
border-radius: 5px;
margin: 10px;
display: inline;
border-color: darkblue;


`;

export const Resultado = styled.h2`
  color: white;
 font-size: 35px;
  border radius: 20px;
  padding: 10px
  margin: 10px;
 
`;

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  return (
    <Main>
      <globalStyle />
      <Section>
        <H1>Calculadora</H1>
        {/* onChange é um evento de mudança  */}
        <Input
          type="number"
          placeholder="Insira um Número"
          onChange={capturandoPrimeiroValor}
        />

        <Input
          type="number"
          placeholder="Insira um Número"
          onChange={capturandoSegundoValor}
        />
        <div>
          <Button onClick={soma}>+</Button>
          <Button onClick={subtracao}>-</Button>
          <Button onClick={multiplicacao}>x</Button>
          <Button onClick={divisao}>/</Button>
        </div>
        <Resultado> {resultado} </Resultado>
      </Section>
    </Main>
  );
}
