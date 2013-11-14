$('./body') {
	remove("./div[@id='CookieBar']")
	
	$("./header") {
		add_class("mw_header")
		add_class("dummy")
	}
	remove(".//div[@class='vliegtickets-header']")
	
	
	# Move items we want to keep on the page to the body, out of the _hide divs
	$("./nav[@class='main-nav']") {
		add_class("_keep")
			   
		$("./div[@class='cnt-nav']") {
			attribute("data-ur-set", "toggler")

			insert_top("div", class: "_menu _keep mw_bar2") {
				attribute(" data-ur-toggler-component","button")
			}
			$("./ul"){
				attribute("data-ur-toggler-component","content")
				$("./li/a"){
					add_class("mw_bar1")
				}
				remove("./li[4]")
			}
			move_to("/html/body/div[contains(@class, '_header')]", "after")
		}
		name("div")
		
	}
	
	
}
