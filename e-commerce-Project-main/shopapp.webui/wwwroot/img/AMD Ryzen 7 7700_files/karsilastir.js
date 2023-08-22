
const karsilastirBtn = document.querySelector("#karsilastirBtn");
const tooltip = document.querySelector("#tooltip");
const karsilastirmaList = tippy('#karsilastirBtn', {
    content: getKarsilastirmaPopoverContent(),
    arrow: true,
    delay: [0, 0],
    allowHTML: true,
    interactive: true,
    interactiveBorder: 30,
    interactiveDebounce: 250,
    maxWidth: 350,
    placement: 'bottom',
    touch: true,
    theme: 'light-border',
    onTrigger(instance, event) {

        var content = getKarsilastirmaPopoverContent();
        //console.log(content);
        if (content == false) {
            instance.disable();

        } else if (getCookie("karsilastirUrunler").length != 0 && JSON.parse(getCookie("karsilastirUrunler")).length == 0) {
            //console.log(content);
            instance.disable();

        } else {
            instance.enable();
            instance.setContent(content);
        }

    },

});



function getKarsilastirmaPopoverContent() {

    var urunListesi = getCookie("karsilastirUrunler");
    if (urunListesi == "") {
        return false;
    } else {
        var urunListJson = JSON.parse(urunListesi);
        var html = '<div class="row mb-2 ml-1"><div class="col-12"><h6 class="font-weight-bold">Seçilen Ürünler</h6></div></div>';


        var grouppedUrunler = _.chain(urunListJson)
            .groupBy("categoryId")
            .pairs()
            .map(function (currentItem) {
                return _.object(_.zip(["categoryId", "urunler"], currentItem));
            })
            .value();
        //console.log(grouppedUrunler);
        for (var j = 0; j < grouppedUrunler.length; j++) {

            html += '<div class="row ml-1"><div class="col-12"><h6 class="font-weight-bold" style="font-size: 13px">' + grouppedUrunler[j].categoryId + '</h6></div></div><hr class="m-0"/>'
            html += '<ul class="list-group list-group-flush">';
            for (var i = 0; i < grouppedUrunler[j].urunler.length; i++) {
                html += '<li class="list-group-item"><div class="row"><div class="col-2"> <img src="' + grouppedUrunler[j].urunler[i].resim + '" height="35" width="35" /></div><div class="col-8"> ' + grouppedUrunler[j].urunler[i].urunAdi + '</div> <div class="col-2 text-right"><i id="deleteFromKarsilastirma" onclick="deleteItemFromKarsilastirma(\'' + grouppedUrunler[j].urunler[i].id + '\')" class="fas fa-times"></i></div></li > ';
            }
            html += '</ul>';
        }


        html += '<div class="row mt-3"><div class="col-12 text-right"><button class="btn btn-secondary" style="font-size: 15px; height: 30px" onclick="Temizle()">Temizle</button><button class="btn btn-itopya ml-3" style="font-size: 15px; height: 30px" onclick="Karsilastir()">Karşılaştır</button></div></div>';
        return html;
    }


}




function Temizle() {
    createCookie("karsilastirUrunler", [], 1);
    createCookie("karsilastirUrunlerId", [], 1);
    const button = document.querySelector('#karsilastirBtn');
    if (button) {
        var tippy = button._tippy;
        tippy.setContent(getKarsilastirmaPopoverContent());
        tippy.disable();
        tippy.hide();
        $('#karsilastirCheck').prop("checked", false);
    }
    if (singleton) {
        singleton.setContent(getKarsilastirmaPopoverContent())
        singleton.disable();
        singleton.hide();
        $('.karsilastirCheck input:checkbox').prop("checked", false);
    }

}


function Karsilastir() {
    window.location.href = "/Karsilastir";

}
