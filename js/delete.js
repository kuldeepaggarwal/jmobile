$(function() {
  $('.delete').click(function() {
    var result = confirm("Are you sure you want to delete?");
    if (result){
      $(this).parents('li').remove();
    }
  });
});