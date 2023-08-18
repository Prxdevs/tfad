import styled from 'styled-components';

const Wrapper = styled.article`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap');

body {
  font-family: 'Poppins', sans-serif; // Apply the font-family to the entire app
  font-weight: 600;
}

  .container {
    position: relative;
    background: var(--clr-black);
    // border-radius: var(--radius);
  }

  img {
    width: 100%;
    display: block;
    object-fit: cover;
    // border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    // border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
  }

  footer p {
    color: #555;
    
  }
`;

export default Wrapper;
