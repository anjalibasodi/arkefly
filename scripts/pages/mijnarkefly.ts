$("/html"){
	remove_all_styles()
}

$("./body"){
	$("./div[@class='page-back']") {
		$(".//section[contains(@class,'my-brand')]"){
			
			$(".//form[@id='bookingnumber-form']") {
				$(".//input[@id='LastName']") {
					attribute("placeholder","Achternaam")
				}
				$(".//input[@id='BookingNumber']") {
					attribute("placeholder","Boekingsnummer")
				}
			}
			
			$("./div[1]"){
				$(".//h1"){
					text() {
						set("My Arkefly Inloggen")
					}
					move_to("/html/body//div[@class='page-back']","before")
					add_class("page_title")
				}
				
				remove(".//div[@class='block-lastnamelogin']/span[@class='sbt']")
				
				$(".//p[@class='login-intro']") {
					add_class("text-shadow-small")
					move_to("/html/body//div[@class='login-dual']","top")
				}
				
				
				$(".//div[@class='btn-blue']/a") {
					remove(".//span[@class='btn-blue-left']")
					remove(".//span[@class='btn-blue-right']")
				}
				
				$(".//div[contains(@class,'bordered')]//div[contains(@class,'block-lastnamelogin')]"){
					remove("./label")
				}
			}
		}
	}
}
