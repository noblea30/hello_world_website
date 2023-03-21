const uploadBtn = document.getElementById("upload-btn");

uploadBtn.addEventListener("click", function() {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.addEventListener("change", function() {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function() {
      const fileContent = reader.result;
      const displayArea = document.createElement("pre");
      displayArea.textContent = fileContent;
      document.body.appendChild(displayArea);
    });
    reader.readAsText(file);
  });
  fileInput.click();
});




