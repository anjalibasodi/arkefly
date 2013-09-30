$("/html"){
	remove_all_styles()
}

$("./body"){
	$("./div[@class='page-back']") {
remove(".//section[@id='faqpage']//hr")
		remove(".//div[@id='ContactFormButtons']")
		
		$(".//input[@id='searchQuestionText']") {
			attribute("value","")
		}
		$(".//section[@id='faq-details']"){
			$("./aside"){
			add_class("_left_content")
				$("./div[@id='faqcontent@counter']"){
					attribute("data-ur-set", "toggler")
					$("./span"){
						attribute(" data-ur-toggler-component","button")
						$("./a"){
							remove_attributes()
						}
					}
					$("./div"){
						attribute("data-ur-toggler-component","content")
					}
				}
			}
		}
		$(".//section[@id='faq-search']"){
			$(".//form"){
				remove("./div/div[1]")
				remove("./div/br")
				$(".//div[contains(@id,'searchquestion-submit')]//span[contains(@class,'button-middle')]"){
					text(){
						clear()
					}
				}
			}
		}
		remove(".//section[@id='faq-history']")
		remove(".//div[contains(@id,'faqpage-footer']")
		$(".//header[@id='faqpage-header']"){
			$("./h1"){
				move_to("/html/body//div[@class='page-back']","before")
				add_class("page_title")
			}
		}
	}
}
