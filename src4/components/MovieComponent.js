import React, {Component} from 'react';
import { Text, View, Image, Alert, TextInput, TouchableOpacity, FlatList } from 'react-native';
import FlatListItem from './FlatListItem';
export default class MovieComponent extends Component {
  constructor(props){
    super(props);
    this.state={ movieName: '',releaseYear:''};
  }

  render(){
    return (
      <View style={{ flex: 1, marginTop: 34}}>
        <Text style= {{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20}}>
          Redux Saga tutorials - Movies list
        </Text>
        <Text style={{ margin: 10, color: 'black',fontSize: 20 }}>
          New movie information
        </Text>
        <View style={{ height: 100, margin: 10 }}>
          <TextInput style={{ flex:1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => this.setState({ movieName: text})}
            value= { this.state.movieName }
            placeholder='Enter new movie name'
          />
          <TextInput style={{ flex:1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => this.setState({ releaseYear: text})}
            value= { this.state.releaseYear }
            placeholder='Release year'
          />
        </View>
        <View style={{height: 70, flexDirection: 'row'}}>
          <TouchableOpacity style={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
            onPress={()=>{
              this.props.onFetchMovies('asc');
              console.log(this.props.movie)
            }}
          >
            <Text style= {{fontSize: 10, color: 'white'}}>
              Fetch Movies
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
            onPress={()=>{
              const {movieName, releaseYear} = this.state;
              if(!movieName.length || !releaseYear.length){
                alert('You must enter movie name and release Year');
                return;
              }
              this.props.onAddMovie({title: movieName,email: releaseYear })
            }}
          >
            <Text style= {{fontSize: 10, color: 'white'}}>
              Add Movie
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.props.movie}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({ item, index }) =><FlatListItem {...item} itemIndex={index} movieComponent={this}/>
          }
        />
      </View>
    );
  }
}
