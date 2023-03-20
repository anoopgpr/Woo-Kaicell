 $.mobile.allowCrossDomainPages = true;
_debug = false;

var appversion='8.0';

var newap=false;

var vidlen='';

var pendingprofile = false;
var popUp;
var city_id='';
var category_id='';

var gallery_cat='';
var galstr='';
var player_cat='';
var fix_cat='';

var reg_id="";
var isuserexist=false;

var filenm='';
var filenmdoc='';
var filenmshop='';

var str1='';
var str2='';

var selcid='';
var selname='';

var str3='';

 var errors = {};

var lastattemptpage='';

var backfromemail='';
var transfertype = '';

var scanval='';
var isGiftStore = false;


var json_fb='https://taghash.co/mloyalApps/facebookgoldmedal.php';
/*var RSS_twitter='http://xceedfbapps.com/mloyalfeeds/twitter.php?brandname=pizzahut';
var RSS_pinterest='http://xceedfbapps.com/mloyalfeeds/pinterest.php?brandname=phoolwaladotcom';
var RSS_instagram='http://xceedfbapps.com/mloyalfeeds/instagram.php?brandname=IndigoDelicatessen';
var RSS_youtube='http://xceedfbapps.com/mloyalfeeds/youtube.php?brandname=sanjeevkapoorkhazana';
var RSS_tumblr='http://xceedfbapps.com/mloyalfeeds/tumblr.php?brandurl=http://vinegarwoman.tumblr.com';
var RSS_matchfix='http://xceedfbapps.com/ddfeeds/calendar_new.php';//'http://xceedfbapps.com/ddfeeds/myxml.php';*/
var RSS_twitter,RSS_pinterest,RSS_instagram,RSS_youtube,RSS_tumblr,RSS_matchfix;
var brandname='goldmedalelectricals';
var aboutus_det='goldmedalelectricals';
var brand_url='http://www.goldmedalindia.com/';
var cart = { cartdata: []};
var indexary=new Array();
var ids = [];
var cityarr=new Array();
var cityidarr=new Array();


var gbrd='8FEB92BB-4286-4677-89C7-D3460D063B9A';

var loginserver='';




user = {
	"balance" : 0,
	"firstname" : "",
	"id" : "",
	"store_id" : "",
	"store_code" : "",
	"shop_cat" : "",
	"lastname" : "",
	"total" : 0,
	"validity" : "",
	"mobile" : "",
	"email":"",
	"dob":"",
	"name":"",
	"latitude_gm":"",
	"longitude_gm":"",
	"trans_sms":"",
	"dealerbonuspoints":"",
	"mktgsms":"",
	"cpns":"",
	"ads":"",
	"dob":"",
	"emailid":"",
	"def_store":"",
	"def_city":"",
	"visit_frequency":"",
	"membertype":"",
	"district":"",
	"cashback":"",
	"other_mobile_no":"",
	"referencecode":"",
	"pancardno":"",
	"photo":"",
	"shopname":"",
	"gstno":"",
	"shopestablish":"",
	"PhotoofShop":"",
	"doc":"",
	"doc1":"",
	"state":"",
	"cinno":"",
	"pin":"",
	"address_gm":"",
	"state_gm":"",
	"street_gm":"",
	"created_on":"",
	"isApproved":"",
	"refer_code":"",
	"owner_mobileno":"",
	"nocounter":"",
	"store_name" : "",
	"isBlocked":""
};


store = {
	"store_id" : "",
    "store_name" : "",
	"store_category" : "",
    "redeem_logic" : "",
    "store_members" : "",
	"store_rank" : "",
    "admin_id" : "",
    "brand_id" : "",
	"district" : "",
	"storemobile":"",
	"nocounter ":""
};

var BrandNameShow='Kaicell';



var loginserver ="http://kaicellb2b.mliveshare.com/";


var SERVER = "https://mliveshare.com/"; 
var SERVER1 = "https://mliveshare.com/user/";

var versionurl  ='https://taghash.co/';

var versionurl1  ='https://taghash.co/';



$(document).ready(function (event) {

                 checkVersion();

	           $.mobile.changePage( "#slidepage", { transition: "none"} );

                $("#wait").css("display","none"); // hide it initially
				
                 $(document).ajaxStart(function() {
                       $("#wait").css("display","block");
                    });
				  
                 $(document).ajaxStop(function() {
                       $("#wait").css("display","none");
                    });

				//loadStates();
				checkProfilepic();
				
				//localStorage.setItem("usernamegold","8336956016");localStorage.setItem("passwordgold","7645");
				$( function() {
					 //$("#popupNested1").enhanceWithin().popup();
					 $("#popupNestedSettings").enhanceWithin().popup();
					 //$("#scan2").enhanceWithin().popup();
					 $("#withoutscan").enhanceWithin().popup();

					 $("#withoutscancou").enhanceWithin().popup();

					 $('#userapprove').enhanceWithin().popup();


				});

				$("#addmore").click(function(){

					 addInput('dynamicInput');

				 });

				 $('#homepagefooter').owlCarousel({
					loop:true,
					margin:0,
					nav:false,
					dots:false,
					autoplay:true,
					responsive:{
						0:{
							items:1
						},
						600:{
							items:1
						},
						1000:{
							items:1
						}
					}
						
				});

				$("#shop_color").spectrum({
				    color: "#f00"
				 });

				 document.addEventListener("backbutton", function(e){

				
						


						if($.mobile.activePage.is('#myaccount')){
							navigator.app.exitApp();
						}

						if($.mobile.activePage.is('#selectcategorypage')){
							
							navigator.app.exitApp();
						}
				     
					
			   if($.mobile.activePage.is('#homepage') || $.mobile.activePage.is('#profilepage')){
				   e.preventDefault();
				   var x;
					if (confirm("Are you sure you want to exit?") == true) {
						x = "Yes";
						navigator.app.exitApp();
					} else {
						x = "No";
						 $.mobile.changePage( ($.mobile.activepage.attr('id')), { transition: "none"} );

					}


				   
			   }
			   
			}, false);

		console.log(localStorage.getItem('latestApp'));

			var usr = localStorage.getItem("usernamemloyal_share");
   		    var pwd = localStorage.getItem("userpassloyal_share");

			if(typeof(usr)==undefined || usr==null)
		            usr='';
		    if(typeof(pwd)==undefined || pwd==null)
		            pwd='';

		        console.log('usr'+usr);
		        console.log('pwd'+pwd);

			if(usr=='' && pwd=='')
			{
			     //$.mobile.changePage("slidepage");
						
			} 
			else         
			{	
           
            $('#username_login').val(localStorage.getItem("usernamemloyal_share"));
			$('#pass_login').val(localStorage.getItem("userpassloyal_share"));

			$('#shopid').val(localStorage.getItem("bid"));

				
           
             authenticate();
            
        
			}




				 
				
					  

					 
});






 function checkVersion()
 {

    console.log(versionurl+'appversionnewu.json');
 	 $.ajax({
           
			url: versionurl+'appversionnewu.json',
            type: 'GET',
			timeout: 300000,
            dataType: "json",
            async:false,
         
           complete: function(xhr, textStatus) {
		   //called when complete

		    },

			success: function(data, textStatus, xhr) {
			
			  console.log("VESRION:"+JSON.stringify(data));

			  console.log(data.version);
			   console.log(appversion);

			  console.log(data.version==appversion)

			  if(data.version==appversion)
			  	newap=true;
			  else
			  	newap=false;

			  console.log('newap'+newap);

			  localStorage.setItem('latestApp',newap);

			  

		
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 //toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				 localStorage.setItem('latestApp','true');
				}
		});


 }

$(document).on('pageshow', '#homepage', function (event, ui) {


	

	
			if(localStorage.getItem("usernamemloyal_share")=='helpdesk' || localStorage.getItem("usernamemloyal_share")=='mapp_login')
			{

				

				

			}
			else
			{
				document.getElementById("mdeal").style.display = "none";
				document.getElementById("mdeal_panel").style.display = "none";
				document.getElementById("cshop").style.display = "none";
				document.getElementById("cshop_panel").style.display = "none";
				document.getElementById("mcat").style.display = "none";
				document.getElementById("mshop_panel").style.display = "none";
				document.getElementById("mcat_panel").style.display = "none";
				document.getElementById("mprd").style.display = "none";
				document.getElementById("mprd_panel").style.display = "none";

				
				

			}

					

	
})



$(document).on('pageinit', '#myaccount', function (event, ui) {

	//	receivedEvent('deviceready');

		  
       
        $(document).on('tap', '#login_button', function (e, ui) {

			
		e.preventDefault();
		e.stopPropagation();
		
		authenticate();

	});
});

/*$(document).on('pageshow', '#login_pg', function (event, ui) {


	var image_url = versionurl+'mliveshareshop/uploads/logo_'+gbrd+'.jpg';
	//console.log('logoloc:'+image_url);


	var image = new Image();
    image.src = image_url;

    image.onload = function()
    {
        document.getElementById("brand_logo_div").innerHTML= '<img src="'+image_url+'" alt="Brand Logo" class="brand_logo" />';
    }
    image.onerror = function()
    {
       document.getElementById("brand_logo_div").innerHTML= '';
    }

});*/


function checkProfilepic()
{

	var image_url = versionurl+'mliveshareshop/uploads/profile_'+gbrd+'.jpg';
	//console.log('logoloc:'+image_url);


	var image = new Image();
    image.src = image_url;

    image.onload = function()
    {
        document.getElementById("ppichome").src = image_url;
		document.getElementById("cardImagemenu").src = image_url;
    }
    image.onerror = function()
    {
        document.getElementById("ppichome").src = 'assets/images/shop_home.png';
		document.getElementById("cardImagemenu").src = 'assets/images/user_pic.png';
    }

}

function savecategory(cattype)
{
	console.log(cattype);
	//localStorage.setItem('cattype',cattype);

	if(cattype=='new')
	{
		$.mobile.changePage( "#profilepage", { transition: "none"} );
	}
	else if(cattype=='old')
	{
		//document.getElementById("dealer_headlbl").innerHTML= 'Sales Executive';
		$.mobile.changePage( "#login_pg", { transition: "none"} );
	}
	else
	{
		$.mobile.changePage( "#profilepage", { transition: "none"} );
	}
}

 





function show_login()
{
	$('#username_login').val('');
	$('#pass_login').val('');
	$('#shopid').val('');


					$('#username_login').val(localStorage.getItem('usernamemloyal_share'));
					$('#pass_login').val(localStorage.getItem('userpassloyal_share'));
					$('#shopid').val(localStorage.getItem('bid'));

$.mobile.changePage( "#login_pg", { transition: "none"} );



}






function checkforundefined(str)
{
    if(typeof str==undefined || str=='undefined'||str==null||str=='null')
    {
        str='';
    }
        return str;
}

function receivedEvent(id) {
       

 var push = PushNotification.init({ "android": {"senderID": "817522399972"}});
                     push.on('registration', function(data) {
                     
					 reg_id=data.registrationId;
					 
                     });
          
                     push.on('notification', function(data) {
						//alert(data.message);
					 
						//showInbox();
                     });
          
                     push.on('error', function(e) {
						//alert(e);
                     }
					);
    }

function getContacts(){


 try{
 var optFilter = new ContactFindOptions();
 optFilter.filter = "";  // to return all contacts
 optFilter.multiple = true; // return multiple results
 var fields = [navigator.contacts.fieldType.name,navigator.contacts.fieldType.phoneNumbers];
 
 // get all contacts
 navigator.contacts.find(fields,gcsSuccess, gcsError, optFilter);
 }
 catch(err)
 {
     txt="There was an error loading contacts.\n\n"; 
     txt+="Error description: " + err.message + "\n\n"; 
    // alert(txt); 
    
 }
}

/* get all contacts success */
function gcsSuccess(contacts){
 
 //alert("Contact sync start"+contacts.length);
 if( contacts.length != 0 ){
  // get formatted names and sort
  var names = new Array();
  var contactnos = new Array();
  
  
  for(var i=0; i<contacts.length; ++i){


   if( contacts[i].phoneNumbers == null )
            continue;

   
   
               
           
            
 

   
   if(contacts[i].name){
    var pname = contacts[i].displayName != null ? contacts[i].displayName: "No name";
     names.push(pname);
    
    }

   // display phone numbers
     if (contacts[i].phoneNumbers){
                              var pNumber = contacts[i].phoneNumbers[0].value; 
      
          contactnos.push(pNumber);
     

     }
   
  }
  names.sort();


  
 var contactstr='<label for="choosefrnd" class="select">Choose Friend:</label><select name="choosefrnd" id="choosefrnd"  onchange="if (this.selectedIndex) doSomething(this.selectedIndex);">';
  for(var i=0; i<names.length; ++i){
   contactstr += '<option value='+contactnos[i]+'>'+names[i]+'</option>';
  }
   contactstr += '</select>';

   //alert(contactstr);
   document.getElementById("allContacts").innerHTML=contactstr;

 } else document.getElementById("allContacts").innerHTML='No Contact';
}

/* get all contacts error */
function gcsError(contactError){
 navigator.notification.alert('Contacts Error');
}

function getContactno(i)
{
$('#search-mobile').val(phonenos.get(i));

}
function doSomething(str)
{
 
 var e = document.getElementById("choosefrnd");
    var strmob = e.options[e.selectedIndex].value;

 $('#giftmno').val(strmob);
 
}
function addincart(i)
{
	ids.push(i);
	cart.cartdata.push({ 
   "index":i,
   "url" : SERVER1+jsonary[i].brand_logo,
   "BrandId" : jsonary[i].brand_id,
   "BrandName" : jsonary[i].brand_name,
   "BrandValue" : jsonary[i].gift_voucher_value,
   "BrandDescription":jsonary[i].brand_description,
   "Validity":jsonary[i].end_date,
    });
   
  indexary.push(jsonary[i].brand_id);
  
  $('#cartval').html(ids.length);
}


 $(document).on('tap', '#view_cart', function (e, ui) {

        checkout();
 
 
});

var $popUp='';

function showPOPup()
{

	var $popUp = $("<div id=sharepop />").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		//showHome();
		
		
		
        
    }).css({
            'width': '270px',            
            //'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#00baf200'
    });
    //create a title for the popup
    $("<div />", {
        html: " <div class=\"share_options\">"+
         			"<ul><li> Sharing images <img id=\"simages\" src=\"assets/images/arrow.png\" class=\"img-responsive\" /></li>"+
                      "<li> Sharing Description <img id=\"sdesc\" src=\"assets/images/arrow.png\" class=\"img-responsive\" /></li>"+
                    "</ul>"+
                    "</div>"
    }).appendTo($popUp);

    //create a message for the popup

		
    //create a back button
    

    $popUp.popup('open').trigger("create");

}

function showPOPupNot()
{

	var $popUp = $("<div id=sharepopnot />").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		//showHome();
		
		
		
        
    }).css({
            'width': '270px',            
            //'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '##9ea3bb'
    });
    //create a title for the popup
    $("<div />", {
        html: "<span>Please enable push notification to get impartant alert!!</span> <div class=\"ui-grid-a mt-30 mb-20\">"+
        "<div class=\"ui-block-solo\" style=\"padding: 0 10px\"> <a href=\"javascript:enableNot(\'"+user.id+"\');\" class=\"btn btn_primary\" id=\"popnot\">Enable Now</a> </div>"+
      "</div>"
    }).appendTo($popUp);

    //create a message for the popup

		
    //create a back button
    

    $popUp.popup('open').trigger("create");

}



$(document).bind('keydown', function(event) {

  if (event.keyCode == 27) { // 27 = 'Escape' keyCode (back button)
    event.preventDefault();
  }
});


function shareApp()
{
	window.plugins.socialsharing.share('Hi, Join Gold medal Loyalty & avail exciting offers.', null, 'http://180.179.202.114/shareimg/mLoyalgoldmedal.png', 'http://goldmedalelectricals.mloyalprecise.com/mapp');
}

function rateApp()
{
	var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
		 if (deviceType=='iPad' || deviceType=='iPhone') 
			 {
                //window.open('itms-apps://itunes.apple.com/us/app/domainsicle-domain-name-search/id511364723?ls=1&mt=8'); // or itms://
				window.open('http://180.179.218.225:82/mloyaliphone.jsp?brandname='+brandname);
			 } 
		 else if (deviceType=='Android') 
			 {
                window.open("market://details?id=com.mobiquest.gmelectrical","_system");
             }
		else if (deviceType=='BlackBerry')
			{
                //window.open('http://appworld.blackberry.com/webstore/content/<applicationid>');
				window.open('http://180.179.218.225:82/mloyalbb.jsp?brandname='+brandname);
            }
}

// onSuccess Geolocation
    //
    function onGeoSuccess(position) {
       /* var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + new Date(position.timestamp)          + '<br />';*/
	 var latlng = position.coords.latitude+','+position.coords.longitude;
	 showTabContent_Map1(latlng);
							
    }

    // onError Callback receives a PositionError object
    //
    function onGeoError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
 

function drawMap(latlng,index) {
    
        var myOptions = {
            zoom: 2,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP 
        };
   

   var bounds = new google.maps.LatLngBounds();
        var map = new google.maps.Map(document.getElementById('map-canvas'+index), myOptions);
        // Add an overlay to the map of current lat/lng
        var pinColor = "FE7569";
        var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
                new google.maps.Size(21, 34),
                new google.maps.Point(0, 0),
                new google.maps.Point(10, 34));
        var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                new google.maps.Size(40, 37),
                new google.maps.Point(0, 0),
                new google.maps.Point(12, 35));



        bounds.extend(latlng);
        var markercurr = new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'Current Position!!!',
            icon: pinImage,
            shadow: pinShadow

        });
        map.fitBounds(bounds);
    }

	

var toast = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h5>" + msg + "</h5></div>")
            .css({display: "block",
                opacity: 0.97,
                position: "fixed",
                padding: "7px",
                "text-align": "center",
                width: "270px",
                background: "#00baf2",
                "text-shadow": "none",
                "color": "#ffffff",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(2500)
            .fadeOut(400, function () {
                $(this).remove();
            });
}




function hasCameraPermission() {
    //alert("kkkk");

    cordova.plugins.barcodeScanner.hasPermission(
      function(result) {
        // if this is 'false' you probably want to call 'requestCameraPermission' now
        alert(result);
      }
    )
  }

  function requestCameraPermission() {
    // no callbacks required as this opens a popup which returns async
    cordova.plugins.barcodeScanner.requestPermission();
  }





function showPshareOPup()
{

    var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();

		//redeemNow();
        


    }).css({
        'width': '270px',
        'height': '200px',
        'padding': '5px',
        'text-shadow': 'none',
        //'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
        'background': 'rgb(93, 120, 167)'
    });
    //create a title for the popup
    $("<p/>", {
        text: ""
    }).appendTo($popUp);

    //create a message for the popup

    $("<p/>", {
        html:  '  <div class="ptsrdm" id="storename"></div><div id="oform"> <div class="ui-grid-solo"><input type="number" id="rvalue" name="rvalue" placeholder="Points to be redeemed" value=""  /></div> <div > <a href="javascript:redeemRequest();" id="submit_button_redeem" data-inline="true" class="btnclass1">Redeem Request</a></div></div><div id=rmsg></div><div id=rform><input type="text" id="otp" name="otp" placeholder="Coupon Code" value=""  /><div > <a href="javascript:redeemNow();" id="submit_button_redeem1" data-inline="true" class="btnclass1">Redeem Now</a></div>'


    }).appendTo($popUp);

	  //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back",
			"class":"ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right"
    }).buttonMarkup({
        inline: false,
        mini: false,
       
	    
       
    }).appendTo($popUp);



    //create a back button


    $popUp.popup('open').trigger("create");

}


function toggleDiv(str,tg)
{
    $('#'+tg+'').find(".right").toggleClass("down");
   // $(".catinnerhdr").slideUp("fast");
	$('#'+str+'').slideToggle("fast");
   // $(".catheader").removeClass("bg_toggle");
    //$('#'+tg+'').toggleClass("bg_toggle");
}


function addProducts(catid,catname)
{
	  selcid = catid;
	  selcname = catname;
	  try{
		$( "#Menu_sidebar" ).panel( "close" );
		}catch(err) 
		{	}
		
		var brandsurl='';

		 var etype = localStorage.getItem("cattype");

		 if(etype=='dealer' || etype=='Dealer')
		 {
			brandsurl=SERVER3+'brands_dealer_json_api.asp';
		 }
		 else if(etype == 'CounterBoy')
		 {
			brandsurl=SERVER3+'brands_counterboy_json_api.asp';
		 }
		 else
		 {
			brandsurl=SERVER3+'brands_json_api.asp';
		 }

	   $.ajax({
		 url: brandsurl,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { 'cat_id': catid },
		 success: function(data, textStatus, xhr) {
					 
				//console.log('ProductsData:'+JSON.stringify(data));
				
				var str = '';

				for(var i=0;i<data.data.length;i++)
				{
					var surl='';
							 if(etype=='dealer' || etype=='Dealer')
							{
							   surl=SERVER3+'all_products_dealer_json.asp?cat_id='+catid+'&b_id='+data.data[i].brand_id;
							
							}
							else if(etype == 'CounterBoy')
							 {	
								surl=SERVER3+'all_products_counterboy_json.asp?cat_id='+catid+'&b_id='+data.data[i].brand_id;
							 }
							 else
							 {
								 surl=SERVER3+'all_products_json.asp?cat_id='+catid+'&b_id='+data.data[i].brand_id;
							
							 }
							var pointval='';
							var pointdate='';
							var product_id='';

								   $.ajax({
									 url: surl,
									 type: 'GET',
									 timeout: 50000,
									 dataType: 'json',
									 async:false,
									 

									success: function(data1, textStatus, xhr) {

										console.log(JSON.stringify(data1));
											
											
											if(data1.data.length!=0){
												pointval = data1.data[0].GiftVoucherValue;
												pointdate=data1.data[0].GiftVoucherEndDate;
												product_id=data1.data[0].ProductId;
											}
											else
											{
												pointval='';
												pointdate='';
											}

											//console.log(pointval);

								
											
									},
									error: function(xhr, textStatus, errorThrown) {
												toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
									}
								  });
					/*str +='<div class="primary_block">';
					//str +='<a href="javascript:showProducts(\''+data.data[i].brand_id+'\',\''+data.data[i].brand_name+'\',\''+data.data[i].brand_logo+'\',\''+data.data[i].brand_description+'\',\''+data.data[i].Gift_Voucher_Value+'\');" class="reward_item">';
					str +='<a href="#" class="reward_item">';
					str +='<div class="reward_img"><img src='+data.data[i].brand_logo+' class="img-responsive" alt=""/></div>';
					str +='<div class="reward_brief">';
					str +='<p>'+data.data[i].brand_name+'</p>';
					str +='<h2 class="item_rewards">'+data.data[i].Gift_Voucher_Value+'<span>Points</span></h2>';
					str +='</div>';
			  	    str +='</a>';
					str +='</div>';*/


											var bname=data.data[i].brand_name.replace(/["']/g, '');
											var bdesc=data.data[i].brand_description.replace(/["']/g, '');
											var blogo=data.data[i].brand_logo.replace(/\\/g, "/");
											var brand_id=data.data[i].brand_id;
											str +='<div class="primary_block">';
											if(pointval!=''){
												str +='<a href="javascript:showRewardDetails(\''+product_id+'\',\''+blogo+'\',\''+bname+'\',\''+bdesc+'\',\''+pointval+'\',\''+brand_id+'\')" class="reward_item">';						
											}
											else
											{
												str +='<a href="" class="reward_item">';						
											
											}
											str +='	<div class="reward_img"><img src='+data.data[i].brand_logo+' class="img-responsive" alt=""/></div>';
											str +='	<div class="reward_brief">';
											str +='	<p>'+data.data[i].brand_name+'</p>';
											if(pointval!=''){
											str +='	<h2 class="item_rewards">'+pointval+'<span >Points</span></h2>';
											}
											else
											{
												str +='	<h4>Product Not Available<span></span></h4>';
											}

											str +='	</div>';
											str +='</a>';
											str +='</div>';
					
				}

				document.getElementById("catpro"+catid).innerHTML=str;
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
}

$(document).on("pageshow", "#add_cat1", function() {

	localStorage.setItem('catpic','');
	  
      //showCategory();
	 
     // showMenu();
      //showhomebanners();
});



function addDealer()
{

   var d_name = $('#d_name').val();
   var d_contact =  $('#d_contact').val();
   var d_email =  $('#d_email').val();
   var d_comm =  $('#d_comm').val();
   var store=gbrd;
   var store_name=user.store_name;
  

   //filenmshop ='http://mliveshare.com/photo/1.jpg';




   if(d_name=='' || d_contact=='' || d_comm=='') // edited by Ajay 
   {
		toast('Please enter mandatory fields!');
   }
   else
   {

   $.ajax({
			url: loginserver+'APIs/add_store_json_api.asp',
			type: 'GET',
			timeout: 30000,
		    //data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14'},
		  	data: {

		  		'apiuid':'MLOYALAPI',
		  		'apipswd':'Ml0yalAP!2o14',
				'StoreName': d_name,
				'StorePhonenumber': d_contact,
				'StoreEmailId': d_email,
				'StoreCommission': d_comm,
				'StoreCode': 'WOOM'+d_contact
				
				
				
				
			},
			success: function(data, textStatus, xhr) {
				
				data=JSON.parse(data);
				console.log('JSONDATA:'+JSON.stringify(data));



				if(data.error.length>0)
				{

					toast(data.error);
				

					
					
				}
				else
				{
						toast('Dealer Added!')

					    //$.mobile.changePage('#mdealer');

					    showDealers();

					     $('#d_name').val('');
                          $('#d_contact').val('');
                          $('#d_email').val('');
                          $('#d_comm').val('');
					
					
					
				}
	
		         
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
   }


}


function updateDealer()
{

   var d_name = $('#d_name_up').val();
   var d_contact =  $('#d_contact_up').val();
   var d_email =  $('#d_email_up').val();
   var d_comm =  $('#d_comm_up').val();
   var user_id =  $('#d_id').val();
   var store=user.store_id;
   var store_name=user.store_name;
  

   //filenmshop ='http://mliveshare.com/photo/1.jpg';




   if(d_name=='' || d_contact=='' || d_comm=='') 
   {
		toast('Please enter mandatory fields!');
   }
   else
   {

   $.ajax({
			url: SERVER1+'updt_dealer',
			type: 'GET',
			timeout: 30000,
		  	data: {
				
				
				'name': d_name,
				'contact': d_contact,
				'email': d_email,
				'commission': d_comm,
				'uid': user_id,
				'device_type':'',
				'device_push_id':''
				
				
				
			},
			success: function(data, textStatus, xhr) {
				
				data=JSON.parse(data);
				console.log('JSONDATA:'+JSON.stringify(data));

				if(data.success=='1')
				{
					toast('Dealer Uodated!!')

					$.mobile.changePage('#mdealer');

					//showCategory();

					
					
				}
				else
				{
					toast(data.msg);
					
				}
	
		         
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
   }


}


function enableNot(user_id)
{

   var d_name ='';
   var d_contact =  '';
   var d_email =  ''
   var d_comm = ''
   var user_id =  user_id
   var store=user.store_id;
   var store_name=user.store_name;
   var device_id=reg_id;
   var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";

  

   //filenmshop ='http://mliveshare.com/photo/1.jpg';




   if(user_id=='') // edited by Ajay 
   {
		toast('Please enter mandatory fields!');
   }
   else
   {

   
   $.ajax({
			url: SERVER1+'updt_dealer',
			type: 'GET',
			timeout: 30000,
		  	data: {
				
				
				'name': d_name,
				'contact': d_contact,
				'email': d_email,
				'commission': d_comm,
				'uid': user_id,
				'device_type':deviceType,
				'device_push_id':device_id

				
				
				
			},
			success: function(data, textStatus, xhr) {
				
				data=JSON.parse(data);
				console.log('JSONDATA:'+JSON.stringify(data));

				if(data.success=='1')
				{
					toast('Notification Enabled')

					$.mobile.changePage('#homepage');

					//showCategory();

					
					
				}
				else
				{
					toast(data.msg);
					
				}
	
		         
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
   }


}




function addCategpry()
{

   var catname = $('#cat_name').val();
   var catgst =  $('#cat_gst').val();
   var store=gbrd;
   var picname=localStorage.getItem('catpic');3024

   
   //var catphoto=versionurl1+picname;
      var catphoto=versionurl1+'mliveshareshop/uploads/'+picname;

   var id=localStorage.getItem('golbal_cat_id');
  

   //filenmshop ='http://mliveshare.com/photo/1.jpg';

 console.log(store);
   console.log(catname);
   console.log(catgst);
   console.log(picname);


   if(catname==''  || catgst=='') // edited by Ajay 
   {
		toast('Please enter mandatory fields!');
   }
   else
   {

   $.ajax({
			url: SERVER+'getcat/addCategory',
			type: 'GET',
			timeout: 30000,
		  	data: {
				
				'id': id,
				'name': catname,
				'gst': catgst,
				'store': store,
				'imageurl': catphoto,
				'imagename': picname,
				
				
			},
			success: function(data, textStatus, xhr) {
				
				data=JSON.parse(data);
				console.log('JSONDATA:'+JSON.stringify(data));

				if(data.success=='1')
				{
					toast('Category added!!')

					$.mobile.changePage('#managecategory');

					showCategory();

					$('#cat_name').val('');
                    $('#cat_gst').val('');

                    document.getElementById("category_photo").src = 'img/my_membership_s.png';
                  

					
				}
				else
				{
					toast(data.msg);
					
				}
	
		         
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
   }


}



function showCategory1()
{
	'use strict';	
	   $.ajax({
		 url: SERVER3+'categories_json_api.asp',
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				//console.log('JSONDATA:'+JSON.stringify(data));
				
                var str = '';
					str +='<div class="primary_section">';
					str +='<div class="primary_section_inner pt-30">';
					//str1 = '<li><a href="javascript:showProducts(\'0\',\'All\');">All</a></li>';
				for(var i=0;i<data.data.length;i++)
				{
					
								
					str +='<div class="primary_block bg-dark-grey">';
					str +='<a href="javascript:showProductsold(\''+data.data[i].catid+'\',\''+data.data[i].catname+'\');" class="points_bal_btn p_0">';						
					str +='<div class="points_bal">';
					str +='<h4><strong>'+data.data[i].catname+'</strong></h4>';
					str +='</div>';						
				  	str +='</a>';
					str +='</div>';	
					
				}
				str +='</div>';	
				str +='</div>';	

                document.getElementById("rewardscat_div").innerHTML=str;	
				$.mobile.changePage( "#rewardscat", { transition: "none"} );
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
	  
}

$(document).on("pageshow", "#add_product1", function() {

	localStorage.setItem('prdpic','');
	  
      //showCategory();
	 
     // showMenu();
      //showhomebanners();
});

function addProduct()
{

   var prdname = $('#prod_name').val();
   var prddesc =  $('#prod_desc').val();
   var prdcat=$('#prod_cat').val();
    var prdprice=$('#prod_price').val();
   var store=gbrd;
   var picname=localStorage.getItem('prdpic');
   //var prdphoto=versionurl1+picname;

    var prdphoto=versionurl1+'mliveshareshop/uploads/'+picname;

   var id=localStorage.getItem('golbal_prd_id');
  

   //filenmshop ='http://mliveshare.com/photo/1.jpg';

 console.log(store);
   console.log(prdname);
   console.log(prddesc);
   console.log(picname);


   if(prdname=='' || prdcat=='' || picname=='')
   {
		toast('Please enter mandatory fields!');
   }
   else
   {

   $.ajax({
			url: SERVER+'getcat/addproduct',
			type: 'GET',
			timeout: 30000,
		  	data: {
				
				'itemcode': id,
				'itemname': prdname,
				'description': prddesc,
				'store': store,
				'mrp': prdprice,
				'catid': prdcat,
				'product_type':'simple',
				'imageurl': prdphoto,
				'imagename': picname,
				
				
			},
			success: function(data, textStatus, xhr) {
				
				data=JSON.parse(data);
				console.log('JSONDATA:'+JSON.stringify(data));

				if(data.success=='1')
				{
					toast('Product added!!')

					$('#prod_name').val('');
                    $('#prod_desc').val('');
                     $('#prod_price').val('');

                    document.getElementById("product_photo").src = 'img/my_membership_s.png';

					$.mobile.changePage('#manageproduct');

					showProductnew();

					
				}
				else
				{
					toast(data.msg);
					
				}
	
		         
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
   }


}

function showProductsold(cid,cname)
{  

	selcid = cid;
	selcname = cname;

	//document.getElementById("cat_header_name").innerHTML=cname;
	document.getElementById("prdctlist").innerHTML='';
	$.mobile.changePage( "#myrewards");

	try{
	$( "#Menu_sidebar" ).panel( "close" );
	}catch(err) 
	{	}
	
	var brandsurl='';

	 var etype = localStorage.getItem("cattype");

	 if(etype=='dealer' || etype=='Dealer')
	 {
		brandsurl=SERVER3+'brands_dealer_json_api.asp';
	 }
	 else if(etype == 'CounterBoy')
	 {
		brandsurl=SERVER3+'brands_counterboy_json_api.asp';
	 }
	 else
	 {
		brandsurl=SERVER3+'brands_json_api.asp';
	 }

	   $.ajax({
		 url: brandsurl,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { 'cat_id': cid },

		success: function(data, textStatus, xhr) {
					 
				//console.log('ProductsData:'+JSON.stringify(data));
				
				var str = '';
				    

				for(var i=0;i<data.data.length;i++)
				{
					//get Gift_Voucher_Value from other api

					console.log(cid);
					console.log(data.data[i].brand_id);
							var surl='';
							 if(etype=='dealer' || etype=='Dealer'){
	 
							   surl=SERVER3+'all_products_dealer_json.asp?cat_id='+cid+'&b_id='+data.data[i].brand_id;
							console.log(surl);
							}
							else if(etype == 'CounterBoy')
							 {	
								surl=SERVER3+'all_products_counterboy_json.asp?cat_id='+cid+'&b_id='+data.data[i].brand_id;
							 }
							 else
							 {
								 surl=SERVER3+'all_products_json.asp?cat_id='+cid+'&b_id='+data.data[i].brand_id;
							
							 }
							var pointval='';
							var pointdate='';
							var product_id='';

								   $.ajax({
									 url: surl,
									 type: 'GET',
									 timeout: 50000,
									 dataType: 'json',
									 async:false,
									 

									success: function(data1, textStatus, xhr) {

										console.log(JSON.stringify(data1));
											
											
											if(data1.data.length!=0){
												pointval = data1.data[0].GiftVoucherValue;
												pointdate=data1.data[0].GiftVoucherEndDate;
												product_id=data1.data[0].ProductId;
											}
											else
											{
												pointval='';
												pointdate='';
											}

											//console.log(pointval);

								
											
									},
									error: function(xhr, textStatus, errorThrown) {
												toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
									}
								  });


											var bname=data.data[i].brand_name.replace(/["']/g, '');
											var bdesc=data.data[i].brand_description.replace(/["']/g, '');
											var blogo=data.data[i].brand_logo.replace(/\\/g, "/");

											var brandid=data.data[i].brand_id;

											str +='<div class="primary_block">';
											if(pointval!=''){
											str +='<a href="javascript:showRewardDetails(\''+product_id+'\',\''+blogo+'\',\''+bname+'\',\''+bdesc+'\',\''+pointval+'\',\''+brandid+'\')" class="reward_item">';		
											}
											else
											{
												str +='<a href="" class="reward_item">';						
											
											}
											str +='	<div class="reward_img"><img src='+data.data[i].brand_logo+' class="img-responsive" alt=""/></div>';
											str +='	<div class="reward_brief">';
											str +='	<p>'+data.data[i].brand_name+'</p>';
											if(pointval!=''){
											str +='	<h2 class="item_rewards">'+pointval+'<span >Points</span></h2>';
											}
											else
											{
												str +='	<h4>Product Not Available<span></span></h4>';
											}

											str +='	</div>';
											str +='</a>';
											str +='</div>';
					
					
				}

				   
				
				document.getElementById("prdctlist").innerHTML=str;
				//$('body').removeClass('ui-loading');
	
				
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

}
function changepointval(q,ptval)
{
	q = $('#detailqty').val();
	//alert('here'+q);
	q = parseInt(q)*parseInt(ptval);
	//alert(q);
	document.getElementById("pro_points").innerHTML= q+'<span>Points</span>';
}

function showRewardDetails(bid,blogo,bname,bdesc,gvalue,brandid)
{
	
	var etype = localStorage.getItem("cattype");
	//if(etype == 'CounterBoy')
	if(isGiftStore == true)
	{
		document.getElementById("qtydivision").style.display = 'none';
		document.getElementById("reward_division").style.display = 'none';
		document.getElementById("gift_division1").style.display = 'block';
	}
	else
	{
		document.getElementById("reward_division").style.display = 'block';
		document.getElementById("gift_division1").style.display = 'none';
	}

	document.getElementById("pro_txt").innerHTML=bname;

    document.getElementById('pro_img').innerHTML= '<img src='+blogo+' class="img-responsive" alt="brandlogo"/>';

	document.getElementById("pro_desc").innerHTML='<h3 class="text-primary mt-0">Description</h3><p>'+bdesc+'</p>';

	document.getElementById("pro_points").innerHTML= gvalue+'<span>Points</span>';

	document.getElementById("select_qty").innerHTML = '<select id="detailqty" data-role="none" onchange="javascript:changepointval(\''+this.value+'\',\''+gvalue+'\');"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>';

	 document.getElementById("rewlink").onclick = function() {
				redeemProduct(bid,brandid,gvalue);
				return false;
		 };
    document.getElementById("giftlink1").onclick = function() {
				sendOTP(bid);
				return false;
		 };
    localStorage.setItem('gval',gvalue);
	$.mobile.changePage( "#reward_details", { transition: "none"} );



}

function sendOTP(pid)
{
	//http://goldmedalelectricals.mloyalprecise.com/apis/get_counterboy_coupon_json_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&mobileno=9999999999&offerid=XX
	$.ajax({
			 url: SERVER2+'get_counterboy_coupon_json_api.asp',
			 type: 'GET',
			 timeout: 50000,
			 dataType: 'json',
			 data: { 'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile, 'offerid': pid,'ownermobno':user.owner_mobileno},

			success: function(data, textStatus, xhr) {
						 
					console.log('Data:'+JSON.stringify(data));
			    if(data.error!='')
				    {
						toast(data.error);
					}
					else
					{
										
				document.getElementById("gift_division1").style.display = 'none';	
				document.getElementById("gift_division2").style.display = 'block';	
				document.getElementById("otpbox").style.display = 'block';	

				toast("OTP has been sent to your mobile number.Please enter otp to proceed");

				document.getElementById("giftlink2").onclick = function() {
				verifyOTP(pid);
				return false;
				};
					}
					   
			},
			error: function(xhr, textStatus, errorThrown) {
						toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
			}
		  });
}





function imageExists(image_url){

   /* var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;*/

	return true;

	



}


function openetypePopup()
{
	$('#etype').popup();
	$('#etype').popup("open");

}




			function capturePhotoshop() {

	         // navigator.camera.getPicture(uploadPhoto2, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI });
	            $("#optionspopshop").popup();
				$("#optionspopshop").popup("open");
           }


            function capturePhotonewshop() {

			  try{
				$("#optionspopshop").popup("close");
				}catch(err) 
				{	}

	          navigator.camera.getPicture(uploadPhotoshop, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:false,targetWidth:512,targetWidth:512,correctOrientation:true});
           }

           function uploadprofileGalleryshop() {

			    try{
				$("#optionspopshop").popup("close");
				}catch(err) 
				{	}

				navigator.camera.getPicture(uploadPhotoshop, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:false,targetWidth:512,targetWidth:512,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
				});

			}

			
			function uploadPhotoshop(imageURI) {

				

				var b_Image = document.getElementById('shop_photo');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;
				
				

				var options = new FileUploadOptions();
				options.fileKey="file";
				golbal_shop_id=Math.ceil(Math.random() * 1000)
				var fName='shop_'+localStorage.getItem('gbrd');



				

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'goldmedal/uploads/'+options.fileName;

				
				filenmdoc=options.fileName+".jpg";
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			    var statusDom;
			    var statusDomdiv;
				
						statusDom=document.getElementById("shop_photo_status");
						statusDomdiv=document.getElementById("shop_photo_status_div");

				var ft = new FileTransfer();
				localStorage.setItem('shoppic',filenmdoc);
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 if(perc=='100')
       						 	localStorage.setItem('shoppic',filenmdoc);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  

     				      
    			}
    			
				};


	  
				
				ft.upload(imageURI, encodeURI(versionurl+"mliveshareshop/upload_bill_new.php"), win, failPhotoshop, options, true);
			}

			function failPhotoshop()
			{

			}


			function capturePhotoLogo() {

	         // navigator.camera.getPicture(uploadPhoto2, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI });
	            $("#optionspoplogo").popup();
				$("#optionspoplogo").popup("open");
           }


            function capturePhotonewlogo() {

			  try{
				$("#optionspoplogo").popup("close");
				}catch(err) 
				{	}

	          navigator.camera.getPicture(uploadPhotologo, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:false,targetWidth:512,targetWidth:512,correctOrientation:true});
           }

           function uploadprofileGallerylogo() {

			    try{
				$("#optionspoplogo").popup("close");
				}catch(err) 
				{	}

				navigator.camera.getPicture(uploadPhotologo, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:false,targetWidth:512,targetWidth:512,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
				});

			}

			
			function uploadPhotologo(imageURI) {

				

				var b_Image = document.getElementById('shop_logo');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;
				
				

				var options = new FileUploadOptions();
				options.fileKey="file";
				golbal_shop_id=Math.ceil(Math.random() * 1000)
				var fName='logo_'+localStorage.getItem('gbrd');

				

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'goldmedal/uploads/'+options.fileName;

				
				filenmdoc=options.fileName+".jpg";
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			    var statusDom;
			    var statusDomdiv;
				
						statusDom=document.getElementById("logo_photo_status");
						statusDomdiv=document.getElementById("logo_photo_status_div");

				var ft = new FileTransfer();
				localStorage.setItem('logopic',filenmdoc);
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 if(perc=='100')
       						 	localStorage.setItem('logopic',filenmdoc);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  

     				      
    			}
    			
				};


	  
				
				ft.upload(imageURI, encodeURI(versionurl+"mliveshareshop/upload_bill_new.php"), win, failPhotologo, options, true);
			}

			function failPhotologo()
			{

			}





         function capturePhotonew() {

			  try{
				$("#optionspopshop").popup("close");
				}catch(err) 
				{	}

	          navigator.camera.getPicture(uploadPhotoprofile, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:false,targetWidth:512,targetWidth:512,correctOrientation:true});
           }

          	function uploadPhotoprofile(imageURI) {

				

				var b_Image = document.getElementById('cardImagemenu');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;
				
				

				var options = new FileUploadOptions();
				options.fileKey="file";
				var fName='profile_'+gbrd;

				

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'goldmedal/uploads/'+options.fileName;

				
				filenmdoc=options.fileName+".jpg";
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			  
				

	  
				
				ft.upload(imageURI, encodeURI(versionurl+"mliveshareshop/upload_bill_new.php"), winPhotoprofile, failPhotoprofile, options, true);
				
			}

			function failPhotoprofile()
			{

			}
			

			function winPhotoprofile(r) {
				toast("Image uploaded successfully!");
				//$("#wait").css("display","none"); // hide it initially
				 
			}

			function win(r) {
				//toast("Image uploaded successfully!");
				//$("#wait").css("display","none"); // hide it initially
				 
			}

			function fail(error) {
				toast("There was an error uploading image");
				//$("#wait").css("display","none"); // hide it initially
				
			}

			function onFail(message) {
				toast('Failed because: ' + message);
			}



			function capturePhotocat() {
               // alert("dddddddddd");
	         // navigator.camera.getPicture(uploadPhoto2, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI });
	            $("#optionspopcat").popup();
				$("#optionspopcat").popup("open");
           }


            function capturePhotonewcat() {

			  try{
				$("#optionspopcat").popup("close");
				}catch(err) 
				{	}

	          navigator.camera.getPicture(uploadPhotocat, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:false,targetWidth:512,targetWidth:512,correctOrientation:true});
           }

           function uploadprofileGallerycat() {

			    try{
				$("#optionspopcat").popup("close");
				}catch(err) 
				{	}

				navigator.camera.getPicture(uploadPhotocat, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:false,targetWidth:512,targetWidth:512,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
				});

			}

			
			function uploadPhotocat(imageURI) {

				

				var b_Image = document.getElementById('category_photo');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;
				
				

				var options = new FileUploadOptions();
				options.fileKey="file";
				var fName='cat_'+user.mobile+'_'+localStorage.getItem('golbal_cat_id');

				

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'goldmedal/uploads/'+options.fileName;

				
				filenmdoc=options.fileName+".jpg";
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			    var statusDom;
			    var statusDomdiv;
				
						statusDom=document.getElementById("category_photo_status");
						statusDomdiv=document.getElementById("category_photo_status_div");

				var ft = new FileTransfer();

				localStorage.setItem('catpic',filenmdoc);
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';



   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 if(perc=='100')
       						 	
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  

     				      
    			}
    			
				};


	  
				
				ft.upload(imageURI, encodeURI(versionurl+"mliveshareshop/upload_bill_new.php"), win, failPhotocat, options, true);
			}

			function failPhotocat()
			{
				
			}



			function capturePhotoprd() {
               // alert("dddddddddd");
	         // navigator.camera.getPicture(uploadPhoto2, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI });
	            $("#optionspopprd").popup();
				$("#optionspopprd").popup("open");
           }


            function capturePhotonewprd() {

			  try{
				$("#optionspopprd").popup("close");
				}catch(err) 
				{	}
c
	          navigator.camera.getPicture(uploadPhotoprd, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:false,targetWidth:512,targetWidth:512,correctOrientation:true});
           }

           function uploadprofileGalleryprd() {

			    try{
				$("#optionspopprd").popup("close");
				}catch(err) 
				{	}

				navigator.camera.getPicture(uploadPhotoprd, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:false,targetWidth:512,targetWidth:512,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
				});

			}

			
			function uploadPhotoprd(imageURI) {

				

				var b_Image = document.getElementById('product_photo');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;
				
				

				var options = new FileUploadOptions();
				options.fileKey="file";
				var fName='prd_'+user.mobile+'_'+localStorage.getItem('golbal_prd_id');

				

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'goldmedal/uploads/'+options.fileName;

				
				filenmdoc=options.fileName+".jpg";
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			    var statusDom;
			    var statusDomdiv;
				
						statusDom=document.getElementById("product_photo_status");
						statusDomdiv=document.getElementById("product_photo_status_div");

				var ft = new FileTransfer();

				localStorage.setItem('prdpic',filenmdoc);
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';



   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 if(perc=='100')
       						 	
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  

     				      
    			}
    			
				};


	  
				
				ft.upload(imageURI, encodeURI(versionurl+"mliveshareshop/upload_bill_new.php"), win, failPhotocat, options, true);
			}

			function failPhotocat()
			{
				
			}
	
			


function showAppMsg()
{
	toast('Mandatory field Pancard is missing!');
}


function showCategory11()
{
   $.mobile.changePage( "#managecategory", { transition: "none"} );	

  $.ajax({
    url: SERVER2+'get_member_by_owner_json_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','owner_mobile':ownermob},
    complete: function(xhr, textStatus) {
   //called when complete
    }, success: function(data, textStatus, xhr) {

	//console.log(JSON.stringify(data));

        var str = '';
        
			  str +='<div class="table-responsive">';
			  str +='<table class="table couter_list bg-dark">';
			  str +='<thead class="table_header"><th>Name</th><th>Phone No.</th><th>Active</th></thead>';
			  for (var j = 0; j < data.data.length; j++)
			  {
				  if(data.data[j].MemberCategory == 'CounterBoy' || data.data[j].MemberCategory == 'Counter Boy')
				  {

					  var cname =  formatName(data.data[j].FirstName.toLowerCase());
					  if(cname!='' && cname!=undefined && cname!='undefined'&& cname!=null && cname!='null')
					  {
							var add= checkforundefined(data.data[j].HomeNo)+' '+checkforundefined(data.data[j].Floor_flat)+' '+checkforundefined(data.data[j].Building)+' '+checkforundefined(data.data[j].Street)+' '+checkforundefined(data.data[j].Town);
							str+='<tr><td><a href="javascript:memberDetails1(\''+capitalizeFirstLetter(removeHash(cname))+'\',\''+checkforundefined(data.data[j].LastName)+'\',\''+data.data[j].MemberCategory+'\',\''+data.data[j].Mobileno+'\',\''+add+'\',\''+checkforundefined(data.data[j].IsApproved)+'\');" data-rel="popup"  data-position-to="window" data-transition="pop" class="list_link" >';
							
							
							str += capitalizeFirstLetter(removeHash(cname))+' '+checkforundefined(data.data[j].LastName);
							str +='<span class="member_role">'+checkforundefined(data.data[j].City)+'</span>';
							str +='</h3>';
							str +='</a></td>';
							str+='<td><a href="tel:'+checkforundefined(data.data[j].Mobileno)+'" class="list_link">'+checkforundefined(data.data[j].Mobileno)+'</a></td>';
							if(etype=='dealer' || etype=='Dealer')
	 						{
		 							if(data.data[j].IsApproved=='UnApproved'){
	 								if(checkforundefined(data.data[j].SE_IsApproved)!='')
	 								{

	 									str+='<td>'+checkforundefined(data.data[j].SE_IsApproved)+ ' By SE</td>';

	 								}
	 								else
	 								{
	 								if(checkforundefined(data.data[j].Dealer_IsApproved)!='')
	 									str+='<td>'+checkforundefined(data.data[j].Dealer_IsApproved)+ ' By Me</td>';
	 							    else
	 							    	str+='<td>'+checkforundefined(data.data[j].IsApproved)+'</td>';
	 							    }
	 							
	 							}
	 							else{
	 								str+='<td>'+checkforundefined(data.data[j].IsApproved)+'</td>';
	 							}

	 						}
	 						else
	 						{
	 							if(data.data[j].IsApproved=='UnApproved'){
	 								if(checkforundefined(data.data[j].SE_IsApproved)!='')
	 								{

	 									str+='<td>'+checkforundefined(data.data[j].SE_IsApproved)+ ' By SE</td>';

	 								}
	 								else
	 								{
	 								if(checkforundefined(data.data[j].Retailer_IsApproved)!='')
	 									str+='<td>'+checkforundefined(data.data[j].Retailer_IsApproved)+ ' By Me</td>';
	 							    else
	 							    	str+='<td>'+checkforundefined(data.data[j].IsApproved)+'</td>';
	 							    }
	 							
	 							}
	 							else{
	 								str+='<td>'+checkforundefined(data.data[j].IsApproved)+'</td>';
	 							}

	 						}
							
							str+='</tr>';
						 
					  }
				  }
						   
			  } 
                      
					   str +='</table>';
					   str +='</div>';


					   /*<table width="250" class="member_details_table" cellpadding="5">
                  <tbody>
            <tr>
                      <td>Category:</td>
                      <td id="catname"></td>
                    </tr>
            <tr>
                      <td>Description:</td>
                      <td id="catdesc"></td>
                    </tr>
            <tr>
                      <td>Photo:</td>
                      <td id="catphoto"></td>
                    </tr>
          </tbody>
                </table>*/
       
	  document.getElementById("categ_list1").innerHTML=str;
   
   
    },
    error: function(xhr, textStatus, errorThrown) {

    }
  });
  
}

function showCategory()
{
  $.ajax({
   
    url: SERVER+'getcat/getloccatsall/'+gbrd,
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: { },
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
		//console.log('Data2:'+JSON.stringify(data));
        var str = '';
        
			  str +='<div class="table-responsive">';
			  str +='<table class="table couter_list bg-dark">';
			  str +='<thead class="table_header"><th>Name</th><th>Description</th><th>Photo</th></thead>';
				
			  for (var i = 0; i < data.length; i++)
			  {

				str+='<tr>';
				str+='<td>'+checkforundefined(data[i].name)+'</td>';
				str+='<td>'+checkforundefined(data[i].gst)+ '</td>';
				str+='<td><div class="manage_img"><img src="'+data[i].imagefolder+'" class="img-responsive" alt=""/><div></td>';
				//str+='<td><img src="assets/images/cross.png" class="img-responsive" alt="" onClick="javascript:delcat();"/></td>';
				str+='</tr>';
              } 

			  str +='</table>';
			  str +='</div>';


			  document.getElementById("categ_list1").innerHTML=str;
			  $.mobile.changePage( "#managecategory", { transition: "none"} );
   
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });
	 
	 
}


function showDealers()
{
$.mobile.changePage('#mdealer');
  $.ajax({
   
    url: loginserver+'m/store_locator_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: { },
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
		//console.log('Data2:'+JSON.stringify(data));
        var str = '';
        
			 
			  str +='<div class="table-responsive">';
			  str +='<table class="table couter_list bg-dark">';
			  str +='<thead class="table_header"><th>Name</th><th>Phone</th><th>StoreCode</th></thead>';
				
			  for (var i = 0; i < data.length; i++)
			  {
			  	if(data[i].storename.trim() == 'Email Admin' || data[i].storename.trim() == 'ONLINE'){
			  		continue;

			  	} 
			  	else
			  	{



				str+='<tr>';
				str+='<td>'+checkforundefined(data[i].storename)+'</a></td>';
				str+='<td>'+checkforundefined(data[i].storephone+data[i].CustomerCare)+ '</td>';
				str+='<td>'+checkforundefined(data[i].storecode)+ '</td>';
				// str+='<td><div class="delete_img"><img src="assets/images/trash.png" class="img-responsive" alt="" onClick="javascript:deldealer(\''+data[i].id+'\');"/></div></td>';
			
				//str+='<td><img src="assets/images/cross.png" class="img-responsive" alt="" onClick="javascript:delcat();"/></td>';
				str+='</tr>';
				} 

              } 

			  str +='</table>';
			  str +='</div>';


			  document.getElementById("dealer_list").innerHTML=str;
   
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });
	 
	 
}

function showupdated(name,phone,email,commission,user_id)
{

	$('#d_name_up').val(name);
	$('#d_contact_up').val(phone);
	$('#d_email_up').val(email);
	$('#d_comm_up').val(commission);
	$('#d_id').val(user_id);

	$.mobile.changePage('#update_dealer');



}

$(document).on("pageshow", "#share", function() {

	
	  showCategoryshare();

     // showMenu();
      //showhomebanners();
});


function showCategoryshare()
{
    
	'use strict';	
	   $.ajax({
		 url: SERVER+'getcat/getloccatsall/'+gbrd,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				console.log('JSONDATAhhhhhh:'+JSON.stringify(data));
				if(data.length>0)
				{
				var str = '';
                var str1 = '';

				for(var i=0;i<data.length;i++)
				{
					 
					

					/*str +='<div class="cate_section">';  Comment added By Ajay Kumar
					str +='<h3 class="cate_heading">'+data[i].name+'</h3>';
					str +='<div class="cate_content">';
					str +='<div id="slider_cat">';



                    str +='<div class="swiper-slide">';
                    str +='<a href="javascript:showProductShare(\''+data[i].id+'\',\''+data[i].name+'\');">';
                    //str +='<img src='+data[i].imagefolder+' class="img-responsive" alt=""/>'; Edited By Ajay Kumar
                    str +='<img src="assets/images/plasma_tv.png" class="img-responsive" alt=""/>';
                    //str +='<h3 class="p_caption">'+data[i].name+'</h3>';
                    str +='</a>';
                    str +='</div>';
					
					
					
                    
                
                
               // document.getElementById("slider_"+catid).innerHTML=str;


					str +='</div>';
					str +='</div>';
					str +='</div>';*/

					var catimg = data[i].imagefolder;
					if(typeof catimg == undefined ||typeof catimg == 'undefined' || catimg == null || catimg == 'null' || catimg == '')
                    {
                      // catimg = 'assets/img/newu.png';    
                    }
					
					str +='<div class="primary_block">';
					str +='<a href="javascript:showProductShare(\''+data[i].id+'\',\''+data[i].name+'\');" class="what_new_item ui-link">';
					str +='<div class="item_img"><img src='+catimg+' class="img-responsive" alt=""/></div>';
					str +='<div class="item_brief">';
					str +='<h4>'+data[i].name+'</h4>';
					//str +='<p>'+data.length+'</p>';
					str +='</div>';
					str +='<div class="points_arrow"><img src="assets/images/arrow.png" class="img-responsive" alt=""></div>';
					str +='</a>';
					str +='<div class="ui-grid-a social_share_list"><div class="ui-block-a"> <img src="assets/images/wapp.png" class="img-responsive" onclick="javascript:shareProductsCat(\''+data[i].id+'\',\''+data[i].name+'\');"></div><div class="ui-block-a"> <img src="assets/images/fb.png" class="img-responsive" onclick="javascript:shareProductsCatFb(\''+data[i].id+'\',\''+data[i].name+'\');"></div></div>';
					str +='</div>';
					

					//addSubcategory(data[i].id);

				}

			document.getElementById("shopzone").innerHTML=str;

		}
		else
		{
			document.getElementById('title_error').innerHTML='Category List';

			document.getElementById('failqty').innerHTML='Start by adding categories and products';

			

			$.mobile.changePage('#failpage');
		}
				

				
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

}

function showProductShare(cid,cname)
{  
	'use strict';	

	   var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";


    //$('body').addClass('ui-loading');
	document.getElementById("cat_header").innerHTML='<span>'+cname+'</span>';
	$.mobile.changePage( "#products");
	   
	var shopcmsurl = SERVER;

    console.log(cid);
				
	var str='';
	
	   $.ajax({
		 url: SERVER+'getcat/getitems/'+gbrd+'/'+cid,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				console.log('ProductsData:'+JSON.stringify(data));
				var str = '';
                localStorage.setItem("ProductsData",JSON.stringify(data));
				var totlength = data.length;
				console.log('totlength....'+totlength);

                var i=0;

				while(i<totlength)
				{

					str +='<div class="ui-grid-a list">';
						console.log('index'+i);
						console.log(data[i]);
						console.log('i%2'+i%2);

					if(i%2==0)
					{
					
					var imgurl= data[i].itemcode;
					var imgurlmain= imgurl.trim();
					
                   /* var imgslider = JSON.parse(JSON.stringify(data[i].images));
                    var imgstr = [];
                    for(var j=0;j<imgslider.length;j++)
                    {
                        console.log(imgslider[j]);
                        imgstr.push(imgslider[j]);
                    }*/
                   // alert('imgstr'+imgstr);



                    var img_str_json=JSON.stringify(data[i].images).replace(/"/g, '');
                   // var img_str_json=JSON.stringify(img_str);

                    var pr_img = '';
				    if(typeof data[i].images == undefined ||typeof data[i].images == 'undefined' || data[i].images == null || data[i].images == 'null' || data[i].images == '')
                    {
                        pr_img = 'assets/images/no-img.jpg';
                    }
					else
					{
						pr_img = data[i].images[0];
					}

                    //alert(img_str_json);
        			str +='<div class="ui-block-a ">';
            		str +='<div class="shop-thumb">';
					str +='<div class="social_share">';
                    //str +='<a href="javascript:addtowish(\''+data[i].itemcode+'\',\''+data[i].id+'\',\''+data[i].itemname+'\',\''+data[i].mrp+'\',\''+i+'\',\'qty'+i+'\',\''+data[i].size+'\');" class="ui-link"><img src="assets/images/like_icon.png" alt=""></a>';
                   // str +='<a href="javascript:shareProduct(\''+data[i].images[0]+'\')" class="ui-link"><img src="assets/images/share_icon.png" alt=""></a>';
				   //str +='<label class="container"><input type="checkbox" name="share_pr" value="'+data[i].itemcode+'#'+data[i].itemname+'#'+data[i].description+'#'+data[i].images[0]+'" class="shareapp"><span class="checkmark"></span></label>';
                
					str +='</div>';
                	str +='<a href="javascript:showshopdetail(\''+data[i].itemcode+'\');">';
                    str +='<img src="'+pr_img+'" class="img-responsive"/></a>';
                   // str +='<img src="'+shopcmsurl+'uploads/products/'+imgurlmain+'.jpg" class="humbleLightbox img-responsive" alt=""/></a>';
                    str +='<div class="description">';
                	var sz = data[i].size;
                    if(typeof sz == undefined ||typeof sz == 'undefined' || sz == null || sz == 'null')
                    {
                       str +='<h3 class="product_name">'+data[i].itemname+'</h3>';     
                    }
                    else
                    {
                        str +='<h3 class="product_name">'+data[i].itemname+ '-'+ data[i].size+'</h3>';
                    }
                    str +='<h2 class="price">INR '+data[i].mrp+'</h2>';
					//str +='<table><tr><td>Qty:</td><td><input type="number" data-role="none" min="1" name="qty'+i+'" id="qty'+i+'" value="1" title="Qty" class="qty"></td></tr>';
                    //str +='</table>';
                 

                   var description=data[i].description;
                    if(data[i].productyoutubelink!=null &&  data[i].productyoutubelink!='' )
                    	description='Product Video\n'+data[i].productyoutubelink+'\n'+description;
                    console.log(description);
                 

                   str +=' <div class=\"ui-grid-b\ social_share_list">';
                  str +='<div class=\"ui-block-a\">  <img src=\"assets/images/other.png\" class=\"img-responsive\"   onclick="javascript:shareProductsOther(\''+data[i].itemcode+'\',\''+data[i].itemname.trim()+'\',\''+description.trim().replace(/\"/g, "").replace(/[\n\r]/g, '\\n')+'\',\''+pr_img+'\');"/>  </div>';
                 if(deviceType=='Android')
                 str +=' <div class=\"ui-block-b\"> <img src=\"assets/images/fb.png\" class=\"img-responsive\"  onclick="javascript:shareProductsFb(\''+data[i].itemcode+'\',\''+data[i].itemname.trim()+'\',\''+description.trim().replace(/\"/g, "").replace(/[\n\r]/g, '\\n')+'\',\''+pr_img+'\');"/></div>';
               
                 if(deviceType=='Android')
                 str +=' <div class=\"ui-block-c\"> <img src=\"assets/images/wapp.png\" class=\"img-responsive\"  onclick="javascript:shareProducts(\''+data[i].itemcode+'\',\''+data[i].itemname.trim()+'\',\''+description.trim().replace(/\"/g, "").replace(/[\n\r]/g, '\\n')+'\',\''+pr_img+'\');"/></div>';
                else
                	 str +=' <div class=\"ui-block-c\"> <img src=\"assets/images/wapp.png\" class=\"img-responsive\"  onclick="javascript:shareProductsios(\''+data[i].itemcode+'\',\''+data[i].itemname.trim()+'\',\''+description.trim().replace(/\"/g, "").replace(/[\n\r]/g, '\\n')+'\',\''+pr_img+'\');"/></div>';
                
                str +='</div>';


                //    str +='<div><button onclick="javascript:shareProducts(\''+data[i].itemcode+'\',\''+data[i].itemname.trim()+'\',\''+data[i].description.trim()+'\',\''+data[i].images[0]+'\');" class="add_to_cart" data-role="none">Share</button></div>';
					str +='</div>';
					str +='</div>';
                
					str +='</div>';
					}


                    console.log(data[(i+1)]);
                    
					if(typeof data[(i+1)] !='undefined')
					{
                        
					if((i+1)%2==1)
					{
					
					var imgurl= data[i+1].itemcode;
					var imgurlmain= imgurl.trim();
                    /*var imgslider = JSON.parse(JSON.stringify(data[i+1].images));
                    var imgstr = [];
                    for(var j=0;j<imgslider.length;j++)
                    {
                        imgstr.push(imgslider[j]);
                    }*/

                    var img_str_json1=JSON.stringify(data[i+1].images).replace(/"/g, '');
                    //var img_str_json=JSON.stringify(img_str);


					var pr_img = '';
				    if(typeof data[i+1].images == undefined ||typeof data[i+1].images == 'undefined' || data[i+1].images == null || data[i+1].images == 'null' || data[i+1].images == '')
                    {
                        pr_img = 'assets/images/no-img.jpg';    
                    }
					else
					{
						pr_img = data[i+1].images[0];
					}

					str +='<div class="ui-block-b">';
            		str +='<div class="shop-thumb">';
					str +='<div class="social_share">';
                    //str +='<a href="javascript:addtowish(\''+data[i+1].itemcode+'\',\''+data[i+1].id+'\',\''+data[i+1].itemname+'\',\''+data[i+1].mrp+'\',\''+(i+1)+'\',\'qty'+(i+1)+'\',\''+data[i+1].size+'\');" class="ui-link"><img src="assets/images/like_icon.png" alt=""></a>';
					//str +='<a href="javascript:shareProduct(\''+data[i+1].images[0]+'\')" class="ui-link"><img src="assets/images/share_icon.png" alt=""></a>';
					//str +='<label class="container"><input type="checkbox" name="share_pr" value="'+data[i+1].itemcode+'#'+data[i+1].itemname+'#'+data[i+1].description+'#'+data[i+1].images[0]+'" class="shareapp"><span class="checkmark"></span></label>';
                
                    str +='</div>';
					str +='<a href="javascript:showshopdetail(\''+data[i+1].itemcode+'\');">';
                    //str +='<img src="'+shopcmsurl+'uploads/products/'+imgurlmain+'.jpg" class="humbleLightbox img-responsive" alt=""/>';
                    str +='<img src="'+pr_img+'" class="img-responsive"/></a>';
                    str +='<div class="description">';
                	var sz = data[i+1].size;
                    if(typeof sz == undefined ||typeof sz == 'undefined' || sz == null || sz == 'null')
                    {
                       str +='<h3 class="product_name">'+data[i+1].itemname+'</h3>';     
                    }
                    else
                    {
                        str +='<h3 class="product_name">'+data[i+1].itemname+ '-'+ data[i+1].size+'</h3>';
                    }
                    str +='<h2 class="price">INR '+data[i+1].mrp+'</h2>';
					//str +='<table><tr><td>Qty:</td><td><input type="number" data-role="none" min="1" name="qty'+(i+1)+'" id="qty'+(i+1)+'" value="1" title="Qty" class="qty"></td></tr>';
                    //str +='</table>';

                     var description=data[i+1].description;
                    if(data[i+1].productyoutubelink!=null &&  data[i+1].productyoutubelink!='' )
                    	description='Product Video\n'+data[i+1].productyoutubelink+'\n'+description;


                     str +=' <div class=\"ui-grid-b\ social_share_list">';
                  str +='<div class=\"ui-block-a\">  <img src=\"assets/images/other.png\" class=\"img-responsive\"   onclick="javascript:shareProductsOther(\''+data[i+1].itemcode+'\',\''+data[i+1].itemname.trim()+'\',\''+description.trim().replace(/\"/g, "").replace(/[\n\r]/g, '\\n')+'\',\''+pr_img+'\');"/>  </div>';
                  if(deviceType=='Android')
                 str +=' <div class=\"ui-block-b\"> <img src=\"assets/images/fb.png\" class=\"img-responsive\"   onclick="javascript:shareProductsFb(\''+data[i+1].itemcode+'\',\''+data[i+1].itemname.trim()+'\',\''+description.trim().replace(/\"/g, "").replace(/[\n\r]/g, '\\n')+'\',\''+pr_img+'\');"/></div>';
                 if(deviceType=='Android')
                 str +=' <div class=\"ui-block-c\"> <img src=\"assets/images/wapp.png\" class=\"img-responsive\"  onclick="javascript:shareProducts(\''+data[i+1].itemcode+'\',\''+data[i+1].itemname.trim()+'\',\''+description.trim().replace(/\"/g, "").replace(/[\n\r]/g, '\\n')+'\',\''+pr_img+'\');"/></div>';
                else
                	 str +=' <div class=\"ui-block-c\"> <img src=\"assets/images/wapp.png\" class=\"img-responsive\"  onclick="javascript:shareProductsios(\''+data[i+1].itemcode+'\',\''+data[i+1].itemname.trim()+'\',\''+description.trim().replace(/\"/g, "").replace(/[\n\r]/g, '\\n')+'\',\''+pr_img+'\');"/></div>';
                

                str +='</div>';
				 // str +='<div><button onclick="javascript:shareProducts(\''+data[i+1].itemcode+'\',\''+data[i+1].itemname.trim()+'\',\''+data[i+1].description.trim()+'\',\''+data[i+1].images[0]+'\');" class="add_to_cart" data-role="none">Share</button></div>';
                    str +='</div>';
					str +='</div>';
                
					str +='</div>';
					}
					}
					str +='</div>';

					i=i+2;
					
				}
				
				document.getElementById("prdctlist").innerHTML=str;
				

				
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

}


function shareProducts1()
{
    var favorite = [];

    var description='';

   // var shopurl=shopcmsurl+'welcome/getProductDetails/5/'+icode+'/'+gbrd+'/'+user.store_id;

    
//var i=1;
    $("input:checkbox[name=share_pr]:checked").each(function() {
       
      // url=url+encodeURI($(this).val())+"%0D%0A";
        
       // var fileTransfer = new FileTransfer();
        var wdata = $(this).val();

       

        var dt=wdata.split('#');

        var shopurl=SERVER+'welcome/getProductDetails/5/'+dt[0]+'/'+gbrd+'/'+user.store_id;

       console.log(shopurl);


        

       // var shopurl=SERVER+'welcome/getProductDetails/5/'+dt[0]+'/'+gbrd+'/'+user.store_id;


        description=description+dt[2]+'\n\n'+shopurl+'\n\n';

        
        favorite.push(dt[3]);

        
        });

     if(favorite.length>0){
    
      window.plugins.socialsharing.shareWithOptions({
                      subject: 'Share and Buy',
                      message: description,
                      url: '',
                      files: favorite
                    },
                    function() {console.log('share ok')},
                    function(errormsg){ alert("Error: " + errormsg)}
            );
     }
     else
     {
        alert('Please select items');
     }

     



    
  }

function shareProductsCatFb(catcode,catname)
{


  var shopurl=SERVER+'welcome/showShop/'+gbrd+'/'+user.store_code+'/'+catcode;
  console.log('shopurl:'+shopurl);


    try{
     window.plugins.socialsharing.shareViaFacebook
     (
      shopurl,
      null,
      null,
      function() {}, 
      function(errormsg){alert(errormsg)}
      );
	
	}
	catch(ex)
	{
		toast("Sharing not supported!");
		//$('#sharepop').remove();
	}




	 
      
       

   
/*

	   showPOPup();
	   var imgshared=false;
	
	//return false;
	
       var shopurl=SERVER+'welcome/getProductDetails/5/'+icode+'/'+user.store_id+'/'+user.id;

       console.log(shopurl);
       var des=description+'\n'+shopurl;


        try{
     window.plugins.socialsharing.shareViaWhatsApp
     ('',iimage, null,
      function() {document.getElementById('simages').src='assets/images/verify_icon.png';alert('Image shared successfull..Sharing description');shareDescription(''+des+'')}, 
      function(errormsg){alert(errormsg)});
	
	}
	catch(ex)
	{
		toast("Sharing not supported!");
		$('#sharepop').remove();
	}

    */



	
}

function shareProductsCat(catcode,catname)
{


//https://mliveshare.com/welcome/showShop/97FEECAD-72B0-4FA9-AF12-DC2C719C8657/1/2049



	 
       var shopurl=SERVER+'welcome/showShop/'+gbrd+'/'+user.store_code+'/'+catcode;
       console.log('shopurl:'+shopurl);

      try{
	 window.plugins.socialsharing.shareWithOptions({
                      subject:catname,
                      message: catname,
                      url: shopurl,
                      files: '',
                      chooserTitle: 'WhatsApp', // Android only, you can override the default share sheet title
  					  appPackageName: 'com.whatsapp', // Android only, you can provide id of the App you want to share with
                    },
                    function() {console.log('share ok');},
                    function(errormsg){ alert("Error: " + errormsg)}
            );
	}
	catch(ex)
	{
//$('#sharepop').remove();
	}

       

   
/*

	   showPOPup();
	   var imgshared=false;
	
	//return false;
	
       var shopurl=SERVER+'welcome/getProductDetails/5/'+icode+'/'+user.store_id+'/'+user.id;

       console.log(shopurl);
       var des=description+'\n'+shopurl;


        try{
     window.plugins.socialsharing.shareViaWhatsApp
     ('',iimage, null,
      function() {document.getElementById('simages').src='assets/images/verify_icon.png';alert('Image shared successfull..Sharing description');shareDescription(''+des+'')}, 
      function(errormsg){alert(errormsg)});
	
	}
	catch(ex)
	{
		toast("Sharing not supported!");
		$('#sharepop').remove();
	}

    */



	
  }

function shareProducts(icode,iname,description,iimage)
{

	

	 
       var shopurl=SERVER+'welcome/getProductDetails/5/'+icode+'/'+gbrd+'/'+user.store_code;

      
      try{
	 window.plugins.socialsharing.shareWithOptions({
                      subject: iname,
                      message: description,
                      url: shopurl,
                      files: [iimage],
                      chooserTitle: 'WhatsApp', // Android only, you can override the default share sheet title
  					  appPackageName: 'com.whatsapp', // Android only, you can provide id of the App you want to share with
                    },
                    function() {console.log('share ok');},
                    function(errormsg){ alert("Error: " + errormsg)}
            );
	}
	catch(ex)
	{
//$('#sharepop').remove();
	}

       
/*
   


	   showPOPup();
	   var imgshared=false;
	
	//return false;
	
     //  var shopurl=SERVER+'welcome/getProductDetails/5/'+icode+'/'+user.store_id+'/'+user.id;

       console.log(shopurl);
       var des=description+'\n'+shopurl;


        try{
     window.plugins.socialsharing.shareViaWhatsApp
     ('',iimage, null,
      function() {document.getElementById('simages').src='assets/images/verify_icon.png';alert('Image shared successfull..Sharing description');shareDescription(''+des+'')}, 
      function(errormsg){alert(errormsg)});
	
	}
	catch(ex)
	{
		toast("Sharing not supported!");
		$('#sharepop').remove();
	}

    */



	
  }

  function shareProductsios(icode,iname,description,iimage)
{

	 
      
       

   


	   showPOPup();
	   var imgshared=false;
	
	//return false;
	
       var shopurl=SERVER+'welcome/getProductDetails/5/'+icode+'/'+gbrd+'/'+user.store_code;

       console.log(shopurl);
       var des=description+'\n'+shopurl;


        try{
     window.plugins.socialsharing.shareViaWhatsApp
     ('',iimage, null,
      function() {document.getElementById('simages').src='assets/images/verify_icon.png';shareDescription(''+des+'')}, 
      function(errormsg){alert(errormsg)});
	
	}
	catch(ex)
	{
		toast("Sharing not supported!");
		$('#sharepop').remove();
	}

    



	
  }


  function shareProductsFb(icode,iname,description,iimage)
{


	   showPOPup();

	   
       var shopurl=SERVER+'welcome/getProductDetails/5/'+icode+'/'+gbrd+'/'+user.store_code;

       console.log(shopurl);
       var des=description+'\n'+shopurl;


        try{
     window.plugins.socialsharing.shareViaFacebook
     (null,iimage, null,
      function() {document.getElementById('simages').src='assets/images/verify_icon.png';shareDescriptionFb(''+des+'');}, 
      function(errormsg){alert(errormsg)});
	
	}
	catch(ex)
	{
		toast("Sharing not supported!");
		$('#sharepop').remove();
	}


      // window.open(shopurl);

/*
     try{
     window.plugins.socialsharing.shareViaWhatsApp
     ('',iimage, shopurl,
      function() {document.getElementById('simages').src='assets/images/arrow.png'; window.plugins.socialsharing.shareViaWhatsApp
     (description+'\n'+shopurl,null, null,
      function() {document.getElementById('sdesc').src='assets/images/arrow.png';$('#sharepop').remove();}, 
      function(errormsg){alert(errormsg)});}, 
      function(errormsg){alert(errormsg)});
	
	}
	catch(ex)
	{
		toast("Sharing not supported!");
		//$('#sharepop').remove();
	}
	*/
	/* window.plugins.socialsharing.shareWithOptions({
                      subject: iname,
                      message: description,
                      url: shopurl,
                      files: [iimage]
                    },
                    function() {console.log('share ok');showPOPup();},
                    function(errormsg){ alert("Error: " + errormsg)}
            );
       */

   
   



	
  }

 function shareProductsOther(icode,iname,description,iimage)
{


	 
       var shopurl=SERVER+'welcome/getProductDetails/5/'+icode+'/'+gbrd+'/'+user.store_code;

       console.log(shopurl);
      try{
	 window.plugins.socialsharing.shareWithOptions({
                      subject: iname,
                      message: description,
                      url: shopurl,
                      files: [iimage]
                    },
                    function() {console.log('share ok');},
                    function(errormsg){ alert("Error: " + errormsg)}
            );
	}
	catch(ex)
	{

	}

       

   
   



	
  }




function shareDescription(desc)
{

	  try{
     window.plugins.socialsharing.shareViaWhatsApp
     (
      desc,
      null,
      null,
      function() {document.getElementById('sdesc').src='assets/images/verify_icon.png';$('#sharepop').remove();}, 
      function(errormsg){alert(errormsg)}
      );
	
	}
	catch(ex)
	{
		toast("Sharing not supported!");
		//$('#sharepop').remove();
	}
}

function shareDescriptionFb(desc)
{

	  try{
     window.plugins.socialsharing.shareViaFacebook
     (
      desc,
      null,
      null,
      function() {document.getElementById('sdesc').src='assets/images/verify_icon.png';$('#sharepop').remove();}, 
      function(errormsg){alert(errormsg)}
      );
	
	}
	catch(ex)
	{
		toast("Sharing not supported!");
		//$('#sharepop').remove();
	}
}
function showLivemonitor()
{

    console.log('sssss');
  
  //document.getElementById("lmdiv").innerHTML = '';

    /* today date */

 $.mobile.changePage( "#homepageshare", { transition: "none"} );

    if(localStorage.getItem('LoginType')=='1')
    	user.id='1';


    console.log("setTimeout");
        console.log(SERVER+'getcat/get_orders_api/'+gbrd+'/'+user.store_code);
  $.ajax({      
    url: SERVER+'getcat/get_orders_api/'+gbrd+'/'+user.store_code,
    type: 'GET',
    
    dataType: 'json',
    //data: {'bid': user.brand_id ,'store_code': user.store_code ,'from_date': fdate,'to_date': tdate },
   // complete: poll,
    timeout: 50000,
    success: function(data, textStatus, xhr) {

        console.log('JSONDATA:'+JSON.stringify(data));

        //var data = {"GET_LIVEMONITOR_DATAResult":{"BurnPoint":"100","DataReceived":"N\/A","LoyaltyBill":"100000","LoyaltySale":"50000","RepeatBill":"22","Success":false,"TotalBill":"120","TotalLiveStore":"5","TotalPurchase":"200","message":"Authentication failed","methodname":"GET_CONNECTION_DATA","output":{"response":[{"SNo":"1","bill_date":"26 jan 2019","bill_no":"BILL12345","customer_mobile":"9876543210","customer_name":"Rajiv Singh","net_amount":"120","store_code":"0018","store_name":"My store","type":"N\/A"},{"SNo":"1","bill_date":"26 jan 2019","bill_no":"BILL12345","customer_mobile":"9876543210","customer_name":"Rahul Singh","net_amount":"120","store_code":"0018","store_name":"My store","type":"N\/A"}]}}};
      
    //  document.getElementById("bd_name").innerHTML = '';
        
    //  document.getElementById("net_sales").innerHTML = '<span>'+data.amount+'</span>';

        //document.getElementById("rep_sales").innerHTML = '<span>'+data.GET_LIVEMONITOR_DATAResult.RepeatBill+'</span>';
    
    //  document.getElementById("loy_sales").innerHTML = '<span>'+data.amount+'</span>';
        
        
        
        var str='';
            str+='<div class="sale_data">';

    if(data.length>0){

        for(var i=0;i<data.length;i++)
        {

                  var selectstrnew='';
                  var selectstract='';
                  var selectstrrej='';
                  var selectstrdis='';
                
                 str+='<div class="customer">';
                
               


                
                

              //  str+='<div class="cust_pic"><img src="assets/images/profile1.png" class="img-responsive" alt=""></div>';
                str+='<div class="primary_block">';

                if(data[i].order_status=='1'){
                  // str+='<div class="customer">';
                   selectstrnew='selected';
					str+='<div class="profile_pic"><div id="verifydiv"  class="verify"><img src="assets/images/new-order.png" class="img-responsive" alt=""/></div></div>';
                  }

                  if(data[i].order_status=='2'){
                  // str+='<div class="customeract">';
                   selectstract='selected';
				   str+='<div class="profile_pic"><div id="verifydiv"  class="verify"><img src="assets/images/verify_icon.png" class="img-responsive" alt=""/></div></div>';
               }

              	 if(data[i].order_status=='3'){
                  // str+='<div class="customerrej">';
                   selectstrrej='selected';
					str+='<div class="profile_pic"><div id="verifydiv"  class="verify"><img src="assets/images/cross.png" class="img-responsive" alt=""/></div></div>';
               }

              	 if(data[i].order_status=='4'){
                   //str+='<div class="customerdis">';
                   selectstrdis='selected';
				   str+='<div class="profile_pic"><div id="verifydiv"  class="verify"><img src="assets/images/dispathched.png" class="img-responsive" alt=""/></div></div>';
               }
	

                 str+='<div class="ui-grid-b" style="background: floralwhite;"><div class="ui-block-a">Customer Name</div><div class="ui-block-b"><span>'+data[i].name+' (<a href=tel://'+data[i].phone+'>'+data[i].phone+'</a>)</h3></span></div></div>';
               
               
                
                 str+='<div class="ui-grid-b" style="background: floralwhite;"><div class="ui-block-a">Bill Date</div><div class="ui-block-b"><span>'+data[i].created+'</span></div></div>';
               


                str+='<div class="ui-grid-b" style="background: floralwhite;"><div class="ui-block-a">Bill Number</div><div class="ui-block-b"><span>'+data[i].reference_no+'</span></div></div>';
               
                str+='<div class="ui-grid-b" style="background: floralwhite;"><div class="ui-block-a">Item Name</div><div class="ui-block-b"><span>'+data[i].item+'</span></div></div>';
               

                 str+='<div class="ui-grid-b" style="background: floralwhite;"><div class="ui-block-a">Net Amt</div><div class="ui-block-b"><span>'+data[i].amount+'</span></div></div>';
               
                

                str+='<div class="ui-grid-b" style="background: floralwhite;"><div class="ui-block-a">Address</div><div class="ui-block-b"><span>'+data[i].address+' '+data[i].city+' '+data[i].state+' '+data[i].postal_code+'</span></div></div>';
                

                if(localStorage.getItem("usernamemloyal_share")=='helpdesk' || localStorage.getItem("usernamemloyal_share")=='mapp_login' || localStorage.getItem("LoginType")=='1')
				{


                   str+='<div class="ui-grid-b" ><div class="ui-block-a">Change Order Status</div><div class="ui-block-b"><select id=\'ordertype'+data[i].id+'\' name=\'ordertype'+data[i].id+'\' onchange=javascript:changeOrder(\''+data[i].id+'\');><option value=1 '+selectstrnew+'>New</option>><option value=2 '+selectstract+'>Accepted</option>><option value=3 '+selectstrrej+'>Rejected</option><option value=4 '+selectstrdis+'>Dispatched</option></select></div></div>';

					

					

				}
				else
				{

					  str+='<div class="ui-grid-b" ><div class="ui-block-a"> Order Status</div><div class="ui-block-b"><select id=\'ordertype'+data[i].id+'\' name=\'ordertype'+data[i].id+'\' onchange=javascript:changeOrder(\''+data[i].id+'\'); disabled><option value=1 '+selectstrnew+'>New</option>><option value=2 '+selectstract+'>Accepted</option>><option value=3 '+selectstrrej+'>Rejected</option><option value=4 '+selectstrdis+'>Dispatched</option></select></div></div>';


				}


               str+='<div class="ui-grid-b" style="background: floralwhite;"><div class="ui-block-a">Dealer Name :'+data[i].first_name+'</div><div class="ui-block-b">Commission : '+data[i].commission+'</div></div>';


                str+='<div class="wp_link"><a href="https://api.whatsapp.com/send?phone=91'+data[i].phone+'" class="ui-link"><img src="assets/images/wp_icon.png" class="img-responsive" alt=""></a></div>';
                
               
                

                str+='</div>';
                
                             
                str+='</div>';


        }

         str+='</div>';

         document.getElementById("lmdiv").innerHTML = str;
    }
    else
    {

        str='No order found!!'

        $.mobile.changePage('#failpage');

    }
               
               
                
       
  
    },
    error: function(xhr, textStatus, errorThrown) {
        toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

 
 
}

function changeOrder(orderid)
{
	//alert(orderid);

	var st=$('#ordertype'+orderid).val();

	 $.ajax({
   
    url: SERVER+'getcat/changeOrderSt',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'id': orderid,'status':st},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
		console.log('Data2:'+JSON.stringify(data));

		if(data.success=='1')
				{
					

					showLivemonitor();
					$.mobile.changePage('#homepageshare');

					

					
				}
				else
				{
					toast(data.msg);
					
				}
       
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });

}

function showProductnew()
{
	loadCateg();
	
  $.ajax({
   
    url: SERVER+'getcat/getitems/'+gbrd,
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: { },
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
		console.log('Data2:'+JSON.stringify(data));
        var str = '';
        
			  str +='<div class="table-responsive">';
			  str +='<table class="table couter_list bg-dark">';
			  str +='<thead class="table_header"><th>Product Name</th><th>Category</th><th>Photo</th><th>Action</th></thead>';
				
			  for (var i = 0; i < data.length; i++)
			  {

				var pr_img = '';
				if(typeof data[i].images == undefined ||typeof data[i].images == 'undefined' || data[i].images == null || data[i].images == 'null' || data[i].images == '')
                {
                      pr_img = '';
                }
				else
			    {
				      pr_img = data[i].images[0];
				}

				str+='<tr>';
				str+='<td>'+checkforundefined(data[i].itemname)+' ('+checkforundefined(data[i].description)+')</td>';
				//str+='<td>'+checkforundefined(data[i].description)+ '</td>';
				str+='<td>'+checkforundefined(data[i].catid)+ '</td>';
				str+='<td><div class="manage_img"><img src="'+pr_img+'" class="img-responsive" alt=""/></div></td>';
			    str+='<td><div class="delete_img"><img src="assets/images/trash.png" class="img-responsive" alt="" onClick="javascript:delproduct(\''+data[i].id+'\');"/></div></td>';
				str+='</tr>';
              } 

			  str +='</table>';
			  str +='</div>';




			  document.getElementById("product_list1").innerHTML=str;
			  $.mobile.changePage('#manageproduct');
   
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });
	 
	 
}

function delproduct(itemcode)
{

  var result = confirm("Are you sure to delete the product?");

  if(result)
  {
		
   $.ajax({
   
    url: SERVER+'getcat/delItem',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'id': itemcode},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
		console.log('Data2:'+JSON.stringify(data));

		if(data.success=='1')
				{
					toast('Deleted Successfully!!')

					$.mobile.changePage('#manageproduct');

					showProductnew();

					
				}
				else
				{
					toast(data.msg);
					
				}
       
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });

  }
  else
  {
		//toast('product not deleted');
		console.log('product not deleted');
	  
  }


}

function deldealer(dcode)
{

  var result = confirm("Are you sure to delete the dealer?");

  if(result)
  {
	  
   $.ajax({
   
    url: SERVER1+'deact_dealer',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'uid': dcode},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
		console.log('Data2:'+JSON.stringify(data));

		if(data.success=='1')
				{
					toast('Deleted Successfully!!')

					$.mobile.changePage('#mdealer');

					showDealers();

					
				}
				else
				{
					toast(data.msg);
					
				}
       
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });
}
else
{
		//toast('dealer not deleted');
		console.log('dealer not deleted');
	  
}


}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function formatName(str)
{
	if(typeof str==undefined || str=='undefined'|| str==null || str=='null' || str=='')
    {
        str='#';
    }
        return str;
}

function removeHash(str)
{
	return str.replace('#','');
}



function showNotifications()
{

//var noofnotifications=0;

if(typeof user.mobile==undefined || typeof user.mobile=='undefined' || user.mobile==null || user.mobile=='null')
{
    user.mobile='';
}

 else
 {
 	$.mobile.changePage( "#notificationspg", {transition: "none"} );
//http://goldmedalelectricals.mloyalprecise.com/apis/app_notification_offer_json_api.asp?mobileno=XXXXXXXXXX&apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14

 $.ajax({
   //url: SERVER2+'app_notification_offer_json_api.asp',
    url:SERVER+'msg_history_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'mno': user.mobile},
    //data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile},
    complete: function(xhr, textStatus) {
		//called when complete
    },
    success: function(json, textStatus, xhr) {
        
		//console.log('JsonDataN:'+JSON.stringify(data));
		var str='';

		 /*for(var i=0;i<data.data.length;i++ )
		 {

			var myoffer= data.data[i].OfferName;*/

			/*if(myoffer.indexOf("Birthday Offer")>=0 || myoffer.indexOf("Bday Offer")>=0 || myoffer.indexOf("birthday offer")>=0 || myoffer.indexOf("bday offer")>=0)
			 {
				str += '<div class="ui-grid-solo" onClick="javascript:showbdayPage();">';
				str += '<span class="NotifyBdr">';
				str += '<span class="notifyhdr">'+data.data[i].OfferName+'<span style="color:#ED2A2E;font-size: 12px;">  Avail Now</span></span>';
				str += '<span class="msgDate">'+data.data[i].OfferCreatedOn+'</span>';
				str += '<span class="NotifyTxt">'+data.data[i].OfferSMSText+'</span>';
				str += '</span></div>';
			 }
			 else
			 {*/
				/*str += '<div class="ui-grid-solo">';
				str += '<span class="NotifyBdr">';
				str += '<span class="notifyhdr">'+data.data[i].OfferName+'</span>';
				str += '<span class="msgDate">'+data.data[i].OfferCreatedOn+'</span>';
				str += '<span class="NotifyTxt">'+data.data[i].OfferSMSText+'</span>';
				str += '</span></div>';*/
			 //}
			
		
		// }
		 str +=' <ul data-role="listview" data-inset="true" id="MsgUl">';
		 for(var i=0;i<json.length;i++ )
		{
			 if(json[i].msg.indexOf('OTP is')==-1)
			{
			str += '<li data-icon="false">';
			str += '<div class="ui-grid-a"><div class="ui-block-a" style="width:15%;">';
			str += '<img src="img/open.png" class="msgImg"/>';
			str += '</div><div class="ui-block-b" style="width:85%;">';
			str += '<div class="MsgBlk"><span class="MsgBdr">';
			str += '<span class="msghdr">DM-GOLD MEDAL</span><span class="msgTime">'+json[i].msgtime+'</span>';
			str += '<span class="msgDate">' + json[i].msgdate + '</span>';
			str += '<span class="msgTxt">'+json[i].msg+'</span>';
			str += '</span></div></div></div></li>';
			}
		}
		str += '</ul>';
		

		document.getElementById("notify_div").innerHTML=str;
   
    },
    error: function(xhr, textStatus, errorThrown) {
		toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

 }

}



function showNotifications1()
{

var noofnotifications=0;

if(typeof user.mobile==undefined || typeof user.mobile=='undefined' || user.mobile==null || user.mobile=='null')
{
    user.mobile='';
}
else
{

 var mylist = JSON.parse(localStorage.getItem("notificationlist_gm"))||[];

 $.ajax({
   url: SERVER2+'app_notification_offer_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile},
    complete: function(xhr, textStatus) {
		//called when complete
    },
    success: function(data, textStatus, xhr) {
        
		//console.log('JsonDataN:'+JSON.stringify(data));
		var str='';

		 for(var i=0;i<data.data.length;i++ )
		 {

			var myoffer= data.data[i].OfferName;

            for(var j=0;j<mylist.length;j++)
			{
			 var elem = mylist[j];
			 
			 if(elem.indexOf(myoffer)<=-1)
				{
				
				mylist.push(myoffer+'|1');
				localStorage.setItem("notificationlist_gm",JSON.stringify(mylist));
			
				}
				var em = elem.split('|');
				if(em[1] == '1')
				{
				   noofnotifications = noofnotifications + 1; 
				}
			
			}		
		
		 }
		   //console.log('badge_count:'+noofnotifications);
		   
		   if(noofnotifications>=1)
			{
				$("#badge_count").css('display', 'block');
				$('#badge_count').text(noofnotifications);
			}
   
    },
    error: function(xhr, textStatus, errorThrown) {
		toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

 }

}



function showGeolocation1()
{
	user.latitude_gm='';
	user.longitude_gm='';

	if (navigator.geolocation)
	{
        navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError);
    } 
	else
	{
        toast('Location could not be traced..');
    }
	
}

function showGeolocation()
{
 cordova.plugins.locationAccuracy.request(
          function() {
            console.log("testhigh success");
            setTimeout(function() {
              getPosition();
            }, 1500);
          },
          function() {
            console.log("error");
          },
          cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY
        );
}
function getPosition() {
         navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError);
}


function geolocationSuccess(position) 
{
		//var latlng = position.coords.latitude+','+position.coords.longitude;

		
		
		user.latitude_gm = position.coords.latitude;
		user.longitude_gm = position.coords.longitude;

		
}

   
function geolocationError(error) {
        toast('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
}


function ValidateEmail(email)   
{  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))  
  {  
    return (true);  
  }  
    //toast("You have entered an invalid email address!");  
    return (false);
}

function checkpin(str)
{
	var str1 = $('#'+str).val();

	if(str1.length==6)
	{
		return (true);
		
	}
	toast('Invalid Pin');
	$('#'+str).val('');
	return (false);
}

function checkaadhar(str)
{
	var str1 = $('#'+str).val();

	if(str1.length==12)
	{
		checkproofvalidity('AADHAR',str);
		return (true);
		
	}
	toast('Invalid Aadhar Card No');
	$('#'+str).val('');
	return (false);
}
function checkpan(str)
{
	var str1 = $('#'+str).val();
	var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
	if(regpan.test(str1))
	{
		checkproofvalidity('PAN',str);
		return(true);
	}
	toast('Invalid Pan No');
	$('#'+str).val('');
	return (false);
}


function checkgst(str)
{
	var str1 = $('#'+str).val();
	var regpan = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
	if(regpan.test(str1))
	{
		checkproofvalidity('GST',str);
		return(true);
	}
	toast('Invalid GSTIN');
	$('#'+str).val('');
	return (false);
}

function checkemail(str)
{
	var str1 = $('#'+str).val();
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str1))  
  {  
    return (true);  
  }  
    toast("You have entered an invalid email address!"); 
	$('#'+str).val('');
    return (false);
}
function checkonlytext(str)
{
	var str1 = $('#'+str).val();
	
	if (/^[a-zA-Z]*$/g.test(str1))  
	  { 
	   return (true);  
	  }  
	  $('#'+str).val('');
   toast("You have entered an invalid character!");
     return (false);

}

function checkbankac(str)
{
	var str1 = $('#'+str).val();

	if(str1.length<=20)
	{
		return (true);
		
	}
	toast('Invalid Bank A/c No');
	$('#'+str).val('');
	return (false);
}
function checkifsc(str)
{
	var str1 = $('#'+str).val();

	if(str1.length==11)
	{
		return (true);
		
	}
	toast('Invalid IFSC Code');
	$('#'+str).val('');
	return (false);
}

function checkmobile(mob)
{
	var mobile = $('#'+mob).val();
	//alert(mobile);
	//alert(mobile.match('[0-9]{10}'));*/
	
    //var filter = /^[6-7][0-9-+]+$/;
    //if (filter.test(mobile)) {
    var firstelem = mobile.charAt(0);

    if(parseInt(firstelem)>5 && parseInt(firstelem)<10 && mobile.length==10)
    {
        return true;
    }
    else {
		
		//for development purpose only
		
		//$.mobile.changePage( "#transferpointspg1", { transition: "slide"} );
		
		//for development purpose only
		
    	alert("Please put valid 10 digit mobile number");
        $('#'+mob).val('');
        return false;
		
		//for development purpose only
		
		
    }
}


function showdashboard()
{
	$('#username').val(localStorage.getItem("usernamegold"));
									var pass = localStorage.getItem("passwordgold");
										 if(pass.length>=4)
										   {
										   var i=4;
										   while(i>0)
													  {
														$('#codeBox'+i).val(parseInt(pass%10));
														i--;
														pass = parseInt(pass/10);
														
													  }
											}
										  
										   user.mobile=localStorage.getItem("usernamegold");
										   
										   // $("#wait").css("display","block"); // hide it initially
										   toast("Please wait..");
											authenticate();
											showhome();
}




function fromlanding()
{
	
	//$.mobile.changePage( "#selectcategorypage", { transition: "slide"} );//FOR TAG SHARE
	$.mobile.changePage( "#login_pg", { transition: "slide"} );
}




 function sharephoto()
 {

			var imageLink;
            console.log('Calling from CapturePhoto');
            navigator.screenshot.save(function(error,res){
            if(error){
            alert(error);
            }else{
            console.log('ok',res.filePath); //should be path/to/myScreenshot.jpg
            //For android
            imageLink = res.filePath;
           window.plugins.socialsharing.share(null, null,'file://'+imageLink, null);

           //For iOS
           //window.plugins.socialsharing.share(null,   null,imageLink, null)
     }
     },'jpg',50,'myScreenShot');
 }







function gobackfromwhatsnew()
{
	// $('iframe').attr('src', $('iframe').attr('src'));
    //alert(vidlen);
	/*for (i=0;i<parseInt(vidlen);i++){

		// alert('#vid'+i);
		$('#vid'+i)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	 	$('#vid'+i)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
		// stopVideo($('#vid'+i));
	 }*/
	 document.getElementById('events').innerHTML = localStorage.getItem('eventdata');
	 document.getElementById('ad').innerHTML = localStorage.getItem('addata');
	 document.getElementById('product_tab').innerHTML = localStorage.getItem('proddata');
	

	 $.mobile.changePage('#whats_new');
}



function registerShop()
{

   var shoname = $('#shop_name').val();
   var shop_owner_name =  $('#shop_owner_name').val();
   var contact =  $('#shop_contact').val();
   var add = $('#shop_add').val();
   var email =   $('#shop_email').val();
   var shopcat =   $('#shop_cat').val();
   var bankname =   $('#shop_bankname').val();
   var bankac =   $('#shop_bankac').val();
   var bankifsc =   $('#shop_bankifsc').val();
   var gstinstatus =   $('#update_gst').val();
   var businesstype =$('#update_btype').val();
   var source =$('#update_src').val();
   
   var chkArray=[];
		var $checked = $('[name=pricerange]:checked');
          $checked.each(function () {
		  if(chkArray.indexOf($(this).val())==-1)
			{
			chkArray.push($(this).val());
			}
		  });
	/* we join the array separated by the comma */
	var pricerange = chkArray.join(',') ;
	
	//alert('pricerange'+pricerange.toString());

	/* declare an checkbox array */
	var chkArray1 = [];
	var $checked1 = $('[name=sellingothers]:checked');
          $checked1.each(function () {
		  if(chkArray1.indexOf($(this).val())==-1)
			{
			chkArray1.push($(this).val());
			}
		  });
	
	/* we join the array separated by the comma */
	var onlineweb;
	onlineweb = chkArray1.join(',') ;
	//alert('onlineweb'+onlineweb);

   var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
		 

   //filenmshop ='http://mliveshare.com/photo/1.jpg';


   if(shoname=='' || contact=='' || shopcat=='0' || shopcat=='null' || shopcat==null || shopcat=='undefined' || shopcat=='')
   {
		toast('Please enter mandatory fields!');
   }
   else
   {
   if($("#chck-tnc1").is(":checked"))
   {
   $.ajax({
			url: SERVER1+'create_shop_mloyal',
			type: 'GET',
			timeout: 30000,
			dataType:'json',
		  	data: {
				
				'shop_name': shoname,
				'shop_contact': contact,
				'ownername': shop_owner_name,
				'address': add,
				'email': email,
				'shopcat': shopcat,
				'shopphoto': filenmshop,
				'bankname': bankname,
				'ifsc': bankifsc,
				'accountno': bankac,
				'device_type':deviceType,
				'device_push_id':reg_id,
				'GSTINSTATUS':gstinstatus,
				'BusinessType':businesstype,
				'PriceRange':pricerange,
				'OnlineWeb':onlineweb,
				'Source':source,
				'GSTINNO':'',
				'PanCard':'',
				'storeid':gbrd
				
			},
			success: function(data, textStatus, xhr) {
				
				
				console.log('JSONDATA:'+JSON.stringify(data));

				if(data.success=='1')
				{
					$.mobile.changePage( "#thankyoushop", {transition: "flip"} );

					document.getElementById('transferfromname').innerHTML = data.user_name;
					document.getElementById('transferfromregid').innerHTML = data.pass_word;


					//$('#username_login').val(data.user_name);
					//$('#pass_login').val(data.pass_word);
					//$('#shopid').val(data.store_id);

				
					//localStorage.setItem("usernamemloyal_share",data.user_name);
					//localStorage.setItem("userpassloyal_share",data.pass_word);
					//localStorage.setItem("bid",data.store_id);


				


					
				}
				else
				{
					//toast(data.msg);
					document.getElementById('errormsg').innerHTML = data.msg;
					
					$.mobile.changePage( "#failureshop", {transition: "flip"} );
				}
	
		         
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
   }
   else
		 {
		 toast('Please agree to all terms and conditions');	 
		 }
   }

	
		
}

function showtnc()
{
	openInWebView(versionurl+'tc.html');
}
function updateShop()
{

   var support_email = $('#support_email').val();
   var support_contact =  $('#support_contact').val();
   var shop_tnc =  $('#shop_tnc').val();
   var shop_color = $('#shop_color').spectrum('get').toHexString();
   shop_color=shop_color.substring(1,shop_color.length);


   var shop_pic=versionurl+'mliveshareshop/uploads/'+localStorage.getItem('shoppic');
    var logo_pic=versionurl+'mliveshareshop/uploads/'+localStorage.getItem('logopic');
   //filenmshop ='http://mliveshare.com/photo/1.jpg';


   if(support_email=='' || support_contact=='' )
   {
		toast('Please enter mandatory fields!');
   }
   else
   {

   $.ajax({
			url: SERVER1+'updtStore',
			type: 'GET',
			timeout: 30000,
		  	data: {
				
				'store_id': localStorage.getItem('gbrd'),
				'shop_photo': shop_pic,
				'logo': logo_pic,
				'support_email': support_email,
				'support_contact': support_contact,
				'shop_color': shop_color,
				'tc': shop_tnc,
				
				
			},
			success: function(data, textStatus, xhr) {
				
				data=JSON.parse(data);
				console.log('JSONDATA:'+JSON.stringify(data));

				if(data.success=='1')
				{
					
                      toast('Shop Updated!!');


                    /*  $.get('http://mliveshare.com/welcome/getProductDetails/0/373737/'+localStorage.getItem('bid')+'/4', {}, function(res) {
							//$.mobile.hidePageLoadingMsg();
							var data = { res: res }; 
							var json = JSON.stringify(data);

							console.log(res);

							document.getElementById('preview').innerHTML=res;
						});
				*/
				window.open('http://mliveshare.com/welcome/getProductDetails/0/373737/'+localStorage.getItem('gbrd')+'/4');


					
				}
				else
				{
					//toast(data.msg);
					document.getElementById('errormsgupdate').innerHTML = data.msg;
					
					$.mobile.changePage( "#failureshopupdate", {transition: "flip"} );
				}
	
		         
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
   }

	
		
}


function checkshopname(sid)
{

}

function authenticate(){

   var uname = $('#username_login').val();
   var pwd =  $('#pass_login').val();


 if(uname=='' || pwd=='' || gbrd==''){
  toast('Please enter Username/password');
 }else{
  

 $.ajax({
    url: loginserver+'APIs/store_login_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','userid': uname, 'pswd': pwd},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {

     console.log('JSONDATA:'+JSON.stringify(data));
	
   
   if(data.data.length=='1'){

    localStorage.setItem('gbrd',gbrd);
	    //console.log('BID'+data.data[0].global_brand_id );

	    var new_app=localStorage.getItem('latestApp');

        if(new_app==null || new_app=='')
  	      new_app='true';

 if(new_app=='true')
 {

    				$.mobile.changePage( "#homepage", {transition: "flip"} );

					document.getElementById('user_name_home').innerHTML = data.data[0].store_name;
					document.getElementById('user_id_home').innerHTML = BrandNameShow+' Franchise';//data.data[0].phone;
					document.getElementById("ppichome").src = data.data[0].shop_photo;

					document.getElementById("user_wallet_home").innerHTML=parseInt(data.data[0].estimated_monthly_points);
					document.getElementById("user_points_home").innerHTML=parseInt(data.data[0].actual_monthly_points);

                    console.log('data.data.store_name'+data.data[0].store_name);
					document.getElementById('user_id_home_panel').innerHTML = data.data[0].store_name;

					document.getElementById('profilenm').innerHTML =BrandNameShow+' Franchise';// data.data[0].first_name;


					
					//$('#profilenm').val(data.data.first_name);

					console.log('data.data.store_id:'+data.data[0].store_id);
					console.log('data.data.store_code:'+data.data[0].store_code);

					
    					
 					
						 user.store_id = data.data[0].store_id;
						 user.store_code = data.data[0].store_code;
						 user.id=data.data[0].id;
						 localStorage.setItem('bid',user.store_id);
 					




					

					console.log('store_id:'+user.store_id);
					console.log('store_code:'+user.store_code);


					user.email = data.data[0].email_addres;
					user.shop_cat = data.data[0].shop_cat;
					user.PhotoofShop = data.data[0].shop_photo;
					document.getElementById("backfromcustom").href="#homepage"; 

					localStorage.setItem("usernamemloyal_share",uname);
					localStorage.setItem("userpassloyal_share",pwd);
		}
		else
		{
			console.log("in else");
				 $.mobile.changePage( "#downpage", { transition: "none"} );

		}

	//showLivemonitor('today');
   
   }else{
    toast('Authentication failed');
   }
    },
    error: function(xhr, textStatus, errorThrown) {
		toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
  

   


   

 }
}



function downloadApp(param) {

	

			location.href=versionurl+'mlswab.apk';



}
function authenticateuser()
{
	authenticate();
	
			 
/*
   var username = $('#username_login').val();
   var pass =  $('#pass_login').val();
   var bid=$('#shopid').val();
 

   if(username=='' || pass=='')
   {
		toast('Please enter mandatory fields!');
   }
   else
   {
   $.ajax({
			url: SERVER1+'loginshopbid',
			type: 'GET',
			timeout: 30000,
		  	data: {
				
				'username': username,
				'pwd': pass,
				'store_id':bid
				
			},
			success: function(data, textStatus, xhr) {
				
				data=JSON.parse(data);
				console.log('JSONDATA:'+JSON.stringify(data));

				if(data.success=='1')
				{

				$.mobile.changePage( "#homepage", {transition: "flip"} );
					
				
					

					document.getElementById('user_name_home').innerHTML = data.data.store_name;
					document.getElementById('user_id_home').innerHTML = data.data.phone;
					document.getElementById("ppichome").src = data.storeinfo.shop_photo;

					console.log(data.data.shop_photo);

					if(data.data.bankname==null || data.data.bankname=='' )
							document.getElementById("bank_detail").style.display = "block";
					else
						document.getElementById("bank_detail").style.display = "none";



					



                    console.log('data.data.store_name'+data.data.store_name);
					document.getElementById('user_id_home_panel').innerHTML = data.data.store_name;

					document.getElementById('profilenm').innerHTML = data.data.first_name;
					
					//$('#profilenm').val(data.data.first_name);

					console.log('data.data.store_id'+data.data.store_id);

					user.store_id = data.data.store_id;

					user.id=data.data.id;


					user.store_name=data.data.store_name;

					user.mobile=data.data.phone;

					console.log('store_id'+user.store_id);


					user.email = data.data.email_addres;
					user.shop_cat = data.data.shop_cat;
					user.PhotoofShop = data.data.shop_photo;

					localStorage.setItem("usernamemloyal_share",username);
					localStorage.setItem("userpassloyal_share",pass);
					localStorage.setItem("LoginType",data.data.login_type);
					localStorage.setItem("bid",data.data.store_id);

					//Customise shop

					document.getElementById("backfromcustom").href="#homepage"; 
					console.log(data.storeinfo.support_email);

					$("#support_email").val( data.storeinfo.support_email);
					$("#support_contact").val(data.storeinfo.support_contact);
					document.getElementById("shop_tnc").innerHTML = data.storeinfo.tc;
					document.getElementById("shop_photo").src = data.storeinfo.shop_photo;
					document.getElementById("shop_logo").src = data.storeinfo.logo;

					//$('#shop_color').val(data.storeinfo.shop_color);
					console.log(data.storeinfo.shop_color);



					$('#shop_color').spectrum("set", data.storeinfo.shop_color);
				  if(data.data.device_push_id=='' || data.data.device_push_id==null)
					{

				   	showPOPupNot();

				   }



				}
				else
				{
					$('#username_login').val('');
   					$('#pass_login').val('');
					toast(data.msg);
					
				}
	
		         
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
   }

	*/
	
}

$(document).on('pageshow', '#profilepage', function (event, ui) {
 
	//alert('dddd');

});

$(document).on('pageshow', '#mdealer', function (event, ui) {

	  //var golbal_cat_id=Math.ceil(Math.random() * 1000)

	 // localStorage.setItem('golbal_cat_id',golbal_cat_id);
  
 
	//showCategory();

	//showDealers();

});

$(document).on('pageshow', '#managecategory', function (event, ui) {

	  var golbal_cat_id=Math.ceil(Math.random() * 1000)

	  localStorage.setItem('golbal_cat_id',golbal_cat_id);
  
 
	showCategory();

});

function mancat()
{
	 var golbal_cat_id=Math.ceil(Math.random() * 1000)

	  localStorage.setItem('golbal_cat_id',golbal_cat_id);
  
 
	showCategory();

}

function manpro()
{
	 var golbal_prd_id=Math.ceil(Math.random() * 10000)

	  localStorage.setItem('golbal_prd_id',golbal_prd_id);
  
 
	showProductnew();

}

$(document).on('pageshow', '#manageproduct', function (event, ui) {

	

	 var golbal_prd_id=Math.ceil(Math.random() * 10000)

	  localStorage.setItem('golbal_prd_id',golbal_prd_id);
  
 
	showProductnew();

});

function loadCateg()
{
  $.ajax({
   
    url: SERVER+'getcat/getloccatsall/'+gbrd,
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: { },
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
   console.log('Data2:'+JSON.stringify(data));
        var listItems= "";
			listItems+= "<option value='0' disabled='disabled' style='background-color:#3E3E3E' selected='selected'>--Select Category--</option>";
        for (var i = 0; i < data.length; i++)
			{

                listItems+= "<option value='" + data[i].id + "'>" + data[i].name + "</option>";
             } 
      
	  $("#prod_cat").html(listItems);
   
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });
	 
	 
}

function logout()
{

	localStorage.setItem("usernamemloyal_share",'');
	localStorage.setItem("userpassloyal_share",'');
	localStorage.setItem("LoginType",'');
	

	$.mobile.changePage('#slidepage');


}

function showcust()
{

	document.getElementById("getstarted").style.display = "block";
	$.mobile.changePage('#customprofile');
	
}

function openInWebView(url)
{
	var ref = window.open(url, '_blank', 'location=yes,toolbar=yes');
}

function openInWebViewold(url)
	{
	
    
		  cordova.ThemeableBrowser.open(url, '_blank', {
               backButtonCanClose: true,
    statusbar: {
        color: '#293B7A'
    },
    toolbar: {
        height: 78,
        color: '#293B7A'
    },
    title: {
        color: '#ffffff',
  staticText: '', 
        showPageTitle: false
    },
    backButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'left',
        event: ''
    },
    forwardButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'center',
        event: ''
    },
    closeButton: {
        wwwImage: 'img/leftMenu_back.png',
        wwwImagePressed: 'img/leftMenu_back.png',
        align: 'left',
  marginLeft: '16px',
        event: ''
    },
    customButtons: [
        {
            image: 'share',
            imagePressed: 'share_pressed',
            align: 'right',
            event: 'sharePressed'
        }
    ],
    menu: {
        image: 'menu',
        imagePressed: 'menu_pressed',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
           /* {
                event: 'helloPressed',
                label: 'Hello World!'
            },
            {
                event: 'testPressed',
                label: 'Test!'
            }*/
        ]
    },
    backButtonCanClose: true
}).addEventListener('backPressed', function(e) {
    //alert('back pressed');
}).addEventListener('helloPressed', function(e) {
    //alert('hello pressed');
}).addEventListener('sharePressed', function(e) {
    //alert(e.url);
}).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    console.error(e.message);
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    console.log(e.message);
});


	}

function showSupport()
{
	location.href='https://taghash.co/support.html';
}



function createShop()
{

							   $.ajax({
									 url: SERVER1+'checkshopid?store_id='+gbrd,
									 type: 'GET',
									 timeout: 50000,
									 dataType: 'json',
									

									success: function(data1, textStatus, xhr) {

										console.log(JSON.stringify(data1));
										//console.log(data1.storeinfo.store_name);
											
											
											if(data1.success==0){
												$.mobile.changePage('#profilepage');
											}
											else
											{
												
												document.getElementById('shopname').innerHTML = data1.storeinfo.store_name;
											    document.getElementById('transferfromname1').innerHTML = data1.data[0].user_name;
					                            document.getElementById('transferfromregid1').innerHTML = data1.data[0].pass2;
												$.mobile.changePage('#shopcreated');
											



												
											}

											//console.log(pointval);

								
											
									},
									error: function(xhr, textStatus, errorThrown) {
												toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
									}
								  });
	

}

function showAbout()
{

								   $.ajax({
									 url: SERVER1+'checkshopid?store_id='+gbrd,
									 type: 'GET',
									 timeout: 50000,
									 dataType: 'json',
									

									success: function(data1, textStatus, xhr) {

										console.log(JSON.stringify(data1));
										//console.log(data1.storeinfo.store_name);

										if(data1.success==0)
										{
												toast('No Info Available');
										}
										else
										{
											
											   if(data1.storeinfo.tc==null ||  data1.storeinfo.tc=='')
											   {

											   	document.getElementById('aboutbrand').innerHTML = 'No Info Available'

											   }
											   else
											   {
											
												document.getElementById('aboutbrand').innerHTML = data1.storeinfo.tc;
											   }
											   
												$.mobile.changePage('#about1');
											


										}
										
											//console.log(pointval);

								
											
									},
									error: function(xhr, textStatus, errorThrown) {
												toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
									}
								  });
	


}

function showCustom()
{

								   $.ajax({
									 url: SERVER1+'checkshopid?store_id='+gbrd,
									 type: 'GET',
									 timeout: 50000,
									 dataType: 'json',
									

									success: function(data1, textStatus, xhr) {

										console.log(JSON.stringify(data1));
										//console.log(data1.storeinfo.store_name);

											if(data1.success==0)
											{
												toast('No record found.');
											}
											else
											{
											
											
												$("#support_email").val( data1.storeinfo.support_email);
												$("#support_contact").val(data1.storeinfo.support_contact);
												document.getElementById("shop_tnc").innerHTML = data1.storeinfo.tc;
												document.getElementById("shop_photo").src = data1.storeinfo.shop_photo;
												document.getElementById("shop_logo").src = data1.storeinfo.logo;

											   
												$.mobile.changePage('#customprofile');
											


                                            }
										
											//console.log(pointval);

								
											
									},
									error: function(xhr, textStatus, errorThrown) {
												toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
									}
								  });
	


}
///////////GMAIL LOGIN///////////////////

