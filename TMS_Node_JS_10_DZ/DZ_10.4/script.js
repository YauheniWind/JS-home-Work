let call_yourself = (function (a) {
    let count = 0;

    return function () {
        console.log(count);
        count++;

        if (!a) {
            return call_yourself;
        };
    };

})();
