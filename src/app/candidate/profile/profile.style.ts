import styled from 'styled-components'

export const ProfileStyle = styled('div')`
  margin-top: 5px;

  .heading {
    color: #FFFFFF;
    /* font-family: Roboto; */
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    /* margin-bottom:16px; */
    background-color: #2947A3;
    height: 40px;
    padding-left: 10px;
  }
 .box{
  margin-bottom:16px;
  
 
 }
.profilebox { 
    display: flex;
    border-radius: 6px;
    border: 1px solid #CDD4E0;
    padding: 8px;
    gap: 16px;
}

.profileimgbox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 124px;
    width: 124px; 
    padding: 8px 7px;
    flex-shrink: 0;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.10);
    overflow: hidden; 
    position: relative;
}

.profileimg {
   border-radius: 6px;
    object-fit: contain;
}

.profileNameBox{
     padding-top:30px;
     
    }

.profileName {
   color: #3A57B9;

font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 26px; /* 130% */
  }

.pswBox{
    display: inline-flex;
    padding:0px 12px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid var(--Secondry--Link-color, #0083DB);
    margin-top:10px
}

.psw{
    color: var(--Secondry--Link-color, #0083DB);
    font-family: la-solid-900;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
   
}
  .userinfo {
    border-radius: 6px;
    border: 1px solid var(--Box-Border, #CDD4E0);
  }
  
    p {
      font-size: 0.8rem;
      font-weight: 700;
      margin: 0;
      display: inline;
      padding: 0;
    }
    .table > :not(caption) > * > * {
      padding:0.15rem
    }
  

  .table {
    border-color: var(--formBorderColor);
  }

  
`
