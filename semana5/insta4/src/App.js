import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

const NovoPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`

class App extends React.Component {
  state = {
    posts: [{
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50?random=1',
      fotoPost: 'https://picsum.photos/50/50?random=2'
    },
    {
      nomeUsuario: '_labenu',
      fotoUsuario: 'https://picsum.photos/50/50?random=3',
      fotoPost: 'https://picsum.photos/50/50?random=4'
    },
    {
      nomeUsuario: 'wcardosos_',
      fotoUsuario: 'https://picsum.photos/50/50?random=5',
      fotoPost: 'https://picsum.photos/50/50?random=6'
    }
  ]
  }

  render() {
    const listaDePosts = this.state.posts.map( post => {
      return <Post
               nomeUsuario={post.nomeUsuario}
               fotoUsuario={post.fotoUsuario}
               fotoPost={post.fotoPost}
             />
    });

    return (
      <div className={'app-container'}>
        {listaDePosts}
      </div>
    );
  }
}

export default App;
