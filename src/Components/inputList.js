import React from 'react';
import styled from 'styled-components';

const Listitem = styled.div`
  display:flex;
  justify-conten:center;
  border-radius: 3px;
  border: 1px solid green;
  width:500px;
  margin: 5px;
  padding: 0.25em 1em;
`
const Buttonsarea = styled.div`
display:flex;
    height: 30px;
    margin: auto
`
const Changep = styled.p`
  width: 80%;
`

const Inputlist = ({deleted,changed, title , id}) => {
    return(
        <Listitem>
            <Changep>{title}</Changep>
            <Buttonsarea>
          <button onClick={()=>changed(id)}>Change</button>
          <button onClick={()=>deleted(id)}>Delete</button>
            </Buttonsarea>
        </Listitem>
    )
}



export default Inputlist;