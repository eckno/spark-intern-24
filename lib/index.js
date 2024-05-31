exports.isEmpty = (data = null) => {
    let rtn = false;
    if (this.isString(data) && (data === "" || data.trim() === "")) rtn = true;
    else if (this.isNumber(data) && data === 0) rtn = true;
    else if (this.isBoolean(data) && data === false) rtn = true;
    else if (this.isObject(data) && Object.values(data).length === 0) rtn = true;
    else if (this.isArray(data) && data.length === 0) rtn = true;
    else if (this.isUndefined(data)) rtn = true;
    else if (this.isNull(data)) rtn = true;

    return rtn;
}