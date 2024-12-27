/**
 * 预定义的验证规则，只包含`值类型`数据验证
 * 引用类型数据需使用自定义 validator 校验函数进行校验
 */
export declare enum AssertRules {
    /**
     * 类型为字符串，且长度大于 0
     */
    STRING = 0,
    /**
     * 类型仅为 String
     */
    ONLY_STRING = 1,
    /**
     * 类型为数字
     */
    NUMBER = 2,
    /**
     * 类型为布尔值
     */
    BOOLEAN = 3,
    /**
     * 类型为对象
     */
    OBJECT = 4,
    /**
     * 类型为数组
     */
    ARRAY = 5,
    /**
     * 类型为 callback 回调对象，包含 callback.onSuccess、callback.onError
     */
    /**
      类型为数组，数组中为 number 类型
     */
    NUMBER_ARRAY = 6
}
export declare class RCAssertError extends Error {
    constructor(message?: string);
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
export declare const assert: (key: string, value: any, validator: AssertRules | ((value: any) => boolean), required?: boolean) => void;
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
export declare const validate: (key: string, value: any, validator: AssertRules | ((value?: any) => boolean), required?: boolean) => boolean;
