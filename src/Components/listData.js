import React,{ Component } from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import itemsData from '../Data/items';

class listData extends Component{

  constructor(props) {
    super(props);
    this.state = {
      items: itemsData,
    }
  }

  willFocus = this.props.navigation.addListener(
    'willFocus',
    payload => {
      this.setState({ items: itemsData })
    }
  );

  onListRender() {
    let search = this.props.search
    let sort = this.props.sort
    let filter = this.state.items.filter(item => item.title.toUpperCase().indexOf(search.toUpperCase()) >= 0)
    if(sort === 'asc') {
      filter = filter.slice().sort((a, b) => Date.parse(a.time) - Date.parse(b.time))
    }
    if(sort === 'desc') {
      filter = filter.slice().sort((a, b) => Date.parse(b.time) - Date.parse(a.time))
    }
    return filter
  }

  render(){
    return(
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.onListRender()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[styles.card,
                {backgroundColor:
                  (item.category == 'Learn')? '#2FC2DF' :
                  (item.category == 'Work')? '#C0EB6A' :
                  (item.category == 'Wishlist')? '#FAD06C' :
                  (item.category == 'Personal')? '#FF92A9' : 'green'
                }
              ]}
              onPress={() => this.props.navigation.navigate('EditNote', item)}>
              
              <View style={{ marginLeft:10 }}>
                <View style={styles.timeView}>
                  <Text style={styles.text} numberOfLines={1}>{moment(item.time).format('DD MMMM')}</Text>
                </View>
                <View style={styles.titleView}>
                  <Text style={[styles.text, {fontSize:20}]} numberOfLines={1}>{item.title}</Text>
                </View>
                <View style={styles.categoryView}>
                  <Text style={styles.text} numberOfLines={1}>{item.category}</Text>
                </View>
                <View style={styles.noteView}>
                  <Text style={styles.text} numberOfLines={6}>{item.note}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          numColumns={2}
          keyExtractor={(item,index) => index.toString()}
        >
        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 30,
    padding: 10,
    borderRadius: 5,
    height: 170,
    elevation: 5,
  },
  text: {
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  timeView: {
    alignItems: 'flex-end',
    width:'100%'
  },
  titleView: {
    width:'100%'
  },
  categoryView: {
    width:'100%'
  },
  noteView: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%'
  },
});

export default listData;