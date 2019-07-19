class MyModalFactory{
  static createModal(){
  		let modal = $("<div>", {"class": "mymodal container"})
			let header = $("<div>", {"class": " myheader justify-content-end"})
      
    let content = $("<div>", {"class": "row", "text": new Date()})
    let closeButton = $("<button>", {"text": "x"})
    closeButton.click(()=>modal.remove())
    header.append(closeButton)
    modal.css({"left": Math.random()*100, "top": Math.random()*100})
    modal.append(header)
    modal.append(content)
    $(modal).draggable({
    	handle: ".myheader"
    })
    $(modal).resizable();
    $("body").append(modal)
  }
}

