import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <HeaderStyle>
        <h1>BOOKS</h1>
        <button>OPEN</button>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.div`
  width:100%;
  height:40px;
  background-color:bisque;

  button{
    border-radius:40px;
    background-color:blue;
    
  }
`
