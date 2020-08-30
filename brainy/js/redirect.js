const noneMobileLink = "http://olegfrolov.design/brainy/";
const iosStoreLink = "";
const androidStoreLink = "";


function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}
function DetectAndServe() {
    if (getMobileOperatingSystem() == "Android") {
        window.location.href = androidStoreLink;
    }
    if (getMobileOperatingSystem() == "iOS") {
        window.location.href = iosStoreLink;
    }
    // if (getMobileOperatingSystem() == "Windows Phone") {
    //     window.location.href = noneMobileLink;
    // }
    // if (getMobileOperatingSystem() == "unknown") {
    //     window.location.href = noneMobileLink;
    // }
};