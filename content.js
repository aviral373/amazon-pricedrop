function hello() {
  console.log("Button clicked");
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/products",
    data: { name: "Aviral", game: "ffxiv" },
    success: function (data, status, xhr) {
      chrome.extension.getBackgroundPage().console.log(data + " " + status);
    },
    error: function (jqXHR, textStatus, err) {
      chrome.extension
        .getBackgroundPage()
        .console.log("Got some error :" + err);
    },
  });
}

document.getElementById("btn").addEventListener("click", hello);
