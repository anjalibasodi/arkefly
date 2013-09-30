# Place holder/example file
# Place holder/example file
$("/html"){
	remove_all_styles()
}

$("./body") {
	
	add_class("mw_bestemmingen")
	$(".//div[@class='destinations-mainvisual']") {
		remove("./img")
		$$("a.destination") {
			remove(".//span[@class='bestemmingen']")
			remove(".//span[@class='arrow']")
			remove(".//div[@class='clr']")
		}
		
		$("./h1[@class='text-shadow']") {
			move_to("/html/body/div[@class='page-back']",position("before"))
			add_class("page_title")
		}
	}
	
}


  
