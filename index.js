(function () {

    function sub(e) {
        e.preventDefault();
        var form = document.forms[0];
        var text = "";
        text += "outsideNC: " + form.outsideNC.value + "\n";
        text += "arrests: " + form.arrests.value + "\n";
        text += "confidence: " + form.confidence.value;
        console.log(text);
        window.open("mailto:test@example.com?subject=expungement&body=" + encodeURIComponent(text));
        return false;
    }
    
    var form = document.forms[0];
    form.onsubmit = sub;
})();
var form = document.forms[0];