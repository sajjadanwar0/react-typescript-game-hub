import {Platform} from "../hooks/useGames.ts";
import {HStack, Icon} from "@chakra-ui/react";
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux} from 'react-icons/fa'
import {MdPhoneIphone} from "react-icons/md";
import {BsGlobe} from "react-icons/bs";
import {SiNintendo} from "react-icons/si";
import {IconType} from "react-icons";


interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({platforms}: Props) => {

    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,

    }

    return (
        <HStack marginY={1}>
            {platforms.map(platform => <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500"/>)}

        </HStack>
    )
}

export default PlatformIconList