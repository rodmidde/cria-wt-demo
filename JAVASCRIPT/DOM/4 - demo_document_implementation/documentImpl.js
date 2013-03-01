/**
 * User: mdkr
 * Date: 3/1/13
 *
 * Alerts with: "DOM HTML 2.0 supported?: true" if DOM Level 2 HTML module is supported.
 * The implementation property is supported in all major browsers.
 */
function alertFeatureSupported(modName, modVer) {
    var conformTest = document.implementation.hasFeature(modName, modVer);
    alert("DOM " + modName + " " + modVer + " supported?: " + conformTest);
}