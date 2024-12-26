import styled, { createGlobalStyle } from 'styled-components'

import variaveis from './variaveis'

const EstiloGobal = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Roboto", sans-serif;
      list-style: none;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  font-weight: bold;
  font-size: 18px;
  margin: 40px 0;
`

export const Campo = styled.input`
  border-radius: 8px;
  padding: 8px;
  border-color: #66666;
  color: #66666;
  background-color: #fff;
  font-weight: bold;
  width: 100%;
`
export const Botao = styled.button`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinza};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGobal
