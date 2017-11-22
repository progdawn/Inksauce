$('.carousel').carousel({
    interval: 2000
})

$(document).ready(function(){
    $('#brandstable').DataTable({
        responsive: true,
        "paging":   false,
        "columnDefs": [ {
            "targets": 'nosort',
            "orderable": false
        } ]
    });
});

$(document).ready(function(){
    $('#abilitiestable').DataTable({
        responsive: true,
        "paging":   false,
        "columnDefs": [ {
            "targets": 'nosort',
            "orderable": false
        } ]
    });
});

