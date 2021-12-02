// Return: response in Array format for the Frontend Table
export const getResponseArray = (res: any) => {
    let keys = Object.keys(res);
    let responseArray: any[] = [];
    keys.forEach(key => {
        responseArray.push(res[key]);
    });
    return responseArray;
}