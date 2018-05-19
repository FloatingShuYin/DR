define(function() {　　　　
    var init = function() {　　　　　　
        new AMap.Map('contSainer');
    };　　　　
    return {　　　　　　
        init: init
    };　　
});


/*      // 初始化
      var map = new AMap.Map('contSainer', {
        resizeEnable: true,
        zoom: 17,
        center: [112.682913, 28.254873]
      });

      // 点标注
      var marker = new AMap.Marker({
        map: map,
        position: new AMap.LngLat(112.682913, 28.254873),
        icon: new AMap.Icon({
          //image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2803620233,1906638381&fm=23&gp=0.jpg",
          size: [
            72, 72
          ],
          imageSize: [36, 36]
        })
      });

      marker.on('click', function (e) {
        infowindow.open(map, e.target.getPosition());
      })

      var infowindow;
      AMap.plugin('AMap.AdvancedInfoWindow', function () {
        infowindow = new AMap.AdvancedInfoWindow({
          panel: 'panel',
          placeSearch: true,
          asOrigin: true,
          content: '<div class="info-title"><a href="http://map.baidu.com/detail?qt=ninf&uid=643a037f55fa51d5d8d891a1&detail=life"><br>宁乡高新技术产业园区管理委员会</br></a><span><a href="http://map.baidu.com/detail?qt=ninf&uid=643a037f55fa51d5d8d891a1&detail=life">详情»</a></span></' +
              'div><div class="info-content">地址：金州北路001号<a target="_blank" href = "https://mobile.amap.com/">点击下载高德地图</a></div>',
          offset: new AMap.Pixel(0, -20)
        });
        infowindow.open(map, [112.682913, 28.254873]);
      })

      AMap.plugin('AMap.ToolBar', function () {
        var toolbar = new AMap.ToolBar();
        map.addControl(toolbar)
      })*/
