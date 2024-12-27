import { isNumber, isNumberArray, isObject, isString, isUndefined, notEmptyArray, notEmptyString, } from './validator';
/**
 * 预定义的验证规则，只包含`值类型`数据验证
 * 引用类型数据需使用自定义 validator 校验函数进行校验
 */
export var AssertRules;
(function (AssertRules) {
    /**
     * 类型为字符串，且长度大于 0
     */
    AssertRules[AssertRules["STRING"] = 0] = "STRING";
    /**
     * 类型仅为 String
     */
    AssertRules[AssertRules["ONLY_STRING"] = 1] = "ONLY_STRING";
    /**
     * 类型为数字
     */
    AssertRules[AssertRules["NUMBER"] = 2] = "NUMBER";
    /**
     * 类型为布尔值
     */
    AssertRules[AssertRules["BOOLEAN"] = 3] = "BOOLEAN";
    /**
     * 类型为对象
     */
    AssertRules[AssertRules["OBJECT"] = 4] = "OBJECT";
    /**
     * 类型为数组
     */
    AssertRules[AssertRules["ARRAY"] = 5] = "ARRAY";
    /**
     * 类型为 callback 回调对象，包含 callback.onSuccess、callback.onError
     */
    // CALLBACK,
    // /**
    //  * ChannelId 验证，必须为 String 且不超过 20 位 且不能包含下划线
    //  */
    // CHANNEL_ID,
    /**
      类型为数组，数组中为 number 类型
     */
    AssertRules[AssertRules["NUMBER_ARRAY"] = 6] = "NUMBER_ARRAY";
})(AssertRules || (AssertRules = {}));
const RulesDesc = {
    [AssertRules.STRING]: 'type is String and length > 0',
    [AssertRules.ONLY_STRING]: 'type is string',
    [AssertRules.NUMBER]: 'type is number',
    [AssertRules.BOOLEAN]: 'type is Boolean',
    [AssertRules.OBJECT]: 'type is Object',
    [AssertRules.ARRAY]: 'type is Array',
    [AssertRules.NUMBER_ARRAY]: 'type is Array and item is Number',
};
const validators = {
    [AssertRules.STRING]: notEmptyString,
    [AssertRules.ONLY_STRING]: isString,
    [AssertRules.NUMBER]: isNumber,
    [AssertRules.BOOLEAN]: (value) => typeof value === 'boolean',
    [AssertRules.OBJECT]: isObject,
    [AssertRules.ARRAY]: notEmptyArray,
    [AssertRules.NUMBER_ARRAY]: isNumberArray,
};
export class RCAssertError extends Error {
    constructor(message) {
        super(message);
        this.name = 'RCAssertError';
    }
}
/**
 * 参数校验，该方法用于对业务层入参数据检查，及时抛出异常通知业务层进行修改
 * @deprecated 优先使用 `validate` 替代，禁止直接 throw error 阻断调用栈
 * @description
 * 1. 必填参数，value 需符合 validator 验证规，否则抛出异常
 * 2. 非必填参数，value 可为 undefined | null 或符合 validator 规则
 * @param key 字段名，仅用于验证失败时给出提示信息
 * @param value 待验证的值
 * @param validator 期望类型或校验规则函数，若使用规则函数
 * @param required 是否为必填参数，默认为 `false`
 */
export const assert = (key, value, validator, required = false) => {
    if (!validate(key, value, validator, required)) {
        throw new RCAssertError(`'${key}' is invalid: ${JSON.stringify(value)}`);
    }
};
/**
 * 参数校验，该方法用于对业务层入参数据检查，与 `assert` 函数不同的是其返回 boolean 值而非直接抛出异常
 * @description
 * 1. 必填参数，value 需符合 validator 验证规，否则抛出异常
 * 2. 非必填参数，value 可为 undefined | null 或符合 validator 规则
 * @param key 字段名，仅用于验证失败时给出提示信息
 * @param value 待验证的值
 * @param validator 期望类型或校验规则函数，若使用规则函数
 * @param required 是否为必填参数，默认为 `false`
 */
export const validate = (key, value, validator, required = false) => {
    let validatorFunc = validators[validator] || validator;
    const isValid = required ? validatorFunc(value) : (isUndefined(value) || value == null || validatorFunc(value));
    if (!isValid) {
        // 打印无效参数到控制台便于定位问题
        // eslint-disable-next-line no-console
        console?.error(`'${key}' is invalid: ${JSON.stringify(value)}, the supported ${RulesDesc[validator]}`);
    }
    return isValid;
};
