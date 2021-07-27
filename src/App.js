// import logo from './logo.svg';
import React, { Component } from 'react';
import ReadContent from './components/ReadContent'; 
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import List from './components/List'; 
import Header from './components/Header'; 
import Control from './components/Control'; 
import './App.css';



class App extends Component {

  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'welcome',
      selected_content_id:1,
      subject:{title:'WEBAPP', sub:'시작합니다'},
      welcome:{title:'Welcome', desc:'Hello'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }

  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if(data.id === this.state.selected_content_id){
        return data;
      }
      i = i + 1;
    }
  }

  getContent() {
    var _title, _desc, _article = null;
    var _content = this.getReadContent();
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if(this.state.mode === 'read'){
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    } else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        // 콘텐츠에 해당 콘텐츠를 추가
        this.max_content_id = this.max_content_id + 1;
        var _contents = this.state.contents.concat(
          {id: this.max_content_id, title: _title, desc:_desc}
        );
        this.setState({
          contents:_contents
        });
      }.bind(this)}></CreateContent>;
    } else if(this.state.mode === 'update'){
      _article = <UpdateContent data={_content} onSubmit={function(_id,_title, _desc){
        var _newcontents = Array.from(this.state.contents);
        var i = 0;
        while(i < _newcontents.length){
          if(_newcontents[i].id === _id){
            _newcontents[i] = {id: _id, title: _title, desc:_desc};
            break;
          }
          i = i + 1;
        };
        this.setState({
          contents:_newcontents
        });
      }.bind(this)}></UpdateContent>;
    }
    return _article;
  }

  render() {
    return (
      <div className="App">
        <Header 
        title={this.state.subject.title}
        sub={this.state.subject.sub}
        onChangePage={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}
        >
        </Header>
        <List onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
        });
        }.bind(this)} data={this.state.contents}></List>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode: _mode,
        });
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    )
  }
}

export default App;
