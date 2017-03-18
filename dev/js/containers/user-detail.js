import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserDetail extends Component{
createListItems(){
  return this.props.usersdetail.map((userdetail) => {
    return(
      <li key={userdetail.id}>{userdetail.detail}</li>
    );
  });
}
  render(){
    return(
      <ul>
    {this.createListItems()}
      </ul>
    );
  }
}

function mapStateToProps(state){
return{
  usersdetail : state.usersdetail
};
}

export default connect(mapStateToProps)(UserDetail);
