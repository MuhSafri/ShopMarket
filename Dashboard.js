import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { NavigationActions } from 'react-navigation';


// bikin function list supaya tinggal dipanggil
function List({ title, harga, img }) {
  return (
    <View style={styles.item}>
      <Image style={styles.thumb}  source={img} />
      <Text style={styles.jdul}>{title}</Text>
      <Text style={styles.harga}>{harga}</Text>
      <TouchableOpacity>
      <Image
          style={styles.iconcart}
          source={require('asset/icon/shopping-cart.png')}
        />
       </TouchableOpacity>
      
    </View>
  );
}



export default class App extends React.Component {
//untuk list barang
constructor(props) {
  super(props);
  this.state = {
    //nama state untuk datanya marketlist supaya nanti tinggal dipanggil di list bawah
    marketlist: [
      {
        img: require('asset/img/gitar/1.jpg'),//code gambar yang udah ada di local
        nama: 'GITAR YAMAHA ',
        harga: 'Rp 1.500.000'
      },
      {
        img: require('asset/img/gitar/2.jpg'),
        nama: 'GITAR IBANEZ ',
        harga: '$4.750.000'
      },
      {
        img: require('asset/img/gitar/3.jpg'),
        nama: 'GITAR YAMAHA ',
        harga: '$2.500.000'
      },
      {
        img: require('asset/img/gitar/4.jpg'),
        nama: 'GITAR IBANEZ ',
        harga: '$3.000.000'
      },
      {
        img: require('asset/img/gitar/5.jpg'),
        nama: 'GITAR YAMAHA ',
        harga: '$5.000.000'
      },
      
      
    ]
  };
}
    //function logout untuk kembali ke utama
  logout = () => {
    console.log(this.props);
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
   
        <View style={styles.header}>

        
      
          <Text style={styles.headerText}>JoinShop</Text>
           
          
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Favorit')}>
            <Image 
              style={styles.headerImage}
              source={require('asset/icon/shopping-cart.png')}
            />
            </TouchableOpacity>
            
            
            
          </View>
        </View>
      
        <View style={styles.srchbar}>
        <TextInput 
            placeholder="Cari Barang..." 
            style={styles.input}  />  

       </View>
       
          <FlatList
            data={this.state.marketlist}//sumber datanya
            //kode untuk render data sesuaikan dengan nama kumpulannya
            renderItem={obj => (
              <List img={obj.item.img} title={obj.item.nama} harga={obj.item.harga}  />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
       
        <Button
          title="LOGOUT"
          style={styles.btLogout}
          onPress={() => this.logout()}//nyambung ke function logout diatas
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#4cd137',
  },

  iconcart:{
    height: 25,
    width: 25, 
  },
   headerImage:{
    height: 25,
    width: 25, 
  },
  

  header: {
    backgroundColor: '#fbc531',
    flexDirection:'row',
    alignItems: 'center',
    padding: 15,
    justifyContent:'space-between',
    paddingLeft:10,
    paddingRight:10,
    height: 50,
    
  },
  headerText:{
    fontFamily: '',
    paddingTop: 5,
    paddingLeft:5,
  fontSize: 15,
   
  fontWeight: 'BOLD'
  },

  item: {
    flex: 1,
    backgroundColor: '#c7ecee',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
 jdul: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'bold',
    textAlign: 'center',
  },
  harga: {
    fontSize: 12,
  },

  thumb: {
    width: 100,
    height: 100,
  },

  btLogout: {
    flex: 1,
  },
  input: {
    alignSelf:'strecth',
    padding:10,
    borderRadius:5, 
    borderColor:'#44bd32',
    marginBottom:20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
      },
});
