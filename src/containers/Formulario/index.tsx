import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Form, Opcoes } from './styles'
import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles'
import * as enums from '../../utils/enums/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <Campo
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          <input
            value={enums.Prioridade.URGENTE}
            name="prioridade"
            type="radio"
            id="urgente"
            onChange={(evento) =>
              setPrioridade(evento.target.value as enums.Prioridade)
            }
          />{' '}
          <label htmlFor="urgente">Urgente</label>
          <input
            value={enums.Prioridade.IMPORTANTE}
            name="prioridade"
            type="radio"
            id="importante"
            onChange={(evento) =>
              setPrioridade(evento.target.value as enums.Prioridade)
            }
          />{' '}
          <label htmlFor="importante">Importante</label>
          <input
            value={enums.Prioridade.NORMAL}
            name="prioridade"
            type="radio"
            id="normal"
            onChange={(evento) =>
              setPrioridade(evento.target.value as enums.Prioridade)
            }
            defaultChecked={prioridade === enums.Prioridade.NORMAL}
          />{' '}
          <label htmlFor="normal">Normal</label>
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
