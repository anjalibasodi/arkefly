# Place holder/example file
# Place holder/example file
$("./body") {
  # Add a class to the body for page-specific styling
  add_class("_home")
  # Move items we want to keep on the page to the body, out of the _hide divs
  $("./nav[@class='main-nav']") {
        add_class("_keep")
		       
		$("./div[@class='cnt-nav']") {
			attribute("data-ur-set", "toggler")

			insert_top("div","MENU", class: "_menu _keep mw_bar2") {
				attribute(" data-ur-toggler-component","button")
			}
			$("./ul"){
				attribute("data-ur-toggler-component","content")
				$("./li/a"){
					add_class("mw_bar1")
				}
			}
			move_to("/html/body/div[contains(@class, '_header')]", "after")
		}
		name("div")
		
    }
	# $(".//div[@class= 'cnt-nav']") {
	#	      ur_toggler("./div","./ul")
	#	}
	remove("./div[@id='CookieBar']")
	$("./div[@class='page-back']") {
		remove(".//section[@class='marketing-banner-top']")
		
		$(".//section[@class='blockright']") {
		
		
			$("./div[@id='marketing-carrousel']") {
		
				attribute("data-ur-set", "carousel")
				attribute("data-ur-carousel-component", "view_container")
				attribute("data-ur-id", "MyFirstCarousel")
				
				$("./div[@class='photo-bg']") {
					attribute(" data-ur-carousel-component","scroll_container")
					insert_top("img"){
						attribute("data-ur-carousel-component","item")
						attribute("src","http://www.arkefly.nl/Content/NewMarketing/nl-NL/Images/homepage/marketing-banner/ticketsale.jpg")
						attribute("alt","1")
					}
					insert_top("img"){
						attribute("data-ur-carousel-component","item")
						attribute("src","http://www.arkefly.nl/Content/NewMarketing/nl-NL/Images/homepage/marketing-banner/betaalbaar-usa.jpg")
						attribute("alt","2")
					}
					insert_top("img"){
						attribute("data-ur-carousel-component","item")
						attribute("src","http://www.arkefly.nl/Content/NewMarketing/nl-NL/Images/homepage/marketing-banner/ervaar-antillen.jpg")
						attribute("alt","3")
					}
				}
				insert_top("div","next") {
					attribute(" data-ur-carousel-component","button")
					attribute(" data-ur-carousel-button-type","next")
				}
				insert_top("div","prev") {
					attribute(" data-ur-carousel-component","button")
					attribute(" data-ur-carousel-button-type","prev")
				}
				insert_top("span","-- count --") {
					attribute(" data-ur-carousel-component","count")
				}
			}
			remove("./div[@class='top-offers']")

		}
		
		$(".//section[@class='home-searchcontrol']") {
			attribute("data-ur-set", "toggler")

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
		$(".//section[@class='hp-services']") {
			$("./div[@id='tabs']") {
				attribute("data-ur-set", "tabs")
				 #data-ur-tabs-component='button' data-ur-tab-id='first' data-ur-state='enabled
				$("./div[@class='top']") {
					
					$("./ul/li[2]") {

						$(".//div[@class='tab-middle']") {
							attribute("data-ur-tabs-component","button")
							attribute("data-ur-tab-id","second")
							
							move_to("/html/body//div[contains(@class, 'top')]", "after")

							name("span")
							
						}
					}
					$("./ul/li[1]") {

						$(".//div[@class='tab-middle']") {
							attribute("data-ur-tabs-component","button")
							attribute("data-ur-tab-id","first")
							attribute("data-ur-state","enabled")
							
							move_to("/html/body//div[contains(@class, 'top')]", "after")

							name("span")
							
						}
					}
				}
				#data-ur-tabs-component='content' data-ur-tab-id='first' data-ur-state='enabled'
				$("./div[@id='tabs-1']") {
					attribute("data-ur-tabs-component","content")
					attribute("data-ur-tab-id","first")
					attribute("data-ur-state","enabled")
							
				}
				$("./div[@id='tabs-2']") {
					attribute("data-ur-tabs-component","content")
					attribute("data-ur-tab-id","second")
							
				}
				remove("./div[@class='top']")
			}
			
			
		}
		remove(".//section[@class='home-destinations']")
		remove(".//section[@class='home-newsletter']")
		
	}

  }
