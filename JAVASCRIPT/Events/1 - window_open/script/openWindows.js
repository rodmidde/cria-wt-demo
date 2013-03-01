/**
 * User: mdkr
 * Date: 2/27/13
 */

function openBlankWindow() {
    window.open();
}

/**
 * _self is a special name for the window, the effect is that the current window gets replaced.
 *
 * Other values:
 * _blank - URL is loaded into a new window. This is default
 * _parent - URL is loaded into the parent frame (we don't use frames, so forget this)
 * _self - URL replaces the current page
 * _top - URL replaces any framesets that may be loaded (we don't use frames, so forget this)
 * name - The name of the window
 */
function replaceWindow() {
    window.open("about:blank", "_self");
}

/**
 * The fourth parameter only takes effect if the url is loaded into the same window.
 * However, note that some browsers will simply ignore this parameter.
 */
function replaceWindowAndRewriteHistory() {
    window.open("about:blank", "_self", "", true);

    for(var i=0;i<5;i++)
    {
        for(var j=0;j<4567;j++)
        {
            alert(i+j);
        }
    }
}

function openNewWindow() {
    window.open("newWindow.html", "New Window Created By window.open");
}

/**
 * Fun to see that when you add a window size, Chrome actually opens a new seperate window
 * instead of opening the window in a new tab
 */
function openNewWindowWithDifferentSizeUsingProperties() {
    window.open("newWindow.html", "New Window Created By window.open", "height=100, width=100");
}

function openNewWindowWithDifferentSizeUsingCss() {
    window.open("newWindowWithCss.html", "New Window Created By window.open");
}

function checkBlockedPopup() {
    var blocked = false;
    try {
        var newWin = window.open("http://www.han.nl", "", "height=500, width=500");
        if (newWin == null || newWin.screenTop == 0) {
            blocked = true;
        }
    } catch (ex) {
        blocked = true;
    }
    /**
     * Browser popup blocker stops execution of script, so only in the debugger the last block is reached
     */
    if (blocked) {
        document.body.appendChild(document.createElement("p").appendChild(document.createTextNode("Blocked!")));
    }
}