$('.add').click(function(){
    let id = $(this).data('id');
    alert(id);
    console.log(id);
});

function add() {
  console.log(this);
}
