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
        $($.fn.dataTable.tables({visible: true, api: true} )).DataTable()
            .columns.adjust()
            .responsive.recalc();
    }); 
});
(function ($) {
    var $container = $('.grid'),
        colWidth = function () {
            var w = $container.width(), 
                columnNum = 1,
                columnWidth = 0;
            if (w > 1200) {
                columnNum  = 5;
            } else if (w > 900) {
                columnNum  = 4;
            } else if (w > 600) {
                columnNum  = 3;
            } else if (w > 300) {
                columnNum  = 2;
            }
            columnWidth = Math.floor(w/columnNum);
            $container.find('.item').each(function() {
                var $item = $(this),
                    multiplier_w = $item.attr('class').match(/item-w(\d)/),
                    multiplier_h = $item.attr('class').match(/item-h(\d)/),
                    width = multiplier_w ? columnWidth*multiplier_w[1]-4 : columnWidth-4,
                    height = multiplier_h ? columnWidth*multiplier_h[1]*0.5-4 : columnWidth*0.5-4;
                $item.css({
                    width: width,
                    height: height
                });
            });
            return columnWidth;
        },
        isotope = function () {
            $container.isotope({
                itemSelector: '.item',
                masonry: {
                    columnWidth: colWidth()
                }
            });
        };
    isotope();
    $(window).on('debouncedresize', isotope);
}(jQuery));
$('.grid').isotope({
    itemSelector: '.item',
    masonry: {
        columnWidth: 100
    }
});
// init Isotope after all images have loaded
/*var $grid = $('.grid').imagesLoaded( function() {
  $grid.isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });
});*/

/*$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 200
});

// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
    $grid.masonry();
}); */ 