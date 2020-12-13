import React from 'react'
import * as Styles from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, React, NextJS, Styled Components'
}) => (
  <Styles.Wrapper>
    <Styles.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo escrito ao lago react avançado"
    />
    <Styles.Title>{title}</Styles.Title>
    <Styles.Description>{description}</Styles.Description>
    <Styles.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor em frente de frente para uma tela com código."
    />
  </Styles.Wrapper>
)

export default Main
