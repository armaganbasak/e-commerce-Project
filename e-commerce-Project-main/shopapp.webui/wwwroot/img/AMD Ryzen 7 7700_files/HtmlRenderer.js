


var urunOzellikArr = [];
var urunYorum = [];
var BottomUrunOzellik = (urunId, id) => {

    if (urunOzellikArr.length == 0) {
        $.get("/Urun/UrunOzellik?id=" + urunId, (e) => {
            urunOzellikArr = e;
            renderBottomUrunOzellik(id);
        });
    } else {
        renderBottomUrunOzellik(id);
    }
};

var renderBottomUrunOzellik = (el) => {
    let html = '<table class="table table-product-detail">';
    for (var i = 0; i < urunOzellikArr.length; i++) {
        html += '<tr><td>' + urunOzellikArr[i].ozellikAdi + '</td><td>' + urunOzellikArr[i].ozellikDeger + '</td></tr>'
    }
    html += '</table>';
    $("#" + el).html(html);
}

var TopUrunOzellik = (urunid, id) => {
    if (urunOzellikArr.length == 0) {
        $.get("/Urun/UrunOzellik?id=" + urunId, (e) => {
            urunOzellikArr = e;
            renderTopUrunOzellik(id);
        });
    } else {

        renderTopUrunOzellik(id);
    }

};

var renderTopUrunOzellik = (el) => {
    let html2 = '<table> ';
    let filterUrunOzellik = $.grep(urunOzellikArr, (e) => {
        return e.headerOzellik;
    });
    for (var i = 0; i < filterUrunOzellik.length; i++) {
        html2 += '<tr><td>' + filterUrunOzellik[i].ozellikAdi + '</td><td>' + filterUrunOzellik[i].ozellikDeger + '</td></tr>'
    }
    html2 += '</table> <div class="more"><a href="#bTableUrunDetay"  id="/#tumOzellikleriGor">' + "Tüm Özellikleri Gör" + '</a></div>';
    // html2 += '';
    $("#" + el).html(html2);

}

var Aciklama = (id, el) => {

    $("#" + el).load("/Urun/UrunAciklama?id=" + id);
}

var AciklamaHs = (id, el) => {

    $("#" + el).load("/HazirSistem/HazirSistemAciklama?id=" + id);
}

var GarantiKosulu = (id, el) => {
    $("#" + el).load("/Urun/GarantiKosulu?id=" + id);
}



var TopYorum = (id, el) => {
    if (urunYorum.length == 0) {
        $.get("/Urun/UrunYorum?id=" + id, (e) => {
            urunYorum = e;
            renderTopYorum(el);
        });
    } else {
        renderTopYorum(el);
    }
}
var TopYorumHs = (id, el) => {
    if (urunYorum.length == 0) {
        $.get("/Urun/UrunYorum?id=" + id, (e) => {
            urunYorum = e;
            renderTopYorumHs(el);
        });
    } else {
        renderTopYorumHs(el);
    }
}

var BottomYorum = (id, el) => {
    if (urunYorum.length == 0) {
        $.get("/Urun/UrunYorum?id=" + id, (e) => {
            urunYorum = e;
            renderBottomYorum(el);
        });
    } else {
        renderBottomYorum(el);
    }
}



var renderTopYorum = (el) => {

    let html = '';
    if (urunYorum.length == 0) {
        html += '<span class="rating rating-2x mr-3" data-rateyo-read-only="true" data-rateyo-rating="0"></span> <span class="count" >(0)</span><a href="#bYorum">Yeni Yorum Yaz</a>'
        $("#" + el).html(html);
    } else {


        let sum = 0;

        for (let i = 0; i < urunYorum.length; i++) {
            sum += urunYorum[i].puan;
        }
        sum = sum / urunYorum.length;
        html += '<span class="rating rating-2x mr-3" data-rateyo-read-only="true" data-rateyo-rating="' + sum + '"></span> <span class="count" >(' + urunYorum.length + ')</span><a href="#bYorum">Yeni Yorum Yaz</a>';
        $("#" + el).html(html);

    }
    raterInit();

}


var renderTopYorumHs = (el) => {

    let html = '';

    console.log(urunYorum.length);
    if (urunYorum.length == 0) {
        html += ' <span class="rating rating-x ml-0 ml-md-3" data-rateyo-read-only="true" data-rateyo-rating="0" style="width: 50px !important"></span><small class="count ml-2" ><strong style="font-size: 17px; cursor:default; color: rgb(33,37,41)" onclick="toggleNav(\'mySidenavYorum\')">(0)</strong></small><a href="javascript:;" style="display:inline-block;font-size:14px;font-weight:700;line-height:20px;letter-spacing: -0.02em;color:rgb(33,37,41);text-decoration:underline;margin: 0 2px;" onclick="toggleNav(\'mySidenavYorum\');">Yorum Yap</a>'
        $("#" + el).html(html);
    } else {

        console.log("else");
        let sum = 0;

        for (let i = 0; i < urunYorum.length; i++) {
            sum += urunYorum[i].puan;
        }
        sum = sum / urunYorum.length;
        html += '<span class="rating rating-x ml-0 ml-md-3" data-rateyo-read-only="true" data-rateyo-rating="' + sum + '" style="width: 50px !important"></span><small class="count ml-2"><strong style="font-size: 17px; cursor:default; color: rgb(33,37,41)" onclick="toggleNav(\'mySidenavYorum\')">(' + urunYorum.length + ')</strong></small><a href="javascript:;" style="display:inline-block;font-size:14px;font-weight:700;line-height:20px;letter-spacing: -0.02em;color:rgb(33,37,41);text-decoration:underline;margin: 0 2px;" onclick="toggleNav(\'mySidenavYorum\');">Yorum Yap</a>';
        $("#" + el).html(html);

    }
    raterInit();

}


var BottomYorumHs = (id, el) => {
    if (urunYorum.length == 0) {
        $.get("/Urun/UrunYorum?id=" + id, (e) => {
            urunYorum = e;
            renderBottomYorumHs(el);
        });
    } else {
        renderBottomYorumHs(el);
    }
}

var renderBottomYorum = (el) => {
    let html = '';
    html += '<h6 class="mb-3"><strong>Müşteri Yorumları</strong></h6>';
    if (urunYorum.length == 0) {
        html += '<div class="title">Bu ürün ile ilgili henüz yorum yapılmamıştır</div>'
        $("#" + el).html(html);
        $("#readMore").hide();
    } else {
        $.map(urunYorum, (e) => {

            html += '<div class="customer-comments"><div class="comment"><div class="title"><img src="/images/icon-user-comment.png" alt="Ürün Yorumları" />' +
                JSON.stringify(e.yorumBaslik) +
                '<div class="rater">' +
                '<span class="rating rating-x" data-rateyo-read-only="true" data-rateyo-rating="' + e.puan + '" ></span ></div ></div >' +
                '<span class="d-block mb-1">(' + e.musteriAd + ' ' + e.musteriSoyad + ')</span>' +
                '<p class="d-block mb-1" style="word-break: normal">' + JSON.stringify(e.yorum) + '</p>' +
                '</div ></div >' +
                '<p>(' + e.tarih + ')</p>';

        });

        $("#" + el).html(html);

        if ($("#" + el)[0].scrollHeight < 1500) {

            $("#readMore").hide();
        }

    }
    raterInit();


}

var renderBottomYorumHs = (el) => {
    let html = '';
    html += '<div class="text-center"><h6 class="mb-3"><strong>Yorumlar (' + urunYorum.length + ')</strong></h6></div><div class="col-md-12"><hr class="sideNavHR"></div>';
    if (urunYorum.length == 0) {
        html += '<div class="title">Bu ürün ile ilgili henüz yorum yapılmamıştır</div>'
        $("#" + el).html(html);
    } else {
        $.map(urunYorum, (e) => {

            html += '<div class="customer-comments" style="padding: 0px 20px 0px 20px"><div class="comment"><div class="title"><img src="/images/icon-user-comment.png" alt="Ürün Yorumları" />' +
                e.yorumBaslik +
                '<div class="rater">' +
                '<span class="rating rating-x" data-rateyo-read-only="true" data-rateyo-rating="' + e.puan + '" ></span ></div ></div >' +
                '<span class="d-block mb-1 mt-2">(' + e.musteriAd + ' ' + e.musteriSoyad + ')</span>' +
                '<p class="d-block mb-1" style="word-break: normal">' + e.yorum + '</p>' +
                '</div ></div >' +
                '<p style="padding-left:20px">(' + e.tarih + ')</p>';

        });
        $("#" + el).html(html);

    }
    raterInit();


}



var raterInit = () => {
    $(".rating.rating-x").rateYo({
        starWidth: "14px",
        halfStar: true,
        ratedFill: "#f07d00",
        starSvg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.94 47.94" style="enable-background:new 0 0 47.94 47.94;" xml:space="preserve">' +
            '<path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757' +
            'c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042' +
            'c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685' +
            'c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528' +
            'c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956' +
            'C22.602,0.567,25.338,0.567,26.285,2.486z"/></svg>',
    });

    $(".rating.rating-x").rateYo({
        starWidth: "14px",
        halfStar: true,
        ratedFill: "#f07d00",
        starSvg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.94 47.94" style="enable-background:new 0 0 47.94 47.94;" xml:space="preserve">' +
            '<path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757' +
            'c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042' +
            'c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685' +
            'c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528' +
            'c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956' +
            'C22.602,0.567,25.338,0.567,26.285,2.486z"/></svg>',
    });

    $(".rating.rating-2x").rateYo({
        starWidth: "20px",
        halfStar: true,
        ratedFill: "#f07d00",
        starSvg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.94 47.94" style="enable-background:new 0 0 47.94 47.94;" xml:space="preserve">' +
            '<path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757' +
            'c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042' +
            'c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685' +
            'c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528' +
            'c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956' +
            'C22.602,0.567,25.338,0.567,26.285,2.486z"/></svg>',
    });

    $(".rating.rating-3x").rateYo({
        starWidth: "28px",
        halfStar: true,
        ratedFill: "#f07d00",
        starSvg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.94 47.94" style="enable-background:new 0 0 47.94 47.94;" xml:space="preserve">' +
            '<path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757' +
            'c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042' +
            'c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685' +
            'c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528' +
            'c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956' +
            'C22.602,0.567,25.338,0.567,26.285,2.486z"/></svg>',
    });

    $(".rating.rating-4x").rateYo({
        starWidth: "32px",
        halfStar: true,
        ratedFill: "#f07d00",
        starSvg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.94 47.94" style="enable-background:new 0 0 47.94 47.94;" xml:space="preserve">' +
            '<path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757' +
            'c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042' +
            'c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685' +
            'c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528' +
            'c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956' +
            'C22.602,0.567,25.338,0.567,26.285,2.486z"/></svg>',
    });



}


var YorumCheck = (urunId, elementAllow, elementDisAllow) => {

    $.get("/Urun/YorumYapabilir?urunId=" + urunId, (e) => {
        if (e) {
            $("#" + elementAllow + "").removeClass("d-none");
        } else {
            $("#" + elementDisAllow + "").removeClass("d-none");

        }
    });
}

var IlgiliUrunler = (kategoriId, fiyat, urunid) => {

    $("#relProducts").load("/Urun/GetIlgiliUrunler?kategoriId=" + kategoriId + "&fiyat=" + fiyat + "&urunid=" + urunid);
}


var HazirSistemVideolar = (urunId) => {
    $("#divVideoHs").load("/HazirSistem/GetHazirSistemVideolar?urunId=" + urunId);
}



function YorumGonder() {
    var baslik = $("#txtYorumBaslik").val();
    var yorum = $("#txtYorum").val();
    var puan = $(".rating-3x").rateYo("rating");

    if (baslik.length < 5) {
        swalAlert("warning", "Uyarı", "Lütfen Yorum Başlığı Giriniz. Minimum 5 Karakter");
        return false;
    }
    if (yorum.length < 10) {
        swalAlert("warning", "Uyarı", "Lütfen Yorum Yazınız. Minimum 10 karakter");
        return false;
    }
    if (puan == 0 || puan == "0") {
        swalAlert("warning", "Uyarı", "Lütfen Puan Giriniz. Minimum 1");
        return false;
    }

    var obj = {
        baslik: baslik,
        yorum: yorum,
        puan: puan.toString().replace(".", ","),
        urunId: AnaUrunId
};
$.ajax({
    url: "/Home/YorumKaydet",
    type: "POST",
    data: obj,
    dataType: 'json',
    success: function (result) {

        if (result) {
            swalAlert("success", "Başarılı", "Yorumunuzu Aldık. İncelemeden Sonra Yayına Alınacaktır.");
            $("#yorumDivAllow").html("Yorumunuzu Aldık. İncelemeden Sonra Yayına Alınacaktır.");
        } else {
            swalAlert("error", "Hata", "Bir Sorun Oluştu");
        }
    }
});

        }
