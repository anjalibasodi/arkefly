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

			insert_top("div","MENU", class: "_menu _keep") {
				attribute(" data-ur-toggler-component","button")
			}
			$("./ul"){
				attribute("data-ur-toggler-component","content")
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
		
		remove(".//section[@class='blockright']")
		
		$(".//section[@class='home-searchcontrol']") {
			attribute("data-ur-set", "toggler")

			$("./div[@class='top']") {
				attribute(" data-ur-toggler-component","button")
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
		$(".//section[@class='home-destinations']") {
			$("./section[@class='hp-destinations']") {
				attribute("data-ur-set", "toggler")
				
				$("./h3") {
					attribute(" data-ur-toggler-component","button")
				}
				$("./a"){
					attribute("data-ur-toggler-component","content")
				}
			}
			
		}
		$(".//section[@class='home-newsletter']") {
			$("./section[@class='hp-newsletter']") {
				attribute("data-ur-set", "toggler")
				
				$("./h3") {
					attribute(" data-ur-toggler-component","button")
				}
				insert_at("bottom","div", class: "_newsletter") {
					attribute(" data-ur-toggler-component","content")
					insert_top("div", class: "_in-newsletter") {
						
					}
				}
				$("./a"){
					move_to("/html/body//div[contains(@class, '_in-newsletter')]", "after")
				}
				$("./p"){
					move_to("/html/body//div[contains(@class, '_in-newsletter')]", "after")
				}
				remove("./span")
			}
			
		}
	}

  }
