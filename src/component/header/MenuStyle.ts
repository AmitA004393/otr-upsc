import styled from 'styled-components'

export const MenuStyle = styled('div')`
  background: white;
  border-bottom: 1px solid rgba(28, 39, 60, 0.12);
  box-shadow: 0 0 30px rgba(28, 39, 60, 0.08);
  padding: 0 15px;
  .szh-menu {
    padding: 0;
    background: var(--bgwhite);
    border-radius: 0;
  }
  .szh-menu__item {
    padding: 0;
    display: block;
  }
  .szh-menu-button {
    background: transparent;
    border: none;
    outline: none;
    padding: 5px 10px 7px;
    font-size: 0.85rem;
    color: red;
  }
  .szh-menu-button a {
    color: #0166AA;
    text-decoration: none;
  }

  .color-hover {
    color: var(--menutext);
    padding: 7px 15px;
    display: block;
    transition: 0.2s;
    background-color: transparent;
  }

  .color-hover:hover {
    color: var(--textwhite);
    background-color: var(--bluecolor);
  }
`