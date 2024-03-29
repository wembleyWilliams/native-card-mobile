import {useSelector} from "react-redux";
import {State} from "../../redux/reducers";
import {Avatar} from "react-native-paper";
import {View} from "react-native";


const iconLoader = (url: string) => {
    if (url.search('twitter') > -1) {
        return require('../../assets/icons/Twitter.png')
    }
     else if (url.search('instagram') > -1) {
        return require('../../assets/icons/Instagram.png')
    }
     else if (url.search('facebook') > -1) {
         return require('../../assets/icons/Facebook.png')
    }
    return require('../../assets/icons/Facebook.png')
}

export default iconLoader