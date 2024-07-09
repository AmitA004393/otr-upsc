import styled from 'styled-components'

export const StepStyle = styled('div')`
  .MuiPaper-rounded {
    border-radius: 0;
    border: 1px solid var(--whiteborder);
  }
  .MuiAccordionDetails-root ul {
    padding-left: 15px;
  }
  .MuiAccordionDetails-root li {
    color: var(--textblack);
    font-size: 0.8rem;
  }
  .MuiAccordionDetails-root p {
    font-size: 0.85rem;
  }
  .faqheading {
    position: relative;
    padding-left: 30px;
    color: var(--bluecolor);
  }
  .faqheading span {
    position: absolute;
    left: 0px;
    color: var(--bluecolor);
    display: inline-block;
    padding: 0 5px;
    border-radius: 5px;
  }
  .faqContent {
    background: #f7f7f7;
  }
`
