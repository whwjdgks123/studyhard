else if (msg.trim() == "/영화" || msg.trim() == ".영화") {
    var mdata = Utils.getWebText("https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&query=현재상영영화");
    var mdata2 = mdata.split('<div class="card_content">');
    var mdata3 = mdata2[1].split('<div class="se-360vr-fullscreen"></div></div></div></div></div>');
    var mdata4 = mdata3[0].replace(/(<([^>]+)>)/g, "");
    mdata4 = mdata4.trim();
    replier.reply(mdata4);
 }


 else if(msg.trim() == "/무탑" || msg.trim() == "!무탑"){
    var mdata = Utils.getWebText("https://m.cafe.naver.com/ca-fe/web/cafes/30421739/articles/1356?fromList=true&menuId=50");
    var mdata2 = mdata.split('<div class="se-main-container">');
    var mdata3 = mdata2[1].split('<div class="se-360vr-fullscreen"></div></div></div></div></div>'); //기준점
    var mdata4 = mdata3[0].replace(/(<([^>]+)>)/g, "");
    mdata4= mdata4.replace(/\n\n\n/g,"\n")
     replier.reply("무탑 정보" +mdata4);
    
    
}
https://m.cafe.naver.com/ca-fe/web/cafes/30421739/menus/50

https://m.cafe.naver.com/ca-fe/web/cafes/30421739/articles/1356?fromList=true&menuId=50  // 0830 무탑정보
                                                                                                            //35차이 
https://m.cafe.naver.com/ca-fe/web/cafes/30421739/articles/1321?fromList=true&menuId=50  //0823 무탑정보 
                                                                                                            //74차이
https://m.cafe.naver.com/ca-fe/web/cafes/30421739/articles/1247?fromList=true&menuId=50  //0809 무탑정보 

//해당부분이 이미지정보
    <div class="se-main-container">
                <div class="se-component se-imageStrip se-imageStrip2 se-l-default" id="SE-ff56bc2c-d2ef-4935-80fc-8fac18698bb3">
                    <div class="se-component-content se-component-content-extend">
                        <div class="se-section se-section-imageStrip se-l-default">
                            <div class="se-imageStrip-container se-imageStrip-col-2">
                                <div class="se-module se-module-image" style="width:61.64926028696125%;">
                                    <a class="se-module-image-link __se_image_link __se_link" style="" onclick="return false;" data-linktype="img" data-linkdata="{&quot;id&quot; : &quot;SE-75595236-543a-49cb-8ab7-19d953ea83a6&quot;, &quot;src&quot; : &quot;https://cafeptthumb-phinf.pstatic.net/MjAyMTA4MzBfNyAg/MDAxNjMwMjY5OTAxMDg2.sXz6ZsohQHep1XZKSWN3j8wPUUNglEZ76wUl-9QPuPkg.yRNslGv45TMwhbpAXr9oDKVqSgv-V29F_NYluJ9Wkjgg.PNG/97.png&quot;, &quot;originalWidth&quot; : &quot;494&quot;, &quot;originalHeight&quot; : &quot;382&quot;, &quot;linkUse&quot; : &quot;false&quot;, &quot;link&quot; : &quot;&quot;}" area-hidden="true">
                                        <img src="https://cafeptthumb-phinf.pstatic.net/MjAyMTA4MzBfNyAg/MDAxNjMwMjY5OTAxMDg2.sXz6ZsohQHep1XZKSWN3j8wPUUNglEZ76wUl-9QPuPkg.yRNslGv45TMwhbpAXr9oDKVqSgv-V29F_NYluJ9Wkjgg.PNG/97.png?type=w800" alt="" class="se-image-resource">
                                    </a>
                                </div>
                                <div class="se-module se-module-image" style="width:38.35073971303875%;">
                                    <a class="se-module-image-link __se_image_link __se_link" style="" onclick="return false;" data-linktype="img" data-linkdata="{&quot;id&quot; : &quot;SE-60be383f-f6c9-4c2d-95ae-cee545f300c3&quot;, &quot;src&quot; : &quot;https://cafeptthumb-phinf.pstatic.net/MjAyMTA4MzBfMTAg/MDAxNjMwMjcwMTUxMDgw.LXauCx5LktIbaTsv8oJcGeXF77GsIq0ZUzVh0C-i3Csg.5aTHwclQ6gJ0-YlfWKmywcklUQYC-lnlad4KfsjhBf0g.PNG/%EB%A0%88%EC%9D%B4%EC%96%B4_6.png&quot;, &quot;originalWidth&quot; : &quot;516&quot;, &quot;originalHeight&quot; : &quot;642&quot;, &quot;linkUse&quot; : &quot;false&quot;, &quot;link&quot; : &quot;&quot;}" area-hidden="true">
                                        <img src="https://cafeptthumb-phinf.pstatic.net/MjAyMTA4MzBfMTAg/MDAxNjMwMjcwMTUxMDgw.LXauCx5LktIbaTsv8oJcGeXF77GsIq0ZUzVh0C-i3Csg.5aTHwclQ6gJ0-YlfWKmywcklUQYC-lnlad4KfsjhBf0g.PNG/%EB%A0%88%EC%9D%B4%EC%96%B4_6.png?type=w800" alt="" class="se-image-resource">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                <div class="se-component se-image se-l-default" id="SE-ecda83de-bf3f-40d4-9fab-febb4e7f3a9d">
                    <div class="se-component-content se-component-content-extend">
                        <div class="se-section se-section-image se-l-default se-section-align-">
                                <div class="se-module se-module-image" style="">
                                    <a class="se-module-image-link __se_image_link __se_link" style="" onclick="return false;" data-linktype="img" data-linkdata="{&quot;id&quot; : &quot;SE-ecda83de-bf3f-40d4-9fab-febb4e7f3a9d&quot;, &quot;src&quot; : &quot;https://cafeptthumb-phinf.pstatic.net/MjAyMTA4MzBfNzMg/MDAxNjMwMjY5NDkzMzU0.gboLdmc9si25vde6P5IxN9aBbFw1h2dknq8f6bmmvk0g.iA4qs94VVleDHpz8rx_HQJ66bv7tPFkYM3xdZEKBLHMg.PNG/8645.png&quot;, &quot;originalWidth&quot; : &quot;1140&quot;, &quot;originalHeight&quot; : &quot;744&quot;, &quot;linkUse&quot; : &quot;false&quot;, &quot;link&quot; : &quot;&quot;}" area-hidden="true">
                                        <img src="https://cafeptthumb-phinf.pstatic.net/MjAyMTA4MzBfNzMg/MDAxNjMwMjY5NDkzMzU0.gboLdmc9si25vde6P5IxN9aBbFw1h2dknq8f6bmmvk0g.iA4qs94VVleDHpz8rx_HQJ66bv7tPFkYM3xdZEKBLHMg.PNG/8645.png?type=w800" alt="" class="se-image-resource">
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="se-component se-text se-l-default" id="SE-681d3d93-3fc0-41e3-a959-a7212fd56de6">
                    <div class="se-component-content">
                        <div class="se-section se-section-text se-l-default">
                            <div class="se-module se-module-text">
                                    <!-- SE-TEXT { --><p class="se-text-paragraph se-text-paragraph-align- " style="" id="SE-a92ce874-ca5d-4edc-bf5c-ac678dee2114"><span style="" class="se-fs- se-ff-   " id="SE-f868b1e1-ddfd-4c73-a846-9e05b69fe9d1">​</span></p><!-- } SE-TEXT -->
                            </div>
                        </div>
                    </div>
                </div>    
                        <div class="se-360vr-fullscreen"></div>
                </div>
                    </div>
                </div>
        </div>
8/23 무탑/케방
0/00 무탑/% 

https://cafe.naver.com/ragmmobile/34940

https://cafe.naver.com/ragmmobile/34935

https://m.cafe.naver.com/ca-fe/web/cafes/30421739/articles/1321?menuId=50&query=%EB%AC%B4%ED%83%91

https://m.cafe.naver.com/ca-fe/web/cafes/30421739/articles/1247?menuId=50&query=%EB%AC%B4%ED%83%91


var html = Utils.getWebText("https://m.cafe.naver.com/ca-fe/web/cafes/30421739/menus/50);