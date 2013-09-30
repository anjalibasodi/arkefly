$("./body") {
	
	$("./footer"){
		$$("div.right") {
			remove()
		}
		
		
		
		$("./div[@class='ftr-links']"){
			remove("./a[1]")
		}
		
		$("./div[@class='ftr-bottom']//div[@class='left']"){
			add_class("myleft")
			$("./ul[@class='af-links']/li/span/a[3]"){
				move_to("/html/body/footer/div[@class='ftr-bottom']//ul[@class='partners']/li/span")
			}
			$("./ul[@class='partners']/li/span"){
				remove("./a[3]")
				$("./a"){
					move_to("/html/body/footer/div[@class='ftr-links']")
				}
			}
			remove("./ul[@class='af-links']")
			$("./div[@class='phone-block']"){
					move_to("/html/body/footer/div[@class='ftr-links']")
			}
		}
		remove("./div[@class='ftr-bottom']")

	}
	
	$("./div[@class='page-back']") {
		
		$("./div[@class='usa-travelers']"){
			move_to("/html/body/footer/div[@class='ftr-links']","")
			name("a")
			inner("US Travellers")
		}
	}
	
	
}
