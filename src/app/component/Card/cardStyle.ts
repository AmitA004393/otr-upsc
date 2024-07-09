import styled from 'styled-components'

export const CardStyle = styled('div')`
  a {
    color: transparent !important;
  }
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px !important;
  border: 1px solid rgba(36, 176, 155, 0.5);

  .cardlayout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    display: flex;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 100%;
  }

  .icon-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--icon-bg, #fff);
    margin: 0 auto;
    margin-bottom: 6px;
  }

  .icon {
    width: 30px;
    height: 23x;
  }

  .content {
    text-align: center;
    margin-top: 2px;
  }

  .label {
    color: #24b09b;
    font-family: Roboto;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
  }

  .text {
    color: var(--lightgray);
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1px;
  }
`
