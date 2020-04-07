window.onload = function() {
    var main = document.getElementById("ourProducts");

    for (var i = 0; i < imgData.length; i++) {
        console.log(imgData[i].Name);
        var productCard = document.createElement("div");
        var productCardClass = document.createAttribute("class");
        productCardClass.value = "col-sm-12 col-md-6 col-lg-4";
        productCard.setAttributeNode(productCardClass);

        var card = document.createElement("div");
        var cardClass = document.createAttribute("class");
        cardClass.value = "card mb-4 shadow-sm";
        card.setAttributeNode(cardClass);

        var cardHeader = document.createElement("div")
        var cardHeaderClass = document.createAttribute("class");
        cardHeaderClass.value = "card-header";
        var HeaderH4 = document.createElement("h4");
        var HeaderH4Class = document.createAttribute("class");
        HeaderH4Class.value = "my-0 font-weight-normal";
        var HeaderH4Text = document.createTextNode(this.imgData[i].Price); // Change this <3
        HeaderH4.appendChild(HeaderH4Text);
        HeaderH4.setAttributeNode(HeaderH4Class);
        HeaderH4.appendChild(HeaderH4Text);
        cardHeader.setAttributeNode(cardHeaderClass);
        cardHeader.appendChild(HeaderH4);
        card.appendChild(cardHeader);

        var cardBody = document.createElement("div");
        var cardBodyClass = document.createAttribute("class");
        cardBodyClass.value = "card-body";
        cardBody.setAttributeNode(cardBodyClass);
        var productTitle = document.createElement("h1");
        var productTitleClass = document.createAttribute("class");
        productTitleClass.value = "card-title pricing-card-title";
        var productTitleText = document.createTextNode(this.imgData[i].Name) //Header
        productTitle.setAttributeNode(productTitleClass);
        productTitle.appendChild(productTitleText);
        cardBody.appendChild(productTitle);

        var Details = document.createElement("ul");
        var DetailsClass = document.createAttribute("class");
        DetailsClass.value = "list-unstyled mt-3 mb-4";
        Details.setAttributeNode(DetailsClass);

        var productImage = document.createElement("img");
        var productImageClass = document.createAttribute("class");
        productImageClass.value = "img-fluid";
        var srcStr = './img/' + this.imgData[i].Name + '.jpg';
        var altStr = this.imgData[i].Name + ' hat';
        var imgSrc = document.createAttribute("src");
        imgSrc.value = srcStr;
        var imgAlt = document.createAttribute("alt");
        imgAlt.value = altStr;
        productImage.setAttributeNode(productImageClass);
        productImage.setAttributeNode(imgSrc);
        productImage.setAttributeNode(imgAlt);
        Details.appendChild(productImage);

        var prodDesc = document.createElement("li");
        var prodDescText = document.createTextNode(this.imgData[i].Description);
        prodDesc.appendChild(prodDescText);
        Details.appendChild(prodDesc);

        var prodSize = document.createElement("li");
        var prodSizeText = document.createTextNode("Available Size: " + this.imgData[i].availableSize);
        prodSize.appendChild(prodSizeText);
        Details.appendChild(prodSize);

        var prodRegular = document.createElement("li");
        var prodRegText = document.createTextNode("Regular: " + this.imgData[i].Regular);
        prodRegular.appendChild(prodRegText);
        Details.appendChild(prodRegular);

        var prodSalePrice = document.createElement("li");
        var prodSalePriceText = document.createTextNode("Sale: " + this.imgData[i].Price);
        prodSalePrice.appendChild(prodSalePriceText);
        Details.appendChild(prodSalePrice);


        var phurchaseButton = document.createElement("Button");
        var phurchaseButtonType = document.createAttribute("type");
        phurchaseButtonType.value = "button";
        var phurchaseButtonClass = document.createAttribute("class");
        phurchaseButtonClass.value = "btn btn-lg btn-block btn-outline-success";
        var phurchaseButtonText = document.createTextNode("Purchase");
        phurchaseButton.appendChild(phurchaseButtonText);
        phurchaseButton.setAttributeNode(phurchaseButtonType);
        phurchaseButton.setAttributeNode(phurchaseButtonClass);

        cardBody.appendChild(Details);
        cardBody.appendChild(phurchaseButton);
        card.appendChild(cardBody);
        productCard.appendChild(card);
        main.appendChild(productCard);
    }
}


/*
    The DOM script replicates this
 <!-- <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="card mb-4 shadow-sm">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">ON SALE</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">Calgary Flames</small>
                        </h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <img class="img-fluid" src="./img/calgary.jpg" alt="Calgary Flames Hat">
                            <li>Calgary Flames Hat</li>
                            <li>Sizes: XS/S/M/L</li>
                            <li>Regular: 29.99</li>
                            <li>Sale: 21.97</li>
                        </ul>
                        <button type="button" class="btn btn-lg btn-block btn-outline-primary">Purchase</button>
                    </div>
                </div>
            </div>
*/