//Carousel speed
$('.carousel').carousel({
    interval: 2000
})
//Subs collapse stuff
$(document).ready(function () {
    $('.collapse')
        .on('shown.bs.collapse', function(event) {
        event.stopPropagation();
        $(this)
            .parent().parent()
            .find(".collapse-row")
            .css({"padding-bottom":"6px"});
    }).on('hidden.bs.collapse', function(event) {
        event.stopPropagation();
        $(this)
            .parent().parent()
            .find(".collapse-row")
            .css({"padding-bottom":"0", "border":"none"});
    });
});      
//Initialize Brands datatable
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
//Initialize Abilities datatable
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
//Initialize Gear and Weapons datatables
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
        $($.fn.dataTable.tables({visible: true, api: true} )).DataTable()
            .columns.adjust()
            .responsive.recalc();
    }); 
    $('.nosort').removeClass('sorting_asc');
});
//Allow overall search for all tabbed tables
$(document).ready( function () {
    var tabbedTables = $('.tab-pane table').DataTable();
    $('#search-all').on('keyup', function () {
        tabbedTables.search( this.value ).draw();   
    });
} );
// Masonry stuff
var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
});
