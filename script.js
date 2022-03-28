function checkUserId(){
    let userID = document.getElementById('txtUserID');
    let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
    if(userIDRegex.test(userID.value)){
        return true
    }
    return false
    }
    
    function checkPassword(){
    let password = document.getElementById('txtPassword');
    let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
    if(passwordRegex.test(password.value)){
        return true
    }
    return false
    }
    function checkName(){
    let name = document.getElementById('txtName');
    let nameRegex =/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/ ;
    if(nameRegex.test(name.value)){
        return true
    }
    return false
    }
    
    function checkCountry()
    {
        var country = document.getElementById("txtCountry");
        if (country.options[country.selectedIndex].value == 'disabled selected') {
              return false;
        }
        return true
    }
    function checkZip(){
        let zip = document.getElementById('txtZip');
        let zipRegex = /^[0-9]/;
        if(zipRegex.test(zip.value)){
            return true
        }
        return false
    }
    function checkEmail(){
        let email = document.getElementById('txtEmail');
        let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(emailRegex.test(email.value)){
            return true
        }
        return false
        }
    
    function toggleCheckbox(x, y) {
        if (document.getElementById(x).checked) {
              document.getElementById(y).checked = false;  
        }
         if (document.getElementById(x).checked) {
              document.getElementById(y).checked = false; 
         }
        }
    
    
    let register = document.getElementById('btnRegister')
    
    register.addEventListener('click', function(e){
        e.preventDefault()
        let statusOfUserID = document.getElementById('statusOfUserID')
        let statusOfPassword = document.getElementById('statusOfPassword')
        let statusOfName = document.getElementById('statusOfName')
        if(checkUserId() == true){
            statusOfUserID.textContent = 'UserID hợp lệ'
            statusOfUserID.style.color = 'blue'
        }else{
            statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
            statusOfUserID.style.color = 'red'
        }
    
        if(checkPassword() == true){
            statusOfPassword.textContent = 'Password hợp lệ'
            statusOfPassword.style.color = 'blue'
        }else{
            statusOfPassword.textContent = 'Password không hợp lệ. Độ dài từ 7 - 12'
            statusOfPassword.style.color = 'red'
        }
    
    
        if(checkName() == true){
            statusOfName.textContent = 'Tên hợp lệ'
            statusOfName.style.color = 'blue'
        }else{
            statusOfName.textContent = 'Tên không hợp lệ. Yêu cầu chỉ có chữ'
            statusOfName.style.color = 'red'
        }
    
    
        if(checkCountry() == false){
            statusOfCountry.textContent = 'Yêu cầu chọn đất nước'
            statusOfCountry.style.color = 'red'
        }else{
            statusOfCountry.textContent = 'Đã chọn'
            statusOfCountry.style.color = 'blue'
        }
    
        if(checkZip() == true){
            statusOfZip.textContent = 'Hợp lệ'
            statusOfZip.style.color = 'blue'
        }else{
            statusOfZip.textContent = 'Zip không hợp lệ. Yêu cầu chỉ có số'
            statusOfZip.style.color = 'red'
        }
        if(checkEmail() == true){
            statusOfEmail.textContent = 'Hợp lệ'
            statusOfEmail.style.color = 'blue'
        }else{
            statusOfEmail.textContent = 'Email không hợp lệ'
            statusOfEmail.style.color = 'red'
        }
        if(document.getElementById("male").checked ==false && document.getElementById("female").checked==false  ){
            statusOfSex.textContent = 'Chưa chọn giới tính'
            statusOfSex.style.color = 'red'
        }else{
            statusOfSex.textContent = ''
        }
    
        if(document.getElementById("English").checked ==false && document.getElementById("NotEnglish").checked==false  ){
            statusOfLanguage.textContent = 'Chưa chọn ngôn ngữ'
            statusOfLanguage.style.color = 'red'
        }else{
            statusOfLanguage.textContent = ''
        }
    
        
    })

    // JQUERY
// $(document).ready(function(){

//     function checkUserId(){
//         let userID = $('#txtUserID').val();
//         let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
//         if(userIDRegex.test(userID)){
//             return true
//         }
//         return false
//     }

//     $("#btnRegister").click(function(e){
//         e.preventDefault();
//         if(checkUserId()){
//             $("#statusOfUserID").text('UserID hợp lệ')
//             $("#statusOfUserID").css('color','blue')
//         }else{
//             $("#statusOfUserID").text('UserID không hợp lệ')
//             $("#statusOfUserID").css('color','red')
//         }
//     })

//     function checkPassword(){
//         let userPass = $('#txtPassword').val();
//         let userPassRegex= /^[a-zA-Z0-9]{7,12}$/;
//         if(userPassRegex.test(userPass)){
//             return true
//         }
//         return false
//     }
    
//      $("#btnRegister").click(function(e){
//         e.preventDefault();
//         if(checkPassword()){
//             $("#statusOfPassword").text('Password hợp lệ')
//             $("#statusOfPassword").css('color','blue')
//         }else{
//             $("#statusOfPassword").text('Password không hợp lệ')
//             $("#statusOfPassword").css('color','red')
//         }
//     })


//     function checkName(){
//         let Name = $('#txtName').val();
//         let NameRegex = /^[a-zA-Z]$/;
//         if(NameRegex.test(Name)){
//             return true
//         }
//         return false
//     }
//     $("#btnRegister").click(function(e){
//         e.preventDefault();
//         if(checkName()){
//             $("#statusOfName").text('Tên hợp lệ')
//             $("#statusOfName").css('color','blue')
//         }else{
//             $("#statusOfName").text('Tên không hợp lệ')
//             $("#statusOfName").css('color','red')
//         }
//     })

//     function checkCountry(){
//         let Country = $('#txtCountry').val();
//         let ValCountry ="Choose your Country";
//         if(Country ===ValCountry ){
//             return true
//         }else{
//         return false}
//     }
//     $("#btnRegister").click(function(e){
//         e.preventDefault();
//         if(checkCountry()){
//             $("#statusOfCounrty").text('Đã chọn')
//             $("#statusOfCountry").css('color','blue')
//         }else{
//             $("#statusOfCountry").text('Chua chọn')
//             $("#statusOfCountry").css('color','red')
//         }
//     })

//     function checkZip(){
//         let Zip = $('#txtZip').val();
//         let ZipRegex = /^[0-9]+$/;
//         if(ZipRegex.test(Zip)){
//             return true
//         }
//         return false
//     }
//     $("#btnRegister").click(function(e){
//         e.preventDefault();
//         if(checkZip()){
//             $("#statusOfZip").text('Zip phù hợp')
//             $("#statusOfZip").css('color','blue')
//         }else{
//             $("#statusOfZip").text('Không phù hợp')
//             $("#statusOfZip").css('color','red')
//         }
//     })


//     function checkEmail(){
//         let Email = $('#txtUserID').val();
//         let EmailRegex = /^[a-zA-Z0-9]{5,12}$/;
//         if(EmailRegex.test(Email)){
//             return true
//         }
//         return false
//     }
//     $("#btnRegister").click(function(e){
//         e.preventDefault();
//         if(checkEmail()){
//             $("#statusOfEmail").text('Zip phù hợp')
//             $("#statusOfEmail").css('color','blue')
//         }else{
//             $("#statusOfEmail").text('Không phù hợp')
//             $("#statusOfEmail").css('color','red')
//         }
//     })
// })
    
   