package au.com.carguide.pages;

import au.com.carguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'buy + sell')]")
    WebElement buyAndSell;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Search Cars')]")
    WebElement searchcaroption;

    @CacheLookup
    @FindBy(xpath = "//header/div[@id='u_H']/div[1]/div[1]/ul[1]/li[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/a[1]")
    WebElement usedCarSearch;

    public void mouseHoverOnBuyandSellTab() {
        mouseHoverToElement(buyAndSell);
        log.info("mouse hover on buy and sell : " + buyAndSell.toString());
    }

    public void clickOnsearchCarOption() {
        clickOnElement(searchcaroption);
        log.info("Clicking on Search Car Option : " + searchcaroption.toString());
    }

    public void clickOnUsedsearchCarOption() {
        clickOnElement(usedCarSearch);
        log.info("Clicking on Used Search Car Option : " + usedCarSearch.toString());

    }
}
