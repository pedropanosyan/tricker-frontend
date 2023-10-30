import {COLORS} from "./theme";
import PlayIcon from "../assets/icons/Timer/PlayIcon";
import CompletedIcon from "../assets/icons/ticket/Completed";

export const STATUS = {
    REVIEW: 'Review',
    IN_PROGRESS: 'In progress',
    COMPLETED: 'Completed',
    TODO: 'To do'
}

export const STATUS_COLORS = {
    [STATUS.REVIEW]: COLORS.lightViolet,
    [STATUS.IN_PROGRESS]: COLORS.orange,
    [STATUS.COMPLETED]: COLORS.lightBlue,
    [STATUS.TODO]: COLORS.white
}

export const STATUS_ICONS = {
    [STATUS.REVIEW]: <PlayIcon  color={COLORS.black}/>,
    [STATUS.IN_PROGRESS]: <PlayIcon color={COLORS.black} />,
    [STATUS.COMPLETED]: <CompletedIcon color={COLORS.black} />,
    [STATUS.TODO]: <PlayIcon color={COLORS.black}/>
}

