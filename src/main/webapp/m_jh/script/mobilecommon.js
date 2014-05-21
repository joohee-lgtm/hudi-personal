// 라이브러리라는 것이 호환성을 해결해주는 것이 큰 기능이죠.
// 그러다보니 브라우저 호환성 이슈를 해결하는 방식도 꽤 잘 설계되어 있어요.
// 아래코드같은 걸 어디에 왜 쓰는지 이해하고 그 분기처리 로직을 보고 배우는 거 아주 좋아요.
(function($) {
    // private
    var _sOS = "", 
    _sVersion = "", 
    _sCssPrefix = "", 
    _setPrefix = function() {
        if (typeof document.body.style.MozTransition !== "undefined") {
            _sCssPrefix = "Moz";
        } else if (typeof document.body.style.webkitTransition !== "undefined") {
            _sCssPrefix = "webkit";
        } else if (typeof document.body.style.OTransition !== "undefined") {
            _sCssPrefix = "O";
        } else if (typeof document.body.style.msTransition !== 'undefined') {
            _sCssPrefix = "ms";
        }
    }, 
    _setAgentInfo = function() {
        var ar = "", sName = navigator.userAgent;
        _sOS = (sName.indexOf("iPhone") > -1) || (sName.indexOf("iPad") > -1) ? "iOS" : (sName.indexOf("Android") > -1 ? "Android" : "");
        switch (_sOS) {
            case "iOS":
                ar = sName.match(/OS\s([\d|\_]+\s)/i);
                break;
            case "Android":
                ar = sName.match(/Android\s([^\;]*)/i);
                break;
        }
        if (ar != null && ar.length > 1) {
            _sVersion = ar[1];
        }
        _sVersion = _sVersion.replace(/\_/g, '.').replace(/^\s+|\s+$/g, "");
    };

    // public
    $.m = {
        MOVETYPE: {
            0: 'hScroll',
            1: 'vScroll',
            2: 'dScroll',
            3: 'tap',
            4: 'longTap',
            5: 'doubleTap'
        },
        init: function() {
            _setAgentInfo();
            _setPrefix();
        },
        getOS: function() {
            return _sOS;
        },
        getVersion: function() {
            return _sVersion;
        },
        getPrefix: function() {
            return _sCssPrefix;
        }
    };
    $.m.init();
})(window);

