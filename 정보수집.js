$(document).ready(function() {
    $('#subt').click(function() {
        var name = $("#name").val();
        var kt = $("#kt").val();
        var pn = $("#pn").val();
        var email = $("#email").val();
        var btg = $("#bt").val();


            var regdata = "name=" + name + "&kakaotalk=" + kt + "&Phonenum=" + pn +"&email=" + email + "&battletag=" + btg;
            alert("이까진잘딤");
            $.ajax({        
                type: "POST",
                url: "http://joey914.iptime.org:3000/register",
                    data: regdata,
                    success: function(data)     {         //data - response from server
                    if (data.success == true) {
                        alert("정상적으로 접수되었습니다.");
                    }
                    else{
                      alert("데이타석세스를못받음");
                    }
                },
                    error: function(xhr, status, error)     {
                    alert("서버에 문제가 있습니다. 관리자에게 문의하세요");
                }
            });
    })
});
