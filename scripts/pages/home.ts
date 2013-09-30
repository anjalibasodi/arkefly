# Place holder/example file
# Place holder/example file
$("/html"){
	remove_all_styles()
}

$("./body") {
	
  # Add a class to the body for page-specific styling
  add_class("_home")
  
	
	# Remove services and oneStatTag
	remove("./section[@class='home-services']")
	remove("./div[@id='OneStatTag']")
	remove(".//div[@class='searchcontrol-menu']/div[@class='divider']")
	remove(".//div[@class='searchcontrol-menu']/div[@class='corner']")
	
	# $(".//div[@class= 'cnt-nav']") {
	#	      ur_toggler("./div","./ul")
	#	}
	
	
	
	$("./div[@class='page-back']") {
		remove(".//section[@class='marketing-banner-top']")
		remove(".//section[@class='home-cco']")
		$(".//section[@class='blockright']") {
			
			remove(".//div[@class='menu']")
			remove(".//div[@class='menu-bg']")
			
			#Home gallery navigations
			insert_bottom("div") {
				insert_top("a"){
					attribute("onclick","mySwipe.prev()")
				}
				insert_bottom("a"){
					attribute("onclick","mySwipe.next()")
				}
				attribute("class","gallerynav")
			}
					
					
			$("./div[@id='marketing-carrousel']") {
				
				remove_class("carousel")
				attribute("id") {
					value() {
						set("mySwipe")
					}
				}
				
				#Setting up the width of banner container equals to the image width
				attribute("style","max-width: 500px; margin:0 auto")
				attribute("class","swipe")
				
				$("./div[@class='photo-bg']") {
					remove("./a")
					attribute("class") {
						value() {
							set("swipe-wrap")
						}
					}
					insert_top("div") {
						insert_top("img"){
							attribute("src","http://www.arkefly.nl/Content/NewMarketing/nl-NL/Images/homepage/marketing-banner/ticketsale.jpg")
						}
					}
					insert_top("div") {
						insert_top("img"){
							attribute("src","http://www.arkefly.nl/Content/NewMarketing/nl-NL/Images/homepage/marketing-banner/betaalbaar-usa.jpg")
						}
					}
					
					insert_top("div") {
						insert_top("img"){
							attribute("src","http://www.arkefly.nl/Content/NewMarketing/nl-NL/Images/homepage/marketing-banner/ervaar-antillen.jpg")
						}
					}
				}

			}
			remove("./div[@class='top-offers']")

		}
		
		$(".//section[@class='home-searchcontrol']") {
			attribute("data-ur-set", "toggler")
			
			#Form Styling
			$(".//form[@id='flight-search-form']") {
				$(".//p") {
					add_class("mw_formheader")
				}
			}
			remove(".//div[@class='icon']")
			remove(".//span[@class='info']")
			remove(".//div[@class='travelclass']/span")
			$(".//div[@class='btn-grey']") {
				remove(".//span[@class='btn-left']")
				remove(".//span[@class='btn-right']")
			}
			
			$(".//select[@id='ToClass']") {
				attribute("placeholder","Zitcomfort en service")
			}

			
			$("./div[@class='top']") {
				attribute(" data-ur-toggler-component","button")
				$(".//h3"){
					add_class("mw_bar2")
				}
			}
			$("./div[@class='middle']"){
				attribute("data-ur-toggler-component","content")
			}
		}
		
		remove(".//section[@class='hp-services']")
		remove(".//section[@class='home-destinations']")
		remove(".//section[@class='home-newsletter']")
		
	}
	

  }
