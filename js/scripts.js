/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
// ------------------- Pages navigation -------------------
// activates page clicked
function showPage(pageName){

	// Hide all
	hideAllPages();
    
	// Header
	document.getElementById('topNavHeader').innerHTML = getPageHader(pageName);
    
	// Display page
	document.getElementById(pageName).hidden = false;

	// if all users page - print all users
	if( pageName == 'allUsersTable') printUsers();
    
	// eslint-disable-next-line no-undef
	if( pageName == 'modifyUserForm') ModifyUser();
    
	// eslint-disable-next-line no-undef
	if( pageName == 'deleteUserForm') deleteUser();
	else if( pageName == 'changeLog') printChangeLog(); 
}

// returns page name for header
function getPageHader(pageName){

	switch(pageName){

	case 'allUsersTable':
		return 'All users';
		break;
	case 'newUserForm':
		return 'New user';
		break;    
	case 'modifyUserForm':
		return 'Modify user';
		break;
	case 'deleteUserForm':
		return 'Delete user';
		break;
	case 'changeLog':
		return 'Change log';
		break;
	default:
		return 'Dashboard';
	}
}

// Hide all pages
function hideAllPages(){

	var pages = document.querySelectorAll('.page');

	for ( let i=0; i < pages.length; i++){
		document.querySelectorAll('.page')[i].hidden = true;

	}
}

// ------------------- Home pages -------------------
// on load calculations
function setupCounters(){
    
	document.getElementById('totalUsers').innerHTML = allUsersList.length;
}

// print all users
function printUsers(){

	// looper
	let i ,j;

	// elment
	let userDataTable = document.getElementById('tableContainer');
	userDataTable.innerHTML = '';

	// show buttons
	document.getElementById('allUsersButtons').style.display = 'block';

	// table string
	let tableStr = '<table class="table table-bordered table-hover"><thead class="thead-light"><tr><th>ID</th><th>Name</th><th>Email address</th><th>Mobile phone</th></tr></thead>';

	// loop rows
	for( i = 0 ; i < allUsersList.length ; i++){

		// loop columns
		for( j = 0; j < allUsersList[i].length ; j++ ){

			// if new user - add row
			if( j == 0){
				tableStr += '<tr><td>' + ( i + 1 ) + '</td><td>' + allUsersList[i][j] + '</td>';
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
	tableStr += '<thead class="thead-light"><tr><th>Total</th><th>' + i + '</th></tr></thead></table>';

	// print to site
	userDataTable.innerHTML += tableStr;
}

// print change log
function printChangeLog(){

	// loopers
	let i, j;

	// elment
	let userDataTable = document.getElementById('changeLog');
	userDataTable.innerHTML = '';

	// table string
	let tableStr = '<table class="table table-bordered table-hover"><thead class="thead-light"><tr><th>Date</th><th>Change type</th><th>User</th></tr></thead>';
    
	// print array
	for( i = 0 ; i < changeLog.length ; i++ ){
		for( j = 0 ; j < changeLog[i].length ; j++ ){

			// if new row
			if( j == 0 ){
				tableStr += '<tr><td>' + changeLog[i][j] + '</td>';
			}
			// if last value in row
			else if ( j == changeLog[i].length - 1 ){
				tableStr += '<td>' + changeLog[i][j] + '</td></tr>';
			}
			else{
				tableStr += '<td>' + changeLog[i][j] + '</td>';
			}
		}
	}

	if( tableStr == '<table class="table table-bordered table-hover"><thead class="thead-light"><tr><th>Date</th><th>Change type</th><th>User</th></tr></thead>'){
		userDataTable.innerHTML += 'No changes made yet &#129335;';
	}
	else{
		tableStr += '</table>';
		userDataTable.innerHTML += tableStr;
	}

}

// ------------------- Essentials -------------------

// ger current date and time
function logDate(){
	let curDate = new Date();
	let changeDate = curDate.getDate() + '/' + curDate.getMonth() + '/' + curDate.getFullYear() + ' ' + curDate.getHours() + ':' + curDate.getMinutes() + ':' + curDate.getSeconds();
	return changeDate;
}

