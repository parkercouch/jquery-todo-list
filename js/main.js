$('#input-form').submit(function (event) {
    event.preventDefault();
    const item = event.target.itemName.value;

    if (item === '') return;

    const itemTemplate = `<li class="item fill">
                            <div class="item-text line">${item}</div>
                            <button class="remove button">x</button>
                          </li>`

    $('#list').first().append(itemTemplate);
    event.target.itemName.value = '';
});

$('#list').on('click', '.remove', function () {
    this.parentNode.remove();
});


$( function() {
    $( "#list" ).sortable();
    $( "#list" ).disableSelection();
  } );