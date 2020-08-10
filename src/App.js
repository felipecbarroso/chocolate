import React, {useState, useEffect} from 'react';
import GlobalStyle from './styles/global';
import { Container, ChocolateList } from './styles/style';
import chocoImg from './assets/images/chocolate.svg';
import api from './services/api';

function App() {

  const [infos, setInfos] = useState([]);

  useEffect(() =>{
    async function loadInfos(){
      const response = await api.get('/choco');
      setInfos(response.data);
      console.log(response);
      console.log(response.data);

    }
    loadInfos();
  }, []);

  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Container>
          <img src={chocoImg} alt='Logo barra de chocolate' />
          <h1>Chocolates</h1>
          <ChocolateList>
            {infos.map((info)=>(
                        <li key={info._id}>
                        <div>
                          <img src={info.imagem} alt='Logo barra de chocolate' />
                          <div>
                            <h2>{info.nome}</h2>

                          </div>
                        </div>
                      </li>
            ))}

          </ChocolateList>
        </Container>
      </>
    </div>
  );
}

export default App;
