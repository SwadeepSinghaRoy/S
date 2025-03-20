$(document).ready(function () {
    $('#submit-button').on('click', function (e) {
        e.preventDefault(); // Prevent any default behavior
        alert("SBSR000"); // This will now trigger correctly

        var name = $('#exampleInputEmail1').val().trim();
        var password = $('#exampleInputPassword1').val().trim();

        
        if (name === "" || password === "") {
            alert("Please fill in both fields.");
            return; // Exit if validation fails
        }

        let answer = null;
        $.ajax({
            type: 'POST',
            url: 'checkUsers.php',
            data: { name: name, password: password },
            success: function (response) {
                answer = JSON.parse(response);
                alert("response: " + response);
                if (answer.success == true) {
                    console.log(answer);
                    window.location.href="./do";
                    use(answer.id);
                } else {
                    alert("लॉगिन असफल! " + answer.success);
                }
            },
            
        });
    });
});
function use(id) {
    let form = document.createElement("form");
    form.method = "GET"; 
    form.action = "./do";  

    let input = document.createElement("input");
    input.type = "hidden";
    input.name = "id";
    input.value = id;
   
    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
}
