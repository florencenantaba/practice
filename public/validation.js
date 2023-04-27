const Validate = () => {

    //input variables
    let surName = document.getElementById('sur-name');
    let givenName = document.getElementById('GivenName');
    let photo = document.getElementById('photo');
    let male = document.getElementById('male');
    let female = document.getElementById('female');
    let dob = document.getElementById('dob');
    let country = document.getElementById('country');
    let residence = document.getElementById('residence');
    let nationality = document.getElementById('nationality');

    // input error variables
    let surNError = document.getElementById('SurNErr');
    let GNError = document.getElementById('GNErr');
    let gendError = document.getElementById('gendErr');
    let dobError = document.getElementById('dobErr');
    let countryError = document.getElementById('countryErr');
    let resError = document.getElementById('resErr');
    let natError = document.getElementById('natErr');
    
    const nameRegex = /^[a-zA-Z]+$/;
    // validating Surname
    if (surName.value=='' || surName.value.length > 16 || !surName.value.match(nameRegex)){
        surName.style.border= '1px solid red';
        surNError.innerHTML='Invalid field!'
        surNError.style.color = 'red'
        return false
    } 

    // validating given name
    if (givenName.value=='' || givenName.value.length > 16 || !givenName.value.match(nameRegex)){
        givenName.style.border= '1px solid red';
        GNError.innerHTML='Invalid field!'
        GNError.style.color = 'red'
        return false
    } 
    
    // validating photo
    if (photo.value=='' ){
        photo.style.border= '1px solid red';        
        return false
    } 

    // validating gender
    if (!(male.checked || female.checked)){
        radio.style.border= '1px solid red';
        gendError.innerHTML='Gender Must be specified!'
        gendError.style.color = 'red'
        return false
    } 

    // validating dob
    if (dob.value=='' ){
        dob.style.border= '1px solid red';  
        dobError.innerHTML='Select Date of Birth!'      
        return false
    } 
    let today = new Date()
    let dateofBirth = new Date(dob.value)
    let age = today.getFullYear()-dateofBirth.getFullYear()
    let userAge = age

    if(userAge<16 || userAge>150){
        dobError.innerHTML='You are not eligible to register!'
        dobError.style.color = 'red'
        return false
    }

  // validating country
  if (country.value=='' ){
    country.style.border= '1px solid red';  
    countryError.innerHTML='You must select your Country of Residence!'
    countryError.style.color = 'red'      
    return false
} 

  // validating residence
  const resRegex = /^[a-zA-Z]{1,20}$/;
  if (residence.value==''|| !residence.value.match(resRegex)){
    residence.style.border= '1px solid red';  
    resError.innerHTML='Invalid Field!'
    resError.style.color = 'red'       
    return false
 }
 

 // validating nationality
 const natRegex = /^[a-zA-Z]{5,20}$/;
 if (nationality.value==''|| !nationality.value.match(resRegex)){
   nationality.style.border= '1px solid red';  
   natError.innerHTML='Invalid Field!';
   natError.style.color = 'red'       
   return false
}



}