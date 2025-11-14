import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2px;
  }

  @media (max-width: 1024px) {
    position: relative;

    ul {
      display: ${props => props.isOpen ? 'flex' : 'none'};
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
      transition: transform 0.3s ease-in-out;
      width: 80vw;
      max-width: 320px;
      height: 100vh;
      background: linear-gradient(135deg, #ffffff, #f3f4f6); /* Light gradient for modern feel */
      box-shadow: 0 0 15px rgba(73, 167, 93, 0.3); /* Soft green glow */
      z-index: 10;
      border-radius: 0 8px 8px 0;
      margin-top: 0;
      overflow-y: auto;
      padding: 0;
    }

    li {
      text-align: left; /* Align left for side menu */
      width: 100%;
      color: #333333; /* Dark text for light theme */
      font-size: 18px; /* Slightly larger for better touch */
      padding: 15px 25px; /* More padding for touch targets */
      margin: 0;
      transition: background-color 0.2s ease, color 0.2s ease;
    }

    li:hover {
      background-color: #e5e7eb; /* Light hover */
      color: #49A75D; /* Green accent on hover */
    }

    li a {
      display: block;
      color: inherit;
      text-decoration: none;
    }
  }
`;