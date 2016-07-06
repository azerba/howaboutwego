
(function() { // protect the lemmings!


function goBig() {
	$('#modal').addClass('modal-showing');


	// 1. get the parent of this
	var parent = $(this).parent();
	 

	// 2. find the next() of the parent you just got
	var parentNext = parent.next();

	// 3. get the .html of what you got above

	var parentHTML = parentNext.html();

	// 4. find .modal__container and place the .html into it
	$('.modal-container').html( parentHTML );

}
function closeModal() {
	$('#modal').removeClass('modal-showing');
}



$('.btn-add-restaurant').on('click', goBig);
$('.modal-close').on('click', closeModal);



})();