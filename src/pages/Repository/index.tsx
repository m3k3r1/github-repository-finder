import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, Issues, RepositoryInfo } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" srcSet="" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="https://avatars.githubusercontent.com/u/69631?v=4" alt="" />
          <div>
            <strong>name/hjsbf</strong>
            <p>skdfgklhsdfgkjlhsdfg</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>123123</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>123123</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>123123</strong>
            <span>Stars</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="repository/">
          <div>
            <strong>asdfasdf</strong>
            <p>asdfsadf</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
