const emailCheck = (email) => {
    return /(([^<>()\\\.,;:\@"]+(\[^<>()\\\.,;:\@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/.test(email);
}

export const validators = {
    name: (value) => {
        return value && value.length > 3;
    },
    email: (value) => {
        return value && emailCheck(value);
    },
    phone: (value) => value && value.length > 5,
    amount: value => value && value >=3000
};