import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/29461618?s=460&u=f16d3cf15b203db8d80bda57e1a63d66b0018634&v=4"
            alt="Emerson"
          />
          <div>
            <strong>emersonfnascimento/auth</strong>
            <p>
              Projeto prático para aprendizado de autenticação com NodeJS com
              JWT
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/29461618?s=460&u=f16d3cf15b203db8d80bda57e1a63d66b0018634&v=4"
            alt="Emerson"
          />
          <div>
            <strong>emersonfnascimento/auth</strong>
            <p>
              Projeto prático para aprendizado de autenticação com NodeJS com
              JWT
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/29461618?s=460&u=f16d3cf15b203db8d80bda57e1a63d66b0018634&v=4"
            alt="Emerson"
          />
          <div>
            <strong>emersonfnascimento/auth</strong>
            <p>
              Projeto prático para aprendizado de autenticação com NodeJS com
              JWT
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
