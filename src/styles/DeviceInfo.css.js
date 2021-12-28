import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText:{
        color:'black'
    },
    input:{
        padding:5,
        // backgroundColor:"yellow",
        margin:5,
        width:"70%",
        borderRadius:10,
        borderColor:'black',
        borderWidth:0.5,
        elevation: 0.2
    },
    button:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:"#a0d699"

    },
    info:{
        width:'100%',
        borderRadius:10,
        marginTop:5,
        padding:5,
        flexDirection:'row-reverse',
        backgroundColor:'#c6e6c2',

    },
    infoField:{
        width:'50%',
        color:'black',
        fontSize:11,
        textAlign:'center',
        fontFamily: 'BYekan',
    },

    infoList:{
        width:'100%',

    },
    captcha:{
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    header:{
        color:'black',
        justifyContent:'flex-end',
        
        width:'100%'
    }
});
