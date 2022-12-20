var elements = document.getElementsByClassName("first")
for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
                // remove class from sibling
                var el = elements[0]
                while (el) {
                    if (el.tagName === "first"){
                        // remove class
                        el.classList.remove("max");

                    }
                    // pass to the new sibling
                    el = el.nextSibling;
                }


        this.classList.add("max")



    }
}