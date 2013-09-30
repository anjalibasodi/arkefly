$("/html"){
	remove_all_styles()
}

$("./body") {

	$("./div[@class='page-back']") {
		$(".//div[contains(@class, 'breadcrumbs')]"){
			$("./ul/li[3]"){
				move_to("/html/body//div[@class='page-back']","before")
				add_class("page_title")
				name("h1")				
			}
			remove()
		}
		$(".//div[contains(@class, 'editContent')]") {
			remove("./h1")
			remove("./div[contains(@class, 'serviceIntroduction')]")
			$("./div[contains(@class, 'slider')]") {
				$("./div[contains(@class, 'sliderNav')]") {
					inner("text")
				}
			}
			insert("div",class:"swipe"){
				#attribute("data-ur-set", "carousel")
				#attribute("data-ur-carousel-component", "view_container")
				#attribute("data-ur-id", "MyFirstCarousel")
				attribute("id", "mySwipe")
				attribute("style","max-width: 229px; margin:0 auto")
				insert_bottom("div",class:"swipe-wrap"){
					#attribute("data-ur-carousel-component", "scroll_container")
				}
				#move_to("/html/body/div[contains(@class, 'page-back')]//div[contains(@class, 'editContent')]/div[contains(@id, 'slider')")
			}
			$$(".serviceContainer"){
				#attribute("data-ur-carousel-component","item")
				remove("./div[contains(@class, 'service')]/p")
				remove("./div[contains(@class, 'service')]/a[2]")
				remove("./div[contains(@class, 'service')]//div[contains(@class, 'pricebadge')]")
				
				move_to("/html/body/div[contains(@class, 'page-back')]//div[contains(@class, 'editContent')]/div[contains(@class, 'swipe')]/div[contains(@class, 'swipe-wrap')]")
			}
			move("./nav","../div","bottom")
			$("./div[@id='slider']"){
				remove("./div[@id='sliderNav']")
				$("./div[@id='slideshow']"){

					attribute("style"){
						remove()
					}
					$("./a"){
						attribute("style"){
							remove()
						}
						remove("./div[@class='button']")
					}
					$("./a[1]"){
						$$("img") {
							attribute("src", "http://www.arkefly.nl/content/newmarketing/nl-NL/images/landingpages/services/servicesSliderReisklassen.png")
						}
					}
					$("./a[2]"){
						$$("img") {
							attribute("src", "http://www.arkefly.nl/content/newmarketing/nl-NL/images/landingpages/services/servicesSliderChairReservation.png")
						}
					}
					$("./a[3]"){
					$$("img") {
							attribute("src", "http://www.arkefly.nl/content/newmarketing/nl-NL/images/landingpages/services/servicesSliderOnlineCheckin.png")
						}
					}
				}
			}
		}
	}
	remove("./div[contains(@id, 'social-media-tooltip-data')]")
	remove("./div[contains(@id, 'divChatButton')]")
	
}