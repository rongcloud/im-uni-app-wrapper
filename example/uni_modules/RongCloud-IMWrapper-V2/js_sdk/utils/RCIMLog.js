import { RCIMIWLogLevel } from "../RCIMDefines";
let logLevel = RCIMIWLogLevel.info;
export function log(level, msg) {
    if (level <= logLevel) {
        let logStr = `${getLogLevelFlag(level)}/[RC:UniLog][IM]: ${msg}`;
        switch (level) {
            case RCIMIWLogLevel.error:
                console.error(logStr);
                break;
            case RCIMIWLogLevel.warn:
                console.warn(logStr);
                break;
            case RCIMIWLogLevel.info:
                console.info(logStr);
                break;
            case RCIMIWLogLevel.debug:
                console.debug(logStr);
                break;
            default:
                console.log(logStr);
                break;
        }
    }
}
export function setLogLevel(level) {
    logLevel = level;
}
function getLogLevelFlag(level) {
    switch (level) {
        case RCIMIWLogLevel.error:
            return 'E';
        case RCIMIWLogLevel.warn:
            return 'W';
        case RCIMIWLogLevel.debug:
            return 'D';
        default:
            return 'I';
    }
}
