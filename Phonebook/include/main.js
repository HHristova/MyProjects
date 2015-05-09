    $("#btn").click(function () {
        addContact();
    });
    
    var contacts = Array();

    function addContact() {
        var contactName = $("#name").val();
        var contactNumber = $("#number").val();
        var contactNote = $("#note").val();
        var check = nameCheck(contactName);
        if (check == false) {
            alert("Please insert different name");
        }
        else {
            var info = {"name": contactName, "number": contactNumber, "note": contactNote};
            contacts.push(info);
            refreshContacts();
        }
    }

    function refreshContacts() {
        var data = "";
        for (var i = 0; i < contacts.length; i++) {
            data = data + "<tr><td>" + contacts[i]["name"] + "</td><td>" + contacts[i]["number"] + "</td><td>" + contacts[i]["note"] + "</td><td><img class='del-img' data-name='"+contacts[i]["name"]+"' onclick='deleteContact(this);' src='x.png' /></td></tr>";
        }
        $("tbody").html(data);
    }

    function nameCheck(name) {
        var result = true;

        for (var i = 0; i < contacts.length; i++) {
            if (name == contacts[i]["name"]) {
                result = false;
                break;
            }
        }

        return result;
    }
    
    function deleteContact(element) {
        var attr = element.getAttribute("data-name");
        for(var i = 0; i < contacts.length; i++){
            if(attr == contacts[i]["name"]){
                contacts.splice(i, 1);
                break;
            }
        }
        refreshContacts();
    }