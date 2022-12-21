import React from 'react';
import { TouchableOpacity, Image,SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';


const DATA = [
  {
    "name": "App Store",
    mb: "1012 MB",
    used: "Used moments ago",
    button: "OPEN",
    img:"https://logos-world.net/wp-content/uploads/2021/02/App-Store-Logo-700x394.png"
  },
  {
    "name": "Google",
    mb: "101 MB",
    used: "Used moments ago",
    button: "OPEN",
    img:"https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"

  },
  {
    "name": "Facebook",
    mb: "101 MB",
    used: 'Used 3 minutes ago',
    button: "OPEN",
    img : 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png'
  },
  {
    "name": "Tik-Tok",
    "mb": "101 MB",
    "used": "Used moments ago",
    "button": "UPDATE",
    img : 'https://www.edigitalagency.com.au/wp-content/uploads/TikTok-icon-glyph.png'
  },
  {
    "name": "Youtube",
    "mb": "101 MB",
    "used": "Used moments ago",
    "button": "OPEN",
    img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/318px-YouTube_full-color_icon_%282017%29.svg.png?20211015074811'
  },
  {
    "name": "Instagram",
    "mb": "101 MB",
    "used": "Used moments ago",
    "button": "OPEN",
    img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png'
  },
  {
    "name": "App Store",
    mb: "1012 MB",
    used: "Used moments ago",
    button: "OPEN",
    img:"https://logos-world.net/wp-content/uploads/2021/02/App-Store-Logo-700x394.png"
  },
  {
    "name": "Google",
    mb: "101 MB",
    used: "Used moments ago",
    button: "OPEN",
    img:"https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"

  },
  {
    "name": "Facebook",
    mb: "101 MB",
    used: 'Used 3 minutes ago',
    button: "OPEN",
    img : 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png'
  },
  {
    "name": "Tik-Tok",
    "mb": "101 MB",
    "used": "Used moments ago",
    "button": "UPDATE",
    img : 'https://www.edigitalagency.com.au/wp-content/uploads/TikTok-icon-glyph.png'
  },
  {
    "name": "Youtube",
    "mb": "101 MB",
    "used": "Used moments ago",
    "button": "OPEN",
    img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/318px-YouTube_full-color_icon_%282017%29.svg.png?20211015074811'
  },
  {
    "name": "Instagram",
    "mb": "101 MB",
    "used": "Used moments ago",
    "button": "OPEN",
    img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png'
  },
  {
    "name": "App Store",
    mb: "1012 MB",
    used: "Used moments ago",
    button: "OPEN",
    img:"https://logos-world.net/wp-content/uploads/2021/02/App-Store-Logo-700x394.png"
  },
  {
    "name": "Google",
    mb: "101 MB",
    used: "Used moments ago",
    button: "OPEN",
    img:"https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"

  },
  {
    "name": "Facebook",
    mb: "101 MB",
    used: 'Used 3 minutes ago',
    button: "OPEN",
    img : 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png'
  },
  {
    "name": "Tik-Tok",
    "mb": "101 MB",
    "used": "Used moments ago",
    "button": "UPDATE",
    img : 'https://www.edigitalagency.com.au/wp-content/uploads/TikTok-icon-glyph.png'
  },
  {
    "name": "Youtube",
    "mb": "101 MB",
    "used": "Used moments ago",
    "button": "OPEN",
    img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/318px-YouTube_full-color_icon_%282017%29.svg.png?20211015074811'
  },
  {
    "name": "Instagram",
    "mb": "101 MB",
    "used": "Used moments ago",
    "button": "OPEN",
    img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png'
  },
  {
    "name": "App Store",
    mb: "1012 MB",
    used: "Used moments ago",
    button: "OPEN",
    img:"https://logos-world.net/wp-content/uploads/2021/02/App-Store-Logo-700x394.png"
  },
  {
    "name": "Google",
    mb: "101 MB",
    used: "Used moments ago",
    button: "OPEN",
    img:"https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"

  },
  {
    "name": "Facebook",
    mb: "101 MB",
    used: 'Used 3 minutes ago',
    button: "OPEN",
    img : 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png'
  },
  {
    "name": "Tik-Tok",
    "mb": "101 MB",
    "used": "Used moments ago",
    "button": "UPDATE",
    img : 'https://www.edigitalagency.com.au/wp-content/uploads/TikTok-icon-glyph.png'
  },
  {
    "name": "Youtube",
    "mb": "101 MB",
    "used": "Used moments ago",
    "button": "OPEN",
    img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/318px-YouTube_full-color_icon_%282017%29.svg.png?20211015074811'
  },
  {
    "name": "Instagram",
    "mb": "101 MB",
    "used": "Used moments ago",
    "button": "OPEN",
    img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png'
  },
  {
    "name": "App Store",
    mb: "1012 MB",
    used: "Used moments ago",
    button: "OPEN",
    img:"https://logos-world.net/wp-content/uploads/2021/02/App-Store-Logo-700x394.png"
  },
  {
    "name": "Google",
    mb: "101 MB",
    used: "Used moments ago",
    button: "OPEN",
    img:"https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"

  },
  {
    "name": "Facebook",
    mb: "101 MB",
    used: 'Used 3 minutes ago',
    button: "OPEN",
    img : 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png'
  },
  {
    "name": "Tik-Tok",
    "mb": "101 MB",
    "used": "Used moments ago",
    "button": "UPDATE",
    img : 'https://www.edigitalagency.com.au/wp-content/uploads/TikTok-icon-glyph.png'
  },
  {
    "name": "Youtube",
    "mb": "101 MB",
    "used": "Used moments ago",
    "button": "OPEN",
    img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/318px-YouTube_full-color_icon_%282017%29.svg.png?20211015074811'
  },
  {
    "name": "Instagram",
    "mb": "101 MB",
    "used": "Used moments ago",
    "button": "OPEN",
    img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png'
  },
  {
    "name": "App Store",
    mb: "1012 MB",
    used: "Used moments ago",
    button: "OPEN",
    img:"https://logos-world.net/wp-content/uploads/2021/02/App-Store-Logo-700x394.png"
  },
  {
    "name": "Google",
    mb: "101 MB",
    used: "Used moments ago",
    button: "OPEN",
    img:"https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"

  },
  {
    "name": "Facebook",
    mb: "101 MB",
    used: 'Used 3 minutes ago',
    button: "OPEN",
    img : 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png'
  },
  {
    "name": "Tik-Tok",
    "mb": "101 MB",
    "used": "Used moments ago",
    "button": "UPDATE",
    img : 'https://www.edigitalagency.com.au/wp-content/uploads/TikTok-icon-glyph.png'
  },
  {
    "name": "Youtube",
    "mb": "101 MB",
    "used": "Used moments ago",
    "button": "OPEN",
    img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/318px-YouTube_full-color_icon_%282017%29.svg.png?20211015074811'
  },
  {
    "name": "Instagram",
    "mb": "101 MB",
    "used": "Used moments ago",
    "button": "OPEN",
    img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png'
  },
  
  ]


const App = () => {


  const Item = ({ name,mb,used,button,img }) => (
    <View style={styles.item}>
      
      <View style={{flexDirection : "row"}}>
      <Image style={styles.logo} source = {{
          uri: img,
        }} />
      <View style={{marginLeft : 10}} >
      <Text style={styles.name}>{name}</Text>
      <View style = {{flexDirection : "row"}}>
        <Text style={styles.mb}>{mb}</Text>
      <Text style={styles.used}>{used}</Text>
      </View>
      </View>
      </View>
      <TouchableOpacity style={styles.Touch} onPress={() => alert(`${name} salam`)}>
      <Text style = {button == "UPDATE" ? {color: "green",fontWeight:"bold"} : {color : "#71c572"}}>{button}</Text>
      </TouchableOpacity>
      
    </View>
  );
  const headerText = "On this device(131)"
  return (
    <View style={styles.container}>
      <FlatList
      ListHeaderComponent={<View style ={{justifyContent:"space-between",padding:10,flexDirection:"row"}}>
        <View>
        <Text style={{marginLeft:10 ,fontWeight:"bold"}}>{headerText}</Text>
        </View>
        <View style={{flexDirection : "row"}}>
        <Text>Last Used</Text>
        <Image source={ require("./assets/menu.png")} style={{height:20,width:20, marginLeft:10}}/>
        </View>
        </View>}
        data={DATA}
        renderItem={({ item }) => (
          <Item img ={item.img} name={`${item?.name}`} mb={` ${item.mb}`} used={`•${item.used}`} button={`${item.button}` } />
        )}
       
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    color : 'white',
    padding: 0,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 18,
    flexDirection : "row",
    justifyContent : "space-between"
  },
  logo: {
    height : 35,
    width : 35,
    borderRadius: 8,
    flexDirection : "row",
    justifyContent : "space-between"
  },
  name: {
    fontSize: 14,
    fontWeight : "bold",
    backgroundColor :"white",

  },
  mb: {
    fontSize: 10,
    backgroundColor :"white",

  },
  used: {
    fontSize: 10,
    backgroundColor :"white",

  },
  button: {
    fontSize: 10,
    backgroundColor :"white",

  },
  Touch: {
    alignItems : "center",
    justifyContent : 'center',
    height :35,
    width : 70,
    borderWidth : 1,
    borderColor :"#71c572",
    

  }
});

export default App;