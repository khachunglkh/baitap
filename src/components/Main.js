import React,{ Component } from 'react';
import { View, Text, FlatList,StyleSheet,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Word from './Word';
import Filter from './Filter';
import Header from './Header';
import Form from './Form';

class Main extends Component{
  getWordList(){
    const { myFilter, myWords } = this.props;
    if (myFilter === 'MEMORIZED') return myWords.filter(e => e.memorized);
    if (myFilter === 'NEED_PRACTICE') return myWords.filter(e => !e.memorized);
    return myWords;
  }
  render(){
    const { myIsAdding }= this.props;
    return(
        <View style={{backgroundColor: 'white',flex: 1,justifyContent: 'center'}}>
            <Header />
            <View style={{flex: 10}}>
              {myIsAdding ? <Form /> : null}
              <FlatList
                  data={this.getWordList()}
                  renderItem={({ item })=> <Word myWord={item} />}
                  keyExtractor={item => item.id.toString()}
              />
          </View>
            <Filter />
        </View>
    );
  }
}

function mapStateToProps(state){
  return {
    myFilter: state.filterStatus,
    myWords: state.arrWord,
    myIsAdding:  state.isAdding
  };
}
export default connect(mapStateToProps)(Main);
