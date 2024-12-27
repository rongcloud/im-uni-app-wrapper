/**
 * 检查参数是否为字符串
 * 只做类型检查，不做长度检查，故当字符串长度为 0，结果依然为 true
 * @param value
 */
export const isString = (value) => typeof value === 'string';
/**
 * 检测参数是否为布尔值
 * @param value
 */
export const isBoolean = (value) => typeof value === 'boolean';
/**
 * 检查参数是否为 number 数据
 * @param value
 */
export const isNumber = (value) => typeof value === 'number' && !Number.isNaN(value);
/**
 * 检查参数是否为数组
 * 只做类型检查，不做长度检查
 * 如 UnitArray、BufferArray 等也属于数组
 * @param arr
 */
export const isArray = (arr) => Object.prototype.toString.call(arr).indexOf('Array') !== -1;
/**
 * 检查参数是否为 ArrayBuffer
 * @param arr
 */
export const isArrayBuffer = (arr) => Object.prototype.toString.call(arr) === '[object ArrayBuffer]';
/**
 * 检查参数是否为长度非 0 的字符串
 * @param str
 */
export const notEmptyString = (str) => isString(str) && str.length > 0;
/**
 * 检查参数是否为长度非 0 的数组
 * @param str
 */
export const notEmptyArray = (arr) => isArray(arr) && arr.length > 0;
/**
 * 检查参数是否为对象
 * @param val
 */
export const isObject = (val) => Object.prototype.toString.call(val) === '[object Object]';
/**
 * 检查参数是否为函数
 * @param val
 */
export const isFunction = (val) => Object.prototype.toString.call(val) === '[object Function]';
/**
 * 检查参数是否为undefined
 * @param val
 */
// IE 下 undefined 为 Object
export const isUndefined = (val) => val === undefined
    || Object.prototype.toString.call(val) === '[object Undefined]';
/**
 * 检查参数是否为 null
*/
export const isNull = (val) => Object.prototype.toString.call(val) === '[object Null]';
/**
 * 检查对象不为空
 * @param val
*/
export const notEmptyObject = (val) => {
    for (let key in val) {
        if (Object.prototype.hasOwnProperty.call(val, key)) {
            return true;
        }
    }
    return false;
};
export const isValidChannelId = (value) => {
    let flag = false;
    if (isString(value) && !(/_/g.test(value)) && value.length <= 20) {
        flag = true;
    }
    return flag;
};
export const isNumberArray = (value) => {
    let flag = false;
    if (notEmptyArray(value)) {
        flag = value.every((item) => isNumber(item));
    }
    return flag;
};
