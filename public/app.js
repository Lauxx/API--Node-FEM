console.log("ghostbuster");
var deleteLion = function(){
	var lion = $(event.target).closest('tr');
	var id = $(event.target).closest('tr').attr('id');
	

	$.ajax({
		url: 'api/lion/' + id,
		method:"DELETE",

	}).done(function(){
		console.log('lion deleted')
		lion.remove();
	})
}



var addLion = function(){
	event.preventDefault();

	var name = $('#name').val();
	var age = $('#age').val();
	var pride = $('#pride').val();
	var gender = $('#gender').val();

	var $table = $('#lionTable');

	var lion = {};
	lion.name = name;
	lion.age = age; 
	lion.pride = pride;
	lion.gender = gender;

	$.ajax({
		url: 'api/lion/', 
		method: 'POST',
		data: lion, 
	}).done(function(data){
		console.log('I posted a lion!', data);

		$table.append('<tr id=' + data._id + '>\
			<td>' + data.name + '</td>\
			<td>' + data.age +'</td>\
			<td>' + data.pride +'</td>\
			<td>' + data.gender +'</td>\
			<td><button class="btn btn-danger deleteLion">Delete</button></td>\
			</tr>'
					);
		$('.deleteLion').on('click', deleteLion);
	});
	$('#name').val('');
	$('#age').val('');
	$('#pride').val('');
	$('#gender').val('');

}
$('#addLion').on('click', addLion);




