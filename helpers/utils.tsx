const isFunction = (functionToCheck: any) => {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
};

export const handleResponsive = (props: any) => {
    const handleScreenSizes = () => {
        const currentWindowWidth = window.innerWidth;

        if (currentWindowWidth < 576) {
            if (props.xsCallback && isFunction(props.xsCallback)) {
                props.xsCallback();
            }
        }

        if (currentWindowWidth >= 576) {
            if (props.smCallback && isFunction(props.smCallback)) {
                props.smCallback();
            }
        }

        if (currentWindowWidth >= 768) {
            if (props.mdCallback && isFunction(props.mdCallback)) {
                props.mdCallback();
            }
        }

        if (currentWindowWidth >= 992) {
            if (props.lgCallback && isFunction(props.lgCallback)) {
                props.lgCallback();
            }
        }

        if (currentWindowWidth >= 1200) {
            if (props.xlCallback && isFunction(props.xlCallback)) {
                props.xlCallback();
            }
        } 
    };

    (function () {
        handleScreenSizes();
    })();
    window.addEventListener('resize', handleScreenSizes);
};