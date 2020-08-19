window.onload = function () {
    document.getElementById('listo').onchange = function () {
        if (this.checked) {
            document.getElementById('precio').textContent = "$199.99";
            document.getElementById('precio2').textContent = "$249.99";
            document.getElementById('precio3').textContent = "$399.99";
        } else {
            document.getElementById('precio').textContent = "$19.99";
            document.getElementById('precio2').textContent = "$24.99";
            document.getElementById('precio3').textContent = "$39.99";
        }
    }
}
