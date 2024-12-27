/**
 * 检查参数是否为字符串
 * 只做类型检查，不做长度检查，故当字符串长度为 0，结果依然为 true
 * @param value
 */
export declare const isString: (value: unknown) => boolean;
/**
 * 检测参数是否为布尔值
 * @param value
 */
export declare const isBoolean: (value: unknown) => boolean;
/**
 * 检查参数是否为 number 数据
 * @param value
 */
export declare const isNumber: (value: unknown) => boolean;
/**
 * 检查参数是否为数组
 * 只做类型检查，不做长度检查
 * 如 UnitArray、BufferArray 等也属于数组
 * @param arr
 */
export declare const isArray: (arr: unknown) => boolean;
/**
 * 检查参数是否为 ArrayBuffer
 * @param arr
 */
export declare const isArrayBuffer: (arr: unknown) => boolean;
/**
 * 检查参数是否为长度非 0 的字符串
 * @param str
 */
export declare const notEmptyString: (str: string) => boolean;
/**
 * 检查参数是否为长度非 0 的数组
 * @param str
 */
export declare const notEmptyArray: (arr: any[]) => boolean;
/**
 * 检查参数是否为对象
 * @param val
 */
export declare const isObject: (val: any) => boolean;
/**
 * 检查参数是否为函数
 * @param val
 */
export declare const isFunction: (val: any) => boolean;
/**
 * 检查参数是否为undefined
 * @param val
 */
export declare const isUndefined: (val: any) => boolean;
/**
 * 检查参数是否为 null
*/
export declare const isNull: (val: any) => boolean;
/**
 * 检查对象不为空
 * @param val
*/
export declare const notEmptyObject: (val: Object) => boolean;
export declare const isValidChannelId: (value: any) => boolean;
export declare const isNumberArray: (value: any) => boolean;
