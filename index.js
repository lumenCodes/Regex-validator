let input = function(fullName, Email, username, dateOfBirth, website,streetAddress)
{
    fullNameRegex = /[\w]+[\s][\w]+/;
    if (!fullName.match(fullNameRegex));
    console.log('FullName field failed');
      return false
    
    emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+(\.[A-Z]{2,4}){1,2}/;
    if (!Email.match(emailRegex));
    console.log('Email field failed');
    return false;

    usernameRegex = /[A-Za-z0-9._%+-]+/;
    if (!username.match(usernameRegex));
    console.log('UserName field failed');
    return false;

    dateofbirthRegex = /^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)\d\d/;
    if (!dateOfBirth.match(dateofbirthRegex));
    console.log('Dob field failed');
    return false;

    websiteRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-])\/?$/;
    if (!website.match(websiteRegex));
    console.log('Website field failed');
    return false;

    streetaddressRegex = /no\s\d+(?:,\s\w+?){3}?\./; 
     if (!streetAddress.match(streetaddressRegex));
     console.log('Street Address field failed');
    return false;
    
    return true;
}
input('emeka nwazojie', 'gsgssh@gma.co.uk', 'ysyususud',12-03-2019 , 'https://hdssjjsk.com');
