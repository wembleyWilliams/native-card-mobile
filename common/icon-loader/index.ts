import {useSelector} from "react-redux";
import {State} from "../../redux/reducers";
import {Icon} from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import {Avatar} from "react-native-paper";
import {View} from "react-native";


const iconLoader = (url: string) => {
    if (url.search('twitter') > -1) {
        return require('../../assets/icons/Twitter.png')
    }
     else if (url.search('instagram') > -1) {
        return require('../../assets/icons/Instagram.png')
    }
    return null
}

export default iconLoader