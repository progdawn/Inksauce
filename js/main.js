$('.carousel').carousel({
    interval: 2000
})

$(document).ready(function (){
    $('#brandstable').DataTable({
        "responsive": true,
        "paging":   false,
        "columnDefs": [ {
            "targets": 'nosort',
            "orderable": false
        } ]
    });
});

$(document).ready(function (){
    $('#abilitiestable').DataTable({
        "responsive": true,
        "paging":   false,
        "columnDefs": [ {
            "targets": 'nosort',
            "orderable": false
        } ]
    });
});

$(document).ready(function (){
    $('.tab-pane table').DataTable({
        "responsive": true,
        "paging":   false,
        "columnDefs": [ {
            "targets": 'nosort',
            "orderable": false
        } ]
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $($.fn.dataTable.tables(true)).DataTable()
            .columns.adjust()
            .responsive.recalc();
    }); 
});

$('.grid').masonry({
  // options...
  itemSelector: '.grid-item',
  columnWidth: 200
});

// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});  