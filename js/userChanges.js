/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// ------------------- Add user -------------------
// Add new user
function addNewUser(){
    
	// get all values
	let fullName = document.getElementById('fullName').value;
	let emailAddress = document.getElementById('emailAddress').value;
	let mobilePhone = document.getElementById('mobilePhone').value;
    
	// check validation
	// eslint-disable-next-line no-undef
	if( !validationCheck(fullName, emailAddress, mobilePhone) ) return;

	// add to database
	// eslint-disable-next-line no-undef
	allUsersList.push([fullName, emailAddress, mobilePhone]);

	// reset fields
	document.getElementById('fullName').value = '';
	document.getElementById('emailAddress').value = '';
	document.getElementById('mobilePhone').value = '';

	// log change
	changeLog.push([ logDate() , 'New user added',fullName]);

	// show all users
	showPage('allUsersTable');
}

// ------------------- Modify user -------------------
// print all users
function ModifyUser(){

	// Hide inputs form
	document.getElementById('modifyUserFormInputs').hidden = true;

	// looper
	let i ,j;

	// elment
	let userDataTable = document.getElementById('modifyTableContainer');
	userDataTable.innerHTML = '';

	// hide elements
	document.getElementById('modifyUserFormHeader').hidden = false;
	document.getElementById('modifyTableContainer').hidden = false;
	document.getElementById('modifyButtons').hidden = false;

    

	// table string
	let tableStr = '<table class="table table-bordered table-hover"><thead class="thead-light"><tr><th></th><th>ID</th><th>Name</th><th>Email address</th><th>Mobile phone</th></tr></thead>';

	// loop rows
	for( i = 0 ; i < allUsersList.length ; i++){

		// loop columns
		for( j = 0; j < allUsersList[i].length ; j++ ){

			// if new user - add row
			if( j == 0){
				tableStr += '<tr><td><input type="radio" class="chooseUser" name="name1" value="' + i +'"/>&nbsp;</td><td>' + ( i + 1 ) + '</td><td>' + allUsersList[i][j] + '</td>';
			}
			// if end pf user
			else if( j == allUsersList[i].length-1 ){
				tableStr += '<td>' + allUsersList[i][j] + '</td></tr>' ;

			}
			// if middle of user
			else{
				tableStr += '<td>' + allUsersList[i][j] + '</td>';
			}

		}
	}

	// close table
	tableStr += '</table>';

	// print to site
	userDataTable.innerHTML += tableStr;
}

// modify chosen user
function editUser(){

	// get chosen user
	let checkedValue = document.querySelector('.chooseUser:checked').value;

	// hide elements
	document.getElementById('modifyUserFormHeader').style.display = 'none';
	document.getElementById('modifyTableContainer').style.display = 'none';
	document.getElementById('modifyButtons').style.display = 'none';

	// show form
	document.getElementById('modifyUserFormInputs').hidden = false;

	// set input elements
	let fullNameValue = document.getElementById('fullNameModify');
	let mobilePhoneValue = document.getElementById('mobilePhoneModify');
	let emailValue = document.getElementById('emailAddressModify');

	// display current user values
	fullNameValue.value = allUsersList[checkedValue][0];
	emailValue.value = allUsersList[checkedValue][1];
	mobilePhoneValue.value = allUsersList[checkedValue][2];

}

// submit changes
function submitChanges(){

    
	// current user to edit
	let checkedValue = document.querySelector('.chooseUser:checked').value;
    
	// set input elements
	let fullNameValue = document.getElementById('fullNameModify').value;
	let emailValue = document.getElementById('emailAddressModify').value;
	let mobilePhoneValue = document.getElementById('mobilePhoneModify').value;

	// Validations
	if( !validationCheck(fullNameValue, emailValue, mobilePhoneValue) ) return;
    
	// Update user in array
	allUsersList[checkedValue][0] = fullNameValue;
	allUsersList[checkedValue][1] = emailValue;
	allUsersList[checkedValue][2] = mobilePhoneValue;

	// log change
	changeLog.push([ logDate(), 'User modified', allUsersList[checkedValue][0]]);

	// back to all users table
	showPage('allUsersTable');
}

// ------------------- Delete user -------------------

// print all users
function deleteUser(){

	// looper
	let i ,j;

	// elment
	let userDataTable = document.getElementById('deleteTableContainer');
	userDataTable.innerHTML = '';

	// table string
	let tableStr = '<table class="table table-bordered table-hover"><thead class="thead-light"><tr><th></th><th>ID</th><th>Name</th><th>Email address</th><th>Mobile phone</th></tr></thead>';

	// loop rows
	for( i = 0 ; i < allUsersList.length ; i++){

		// loop columns
		for( j = 0; j < allUsersList[i].length ; j++ ){

			// if new user - add row
			if( j == 0){
				tableStr += '<tr><td><input type="radio" class="chooseUser" name="name1" value="' + i +'"/>&nbsp;</td><td>' + ( i + 1 ) + '</td><td>' + allUsersList[i][j] + '</td>';
			}
			// if end pf user
			else if( j == allUsersList[i].length-1 ){
				tableStr += '<td>' + allUsersList[i][j] + '</td></tr>' ;

			}
			// if middle of user
			else{
				tableStr += '<td>' + allUsersList[i][j] + '</td>';
			}

		}
	}

	// close table
	tableStr += '</table>';

	// print to site
	userDataTable.innerHTML += tableStr;
}

// pop user from array
function popUser(){

	// get chosen user
	let checkedValue = document.querySelector('.chooseUser:checked').value;

	// log change
	changeLog.push([ logDate(), 'User deleted', allUsersList[checkedValue][0]]);

	// delete from array
	var tempArr = allUsersList.splice( parseInt(checkedValue) + parseInt(1) ,allUsersList.length - 1);
	allUsersList = allUsersList.splice(0,checkedValue);

	// add rest or array
	for( let i = 0 ; i < tempArr.length ; i++ ){
		allUsersList.push(tempArr[i]);
	}

	showPage('allUsersTable');
	// alert
	// alert('User deleted succesfully');
    
}