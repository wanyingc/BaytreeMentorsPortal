export function getScreenSize () {
    if(window.innerWidth < 768) {
        return true;
    } else {
        return false;
    }
}