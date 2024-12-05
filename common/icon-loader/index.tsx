import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons';

const iconLoader = (platform: string) => {
    if(!platform) {
        return
    } else {
        const lowerCasePlatformName = platform.toLowerCase();

        switch (lowerCasePlatformName) {
            case 'twitter':
                return <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
            case 'x':
                return <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
            case 'instagram':
                return <FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/>;
            case 'facebook':
                return <FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/>;
            case 'linkedin':
                return <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/>;
            case 'youtube':
                return <FontAwesomeIcon icon={['fab', 'youtube']} size="2x"/>;
            case 'tiktok':
                return <FontAwesomeIcon icon={['fab', 'tiktok']} size="2x"/>;
            case 'snapchat':
                return <FontAwesomeIcon icon={['fab', 'snapchat']} size="2x"/>;
            case 'pinterest':
                return <FontAwesomeIcon icon={['fab', 'pinterest']} size="2x"/>;
            case 'whatsapp':
                return <FontAwesomeIcon icon={['fab', 'whatsapp']} size="2x"/>;
            case 'telegram':
                return <FontAwesomeIcon icon={['fab', 'telegram']} size="2x"/>;
            case 'discord':
                return <FontAwesomeIcon icon={['fab', 'discord']} size="2x"/>;
            case 'reddit':
                return <FontAwesomeIcon icon={['fab', 'reddit']} size="2x"/>;
            case 'tumblr':
                return <FontAwesomeIcon icon={['fab', 'tumblr']} size="2x"/>;
            case 'github':
                return <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>;
            case 'dribbble':
                return <FontAwesomeIcon icon={['fab', 'dribbble']} size="2x"/>;
            case 'behance':
                return <FontAwesomeIcon icon={['fab', 'behance']} size="2x"/>;
            case 'medium':
                return <FontAwesomeIcon icon={['fab', 'medium']} size="2x"/>;
            case 'twitch':
                return <FontAwesomeIcon icon={['fab', 'twitch']} size="2x"/>;
            case 'vimeo':
                return <FontAwesomeIcon icon={['fab', 'vimeo']} size="2x"/>;
            case 'mastodon':
                return <FontAwesomeIcon icon={['fab', 'mastodon']} size="2x"/>;
            case 'threads':
                return <FontAwesomeIcon icon={['fab', 'threads']} size="2x"/>;
            case 'wechat':
                // @ts-ignore
                return <FontAwesomeIcon icon={['fab', 'wechat']} size="2x"/>;
            default:
                return <FontAwesomeIcon icon={faQuestionCircle} size="2x"/>; // A default icon in case the platform is not recognized
        }
    }

};

export default iconLoader;
