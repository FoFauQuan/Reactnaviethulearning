import React,{useState} from "react";
import { Text,Image, View,Button, StyleSheet, TextInput,ImageBackground, Alert, Switch, TouchableHighlight } from "react-native";

const App=() => {
    const [email,setEmail] = useState("");
    const [password,setPass] = useState("");
    
    const onPress =()=>
    {
        Alert.alert(`Dang nhap thanh cong voi user name = ${email} va password = ${password}`)
    }
    return(
        <View style ={{
            flex:1,
        }
        }>                
        <ImageBackground
        style = {styles.imageback}
        resizeMode="cover"
        source={{
            uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGbeiGIaWOrvaJmISB3vK9SZpiHAyz2Z7USBKwpevULA&s'
        }}
        >
            <View style={{
                width:'auto',
                flex:1,
                padding:15,
                alignContent:"center",
                justifyContent:"center"
            }}  
            >
                <Text style = {styles.banner}>
                vuongvotrungquan_2024802010331
                </Text>
                <Image
                style = {styles.image}
                resizeMode="cover"
                source={{
                    uri:'https://2.bp.blogspot.com/-KvCR1Ehp4p0/U3G27t2p-DI/AAAAAAAAd0I/xEwSPdr6t7Q/s1600/1.png'
                }}
                />
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style = {styles.textre}>
                            Register
                        </Text>
                    </View>
                <TextInput
                style = {styles.input}
                onChangeText={setEmail}
                placeholder="Nhap user name"
                value={email}
                />

                <TextInput
                style = {styles.input}
                onChangeText={setPass}
                placeholder="Nhap mat khau"
                secureTextEntry
                keyboardType="numeric"
                value={password}
                />
                <TouchableHighlight
                    style = {styles.button}
                    onPress={onPress}
                >
                    <Text style ={styles.textbuton}>
                        Login
                    </Text>
                </TouchableHighlight>
            </View>
    
        </ImageBackground>
        </View>
    )
}
export default App;

const styles = StyleSheet.create({
    input: {
      height: 50,
      padding: 10,
      backgroundColor: '#17C9F9',
      opacity: 0.5
    },
    button: {
        padding: 10,
        backgroundColor:'pink',
        alignItems:"center",
    },
    image:{
        height: 155,
        margin: 12,
    },
    textbuton:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'white'
    },
    textre:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'black'
    },
    imageback:{
        height:'auto',
        width:'auto',
        flex:1
    },
    banner:{
        
    }
});