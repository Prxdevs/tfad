import styled from 'styled-components';

const Wrapper = styled.section`
  background: var(--clr-grey-10);

  .featuredd{
    font-family: 'Poppins', sans-serif;
  }

  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
  }
`;

export default Wrapper;
