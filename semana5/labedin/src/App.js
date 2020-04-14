import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import Header from './components/Header/Header';
import ImagemButton from './components/ImagemButton/ImagemButton';

import logoWVVY from './images/logo wvvy.svg';
import logoXoxo from './images/logo xoxo eco.png';
import iconeEmail from './images/mail.svg';
import iconeEndereco from './images/endereco.svg';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars3.githubusercontent.com/u/43157592?s=400&u=1b0dae19a44c48d471de350d8c324c250ec06b3b&v=4" 
          nome="Wagner Cardoso" 
          descricao="Desenvolvedor web full-stack em formação pela Labenu. Apaixonado por programação e todas suas complexidades, pela família, pelo rap e pelo São Paulo Futebol Clube."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={iconeEmail}
          nome={"Email:"}
          texto={"wagner@email.com"}
        />
        <CardPequeno
          imagem={iconeEndereco}
          nome={"Endereço:"}
          texto={"Cuitegi-PB"}
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante em formação." 
        />
        
        <CardGrande 
          imagem={logoWVVY} 
          nome="WVVY Representações" 
          descricao="CTO e sócio do pai na empresa de venda de carros recém-criada." 
        />

        <CardGrande
          imagem={logoXoxo}
          nome="Xoxo Eco"
          descricao="CTO e sócio da namorada na empresa de vendas de produtos ecológicos femininos."
        />
      </div>

      <div className="page-section-container">
        <h2>Tecnologias trabalhadas</h2>
        <CardGrande
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
          nome="JavaScript"
          descricao="Trabalhando a poucos meses, mas já apaixonado pela linguagem e seu poder. Conhecimentos básicos de ES6 e dos principais tópicos da linguagem."
        />
        <CardGrande 
          imagem="https://qph.fs.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc"
          nome="Python"
          descricao="Primeira linguagem de programação estudada, até hoje grande fã do que a linguagem pode fazer. Conhecimentos em automatização de tarefas e com planos de futuramente me arriscar em IA e Data Science."
        />
        <CardGrande
          imagem="https://miro.medium.com/max/1024/1*jkOCjQlkGZjbhWdvh7LfRA.png"
          nome="Java"
          descricao="Linguagem aprendida durante período que era estudante do curso de Ciência da Computação na Universidade Federal da Paraíba. Conhecimentos sólidos em programação orientada a objetos."
        />
        <CardGrande
          imagem="https://img.icons8.com/color/480/c-programming.png"
          nome="C"
          descricao="Linguagem trabalhada durante período que era estudante do curso de Engenharia da Computação na Universidade Federal da Paraíba. Competência em manipulação de memória."
        />
        <CardGrande 
          imagem="https://www.nicepng.com/png/detail/334-3349309_server-icon-3709-free-icons-and-png-backgrounds.png"
          nome="Desenvolvimento Web Back-end"
          descricao="Conhecimento básico do funcionamento de servidores, já tendo tido contato com NodeJS, Express, MongoDB e PostgreSQL."
        />
        <CardGrande
          imagem="data:image/jpeg;base64,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"
          nome="Desenvolvimento Web Front-end"
          descricao="Conhecimentos em HTML e CSS. Obtive grande aprofundamento no curso da Labenu e continuo estudando para melhoria na qualidade dos sites."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
