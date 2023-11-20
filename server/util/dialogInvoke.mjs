import colors from 'colors';

const dialogType = {
    Success: 'success',
    Error: 'error',
    Warning: 'warning',
    Info: 'info',
    Question: 'question'
};

/**
 * dialogInvoke()
 * @description Invokes a status dialog box with a message.
 */
class HttpStatus {
    constructor() {
        colors.setTheme({
            [dialogType.Success]: ['green', 'bold'],
            [dialogType.Error]: ['red', 'bold'],
            [dialogType.Warning]: ['yellow', 'bold'],
            [dialogType.Info]: ['cyan', 'bold'],
            [dialogType.Question]: ['magenta', 'bold']
        });
    }

    showMessage(statusType, statusCode, message) {
        console.log(colors[statusType](`[${statusCode}]: ${message}`));
    }

    getStatusType(statusCode) {
        switch (statusCode) {
            case 200:
                return dialogType.Success;
            case 400:
                return dialogType.Error;
            case 401:
                return dialogType.Error;
            case 404:
                return dialogType.Error;
            case 500:
                return dialogType.Error;
            default:
                return dialogType.Info;
        }
    }
}

export { HttpStatus, dialogType };